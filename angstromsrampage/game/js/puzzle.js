/*
 *
 * @licstart  The following is the entire license notice for the
 *	JavaScript code in this page.
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
 * @licend	The above is the entire license notice
 * for the JavaScript code in this page.
 *
 */

/* fit canvas to window */
var sizeCanvas = function() {
    if(window.innerWidth / 1.33 <= window.innerHeight) {
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
ctx.imageSmoothingEnabled = false;
ctx.mozImageSmoothingEnabled = false;
document.body.appendChild(canvas);

/* audio */
var music = new Audio("snd/blackhat.ogg");
music.loop = true;
music.play();

var connect = new Audio("snd/connect.ogg");

var mouseOver = function(m, p) {
    return(m[0] > (p[0] - 16) / 800 * canvas.width &&
           m[0] < (p[0] + 16) / 800 * canvas.width &&
           m[1] > (p[1] - 16) / 600 * canvas.height &&
           m[1] < (p[1] + 16) / 600 * canvas.height);
};

var render = function() {
    /* base puzzle */
    ctx.lineWidth = Math.ceil(3 / 800 * canvas.width);
    for(var line = 1; line < puzzles[level].length; line++) {
        if(puzzles[level][line][2] === true)
            ctx.strokeStyle = "#0e6391";
        else if(typeof puzzles[level][line][2] !== "undefined")
            ctx.strokeStyle = puzzles[level][line][2];
        else
            ctx.strokeStyle = "#828282";
        ctx.beginPath();
        ctx.moveTo(puzzles[level][line][0][0] / 800 * canvas.width,
                   puzzles[level][line][0][1] / 600 * canvas.height);
        ctx.lineTo(puzzles[level][line][1][0] / 800 * canvas.width,
                   puzzles[level][line][1][1] / 600 * canvas.height);
        ctx.stroke();
    }

    /* normal points */
    var pointImg = new Image();
    pointImg.onload = function() {
        for(var point = 0; point < puzzles[level][0].length; point++)
            if(point !== activePoint)
                ctx.drawImage(pointImg, (puzzles[level][0][point][0] - 16) / 800 * canvas.width,
                                        (puzzles[level][0][point][1] - 16) / 600 * canvas.height);
    }
    pointImg.src = "img/point.png";

    /* active (last-clicked) point */
    if(typeof activePoint !== "undefined") {
        var activePointImg = new Image();
        activePointImg.onload = function() {
            ctx.drawImage(activePointImg, (puzzles[level][0][activePoint][0] - 16) / 800 * canvas.width,
                                          (puzzles[level][0][activePoint][1] - 16) / 600 * canvas.height);
        }
        activePointImg.src = "img/activePoint.png";
    }
};

canvas.addEventListener("mouseup", function(evt) {
    var mouse = [evt.pageX - canvas.offsetLeft,
                 evt.pageY - canvas.offsetTop];

    if(mouse[0] > canvas.width - 154 && mouse[0] < canvas.width - 4 &&
       mouse[1] > 4 && mouse[1] < 54)
        window.location.reload();


    /* check for legal moves */
    for(var newPoint = 0; newPoint < puzzles[level][0].length; newPoint++) {
        if(mouseOver(mouse, puzzles[level][0][newPoint])) {
            if(typeof activePoint === "undefined")
                activePoint = newPoint;
            else
                for(var line = 1; line < puzzles[level].length; line++) {
                    if(((puzzles[level][line][0][0] === puzzles[level][0][newPoint][0] &&
                         puzzles[level][line][0][1] === puzzles[level][0][newPoint][1] &&
                         puzzles[level][line][1][0] === puzzles[level][0][activePoint][0] &&
                         puzzles[level][line][1][1] === puzzles[level][0][activePoint][1]) ||
                        (puzzles[level][line][0][0] === puzzles[level][0][activePoint][0] &&
                         puzzles[level][line][0][1] === puzzles[level][0][activePoint][1] &&
                         puzzles[level][line][1][0] === puzzles[level][0][newPoint][0] &&
                         puzzles[level][line][1][1] === puzzles[level][0][newPoint][1])) &&
                       puzzles[level][line][2] !== true) {
                        connect.play();
                        puzzles[level][line][2] = true;
                        activePoint = newPoint;
                        doneLines++;
                        if(doneLines === puzzles[level].length - 1) {
                            docCookies.setItem("level", parseInt(docCookies.getItem("level")) + 1);
                            window.location.href="game.html";
                        }
                        else
                            break
                    }
                }
            break;
        }
    }
});

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
var level = docCookies.getItem("level");
var activePoint;
var doneLines = 0;
if(!docCookies.hasItem("timer"))
    docCookies.setItem("timer", 150000);
var timer = docCookies.getItem("timer");

var textImg = new Image();
textImg.onload = function() {
    ctx.drawImage(textImg, 4, 4);
}
textImg.src = "img/puzzleText.png";

var resetImg = new Image();
resetImg.onload = function() {
    ctx.drawImage(resetImg, canvas.width - 154, 4);
}
resetImg.src = "img/reset.png";

main();

/* timer */
setInterval(function() {
    if(!docCookies.hasItem("newstrike")) {
        timer -= 1000;
        docCookies.setItem("timer", timer);
        if(timer <= 0) {
            docCookies.setItem("timer", 150000);
            docCookies.setItem("strikes", parseInt(docCookies.getItem("strikes")) + 1);
            docCookies.setItem("newstrike", "yes");
        }
    }
}, 1000 );
