/*
 *
 * @licstart  The following is the entire license notice for the
 *  JavaScript code in this page.
 *
 * Copyright (c) 2016 Kyle Farwell <m@kfarwell.org>
 * Copyright (c) 2016 Keefer Rourke <keefer.rourke@gmail.com>
 *
 * Permission to use, copy, modify, and/or distribute this software for
 * any purpose with or without fee is hereby granted, provided that the
 * above copyright notice and this permission notice appear in all
 * copies.
 *
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND ISC DISCLAIMS ALL WARRANTIES WITH
 * REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL ISC BE LIABLE FOR ANY
 * SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT
 * OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * @licend  The above is the entire license notice
 * for the JavaScript code in this page.
 *
 */

/* fit canvas to window */
var sizeCanvas = function() {
    if (window.innerWidth / 1.33 <= window.innerHeight) {
        /* fit width if the whole 1.33:1 (4:3) canvas will fit */
        canvas.width = window.innerWidth;
        canvas.height = window.innerWidth / 1.33;
    } else {
        /* else fit height */
        canvas.width = window.innerHeight * 1.33;
        canvas.height = window.innerHeight;
    }
    canvas.style.top = (window.innerHeight - canvas.height) / 2 + "px";
    canvas.style.left = (window.innerWidth - canvas.width) / 2 + "px";
};

/* create canvas */
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.style.position = "absolute";
sizeCanvas();
ctx.webkitImageSmoothingEnabled = false;
ctx.imageSmoothingEnabled = false;
ctx.mozImageSmoothingEnabled = false;
document.body.appendChild(canvas);

/* variables */
if (!docCookies.hasItem("level")) {
    docCookies.setItem("level", 0, 31536000);
    docCookies.setItem("strikes", 0, 31536000);
}
var level = parseInt(docCookies.getItem("level"));

var borked = false;
switch(level) {
    case 4: borked = "keyboard"; break;
    case 6: borked = "mouse"; break;
    case 8: borked = "mobo"; break;
    case 10: borked = "monitor"; break;
    case 12: borked = "tower"; break;
}

/* audio */
var music = new Audio("snd/comfortablydumb.ogg");
music.loop = true;
music.play();

var quack = new Audio("snd/quack.ogg");

/* game object definitions */
var bg = {
    w: canvas.width,
    h: canvas.height,
    x: 0,
    y: 0,

    ready: false
};
bg.img = new Image();
bg.img.onload = function() {
    bg.ready = true;
}
bg.img.src = "img/bgInitial.png";

var ducky = {
    w: canvas.width * 0.08,
    h: canvas.width * 0.08,
    x: canvas.width * 0.05,
    y: canvas.height * 0.6,
    ready: false
};
ducky.img = new Image();
ducky.img.onload = function() {
    ducky.ready = true;
};
ducky.img.src = "img/ducky.png";

if(level <= 10) {
        var monitor = {
                w: canvas.width * 0.434,
                h: (canvas.width * 0.434) * 0.634,
                x: canvas.width * 0.17,
                y: canvas.height * 0.25,
                ready: false
        };
}
else {
        var monitor = {
                w: canvas.width * 0.295,
                h: (canvas.width * 0.295) * 0.907,
                x: canvas.width * 0.17,
                y: canvas.height * 0.25,
                ready: false
        };
}
monitor.img = new Image();
monitor.img.onload = function() {
    monitor.ready = true;
};
	
if(level <= 10)
    if(borked)
        monitor.img.src = "img/monitorInitialFail.png";
    else
       monitor.img.src = "img/monitorInitial.png";
else
    if(borked)
        monitor.img.src = "img/monitorAncientFail.png";
    else
        monitor.img.src = "img/monitorAncient.png";
	
var tower = {
    w: canvas.width * 0.356,
    h: (canvas.width * 0.356) * 0.954,
    x: canvas.width * 0.62,
    y: canvas.height * 0.3,
    ready: false
};
tower.img = new Image();
tower.img.onload = function() {
    tower.ready = true;
};
if(level <= 12)
    tower.img.src = "img/towerInitial.png";
else
    tower.img.src = "img/towerAncient.png";

var keyboard = {
    w: canvas.width * 0.32,
    h: (canvas.width * 0.32) * 0.318,
    x: canvas.width * 0.17,
    y: canvas.height * 0.65,
    ready: false
};
keyboard.img = new Image();
keyboard.img.onload = function() {
    keyboard.ready = true;
};
if(level <= 4)
    keyboard.img.src = "img/keyboardInitial.png";
else
    keyboard.img.src = "img/keyboardAncient.png";

var mobo = {
    w: canvas.width * 0.195,
    h: (canvas.width * 0.195) * 1.385,
    x: canvas.width * 0.635,
    y: canvas.height * 0.335,
    ready: false
};
mobo.img = new Image();
mobo.img.onload = function() {
    mobo.ready = true;
};
if(level <= 8)
    mobo.img.src = "img/moboInitial.png";
else
    mobo.img.src = "img/moboAncient.png";

var mouse = {
    w: canvas.width * 0.0475,
    h: (canvas.width * 0.0475) * 1.632,
    x: canvas.width * 0.53,
    y: canvas.height * 0.67,
    ready: false
};
mouse.img = new Image();
mouse.img.onload = function() {
    mouse.ready = true;
};
if(level <= 6)
    mouse.img.src = "img/mouseInitial.png";
else
    mouse.img.src = "img/mouseAncient.png";

/* useful functions */
var pointOver = function(p, a) {
    return (p.x >= a.x && p.x <= (a.x + a.w) && p.y >= a.y && p.y <= (a.y + a.h));
};

/* game events */
var message = function(id) {
    switch(id) {
        case 0:
            bootbox.alert("Your name is Ångström (known to the internet as 'Angst-ROM'). In recent years, mega-corporations like Macrosoft, Erple, Intool and certain government surveillance agencies have been trying to outlaw *hacker operating systems* by making spying non-optional and free drivers scarce. To mitigate this issue, you've decided to install a new operating system on your computer to rid yourself of their prying eyes. Your goal is to successfully install Gelato, an operating system so ancient that it's rumored to be impossible to run on any hardware after the turn of the millenium... Luckily, as everyone knows, to build a computer you simply have to perform drawing puzzles.", function() {
                message(1);
            });
            break;
        case 1:
            bootbox.alert("In 'Ångström's RAM-Page', you will complete simple drawing puzzles in the hopes of installing your new system - to better yourself, protect your freedoms, and save the world... or that's how you think of it anyway.", function() {
                message(2);
            });
            break;
        case 2:
            bootbox.alert("To complete a puzzle you must make one continuous line throughout the entire design.  You cannot pass through any line twice, but you have to use every single line once.  Here's an example puzzle.", function() {
                window.location.href="puzzle.html";
            });
            break;
        case 3:
            bootbox.alert("Now here's a slightly more difficult puzzle.", function() {
                window.location.href="puzzle.html";
            });
            break;
        case 4:
            bootbox.alert("Green lines will ignore any nodes between the line end-points.", function() {
                window.location.href="puzzle.html";
            });
            break;
        case 5:
            bootbox.alert("You have now completed the tutorial and begin your adventure. Remember, Gelato: freedom over functionality");
            break;
        case 6:
            bootbox.alert("Uh oh! It appears you can't even use the arrow keys to select the install button on the main menu of the Gelato installer.  Your nice sleek black USB keyboard isn't going to work. Gelato only works with PS/2, AT, or serial peripherals. Click on your keyboard to 'upgrade' it. Since a keyboard replacement is easy, so is this first puzzle.");
            break;
        case 7:
            bootbox.alert("You managed to find a creaking old Pathway2000 keyboard with an AT connector, and plug it in. You're slightly repulsed by the slightly beefy smell emanating from your new peripheral, but continue on... You have a job to do.");
            break;
        case 8:
            bootbox.alert("The Gelato installer says it can't find a compatible pointing device. Of course, now you need to find an old trackball mouse. This wouldn't be any harder than the keyboard install, but you cut yourself on the back of the case. Life's not fair.");
            break;
        case 9:
            bootbox.alert("Go go gadget Pathway2000. You found a beige old mouse, and patched your leak of bodily fluids to install it.");
            break;
        case 10:
            bootbox.alert("'The Gelato System only supports Intool x76 processors prior to the Quintilium series.' You can already hear that catchy tune from their commercials, before they ruined it...");
            break;
        case 11:
            bootbox.alert("You sniped a vintage motherboard with an Intool 476 RX3 processor off ePay. You can already feel the scorching performance of that 33Mhz chip. You also don't need the interface adapters for the keyboard and mouse anymore!");
            break;
        case 12:
            bootbox.alert("'Non-VGA display detected, cannot continue.' Well, isn't the installer feeling picky today. There goes your shiny 1440p LED screen...");
            break;
        case 13:
            bootbox.alert("Pathway2000 has continued to be your pathway to Gelato goodness. You've hauled a particularly heavy CRT of theirs onto your desk and plugged it in.");
            break;
        case 14:
            bootbox.alert("'Improper enclosure of system. Install cannot continue until this is resolved.' HOW DOES THAT EVEN MATTER!?!...  Whatever, back to ePay!");
            break;
        case 15:
            bootbox.alert("You have completed your time travel back into the 1990s. Your system could not possibly be any more beige. You're expecting a flannel shirt and N64 to appear out of the void. Maybe now Gelato will be happy...");
            break;
        case 16:
            bootbox.alert("'The Gelato System has been installed on your hardware, please remove the floppy from its drive and reboot.'", function() {
                docCookies.setItem("win", "yes");
                window.location.href="index.html";
            });
            break;
        case 17:
            bootbox.alert("Yo, the NSA's spying on you. I know that isn't really anything significant because they spy on literally everyone, but I figured I should tell you.");
            docCookies.removeItem("newstrike");
            break;
        case 18:
            bootbox.alert("Hey... I'm so alone ;_;");
            docCookies.removeItem("newstrike");
            break;
        case 19:
            bootbox.alert("Strike #3, You're... not out because this isn't baseball.");
            docCookies.removeItem("newstrike");
            break;
        case 20:
            bootbox.alert("Hey, so the NSA found out about you scouting for old hardware. They don't like it.");
            docCookies.removeItem("newstrike");
            break;
        case 21:
            docCookies.removeItem("newstrike");
            bootbox.alert("Yeah... you're gonna get arrested in like 5 seconds. The NSA's branded you a cyber terrorist for treason against the US government.", function() {
                message(22);
            });
            break;
        case 22:
            bootbox.alert("You've been apprehended by a SWAT team, tried in court, and given the 'lesser' maximum sentence of five years in federal prison. Apparently someone on the inside took pity on you, and saved you from death row... THE END?", function() {
                docCookies.removeItem("level");
                docCookies.removeItem("strike");
                window.location.href="index.html";
            });
            break;
        case Infinity:
            bootbox.alert("What are you going to do, chew on it?");
            break;
    }
}

/* real events */
canvas.addEventListener('mouseup', function(evt) {
    var m = {
        x: evt.pageX - canvas.offsetLeft,
        y: evt.pageY - canvas.offsetTop
    };

    if(pointOver(m, monitor)) {
        if(level == 0)
            message(0);
        else if(level >= 3 && !borked || borked == "monitor")
            window.location.href="puzzle.html";
    }
    else if(pointOver(m, keyboard) && borked == "keyboard" ||
            pointOver(m, mouse) && borked == "mouse" ||
            pointOver(m, mobo) && borked == "mobo" ||
            pointOver(m, monitor) && borked == "monitor" ||
            pointOver(m, tower) && borked == "tower")
        window.location.href="puzzle.html";
    else if(pointOver(m, ducky))
        message(Infinity);
});

var render = function() {
    if (bg.ready)
        ctx.drawImage(bg.img, bg.x, bg.y, bg.w, bg.h);
    if (monitor.ready)
        ctx.drawImage(monitor.img, monitor.x, monitor.y, monitor.w, monitor.h);
    if (keyboard.ready)
        ctx.drawImage(keyboard.img, keyboard.x, keyboard.y, keyboard.w, keyboard.h);
    if (mouse.ready)
        ctx.drawImage(mouse.img, mouse.x, mouse.y, mouse.w, mouse.h);
    if (tower.ready)
        ctx.drawImage(tower.img, tower.x, tower.y, tower.w, tower.h);
    if (mobo.ready)
        ctx.drawImage(mobo.img, mobo.x, mobo.y, mobo.w, mobo.h);	
    if (ducky.ready)
        ctx.drawImage(ducky.img, ducky.x, ducky.y, ducky.w, ducky.h);	
};

/* main game loop */
var main = function() {
    render();
    requestAnimationFrame(main);
};

/* make requestAnimationFrame work in stupid browsers (all of them) */
var w = window;
requestAnimationFrame =
        w.requestAnimationFrame
        || w.webkitRequestAnimationFrame
        || w.msRequestAnimationFrame
        || w.mozRequestAnimationFrame;

/* start game */
render();
requestAnimationFrame(main);

if(docCookies.hasItem("newstrike"))
    message(parseInt(docCookies.getItem("strikes")) + 16);

if(level >= 1)
    message(level + 2);

main();
