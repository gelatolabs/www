/*
 *
 * @licstart  The following is the entire license notice for the
 *  JavaScript code in this page.
 *
 * Copyright (c) 2015 Kyle Farwell <m@kfarwell.org>
 * Copyright (c) 2015 Keefer Rourke <keefer.rourke@gmail.com>
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
bg.img.src = "img/bg.png";

var p0 = {
    w: canvas.width * 0.11,
    h: (canvas.width * 0.11) * 4.938,
    x: canvas.width * 0.15,
    y: canvas.height * 0.26,
    d: "right",
    kicking: false,
    ready: false
};
p0.img = new Image();
p0.img.onload = function() {
    p0.ready = true;
};
p0.img.src = "img/p0-base.png";

var p1 = {
    w: canvas.width * 0.1,
    h: (canvas.width * 0.1) * 4.867,
    x: canvas.width * 0.8,
    y: canvas.height * 0.335,
    d: "left",
    kicking: false,
    ready: false
};
p1.img = new Image();
p1.img.onload = function() {
    p1.ready = true;
};
p1.img.src = "img/p1-base.png";

var bullet0 = {
    w: canvas.width * 0.05,
    h: canvas.width * 0.05,
    x: -Infinity,
    y: -Infinity,
    d: "right",
    ready: false
};
bullet0.img = new Image();
bullet0.img.onload = function() {
    bullet0.ready = true;
};
bullet0.img.src = "img/p0-bullet.png";

var bullet1 = {
    w: canvas.width * 0.05,
    h: canvas.width * 0.05,
    x: -Infinity,
    y: -Infinity,
    d: "left",
    ready: false
};
bullet1.img = new Image();
bullet1.img.onload = function() {
    bullet1.ready = true;
};
bullet1.img.src = "img/p1-bullet.png";

/* bullet death will alert() several times before reload()ing without
   gameOver */
var gameOver = false;

/* audio */
var music = new Audio("snd/music.ogg");
music.loop = true;

var win0 = new Audio("snd/p0-win.ogg");
var win1 = new Audio("snd/p1-win.ogg");

/* check if point is over area */
var pointOver = function(p, a) {
    return (p.x >= a.x && p.x <= (a.x + a.w) && p.y >= a.y && p.y <= (a.y + a.h));
};

/* move player amount in direction */
var move = function(player, dir, amt) {
    switch(dir) {
        case "up":
            if(player == 0)
                p0.y -= amt;
            else
                p1.y -= amt;
            break;
        case "down":
            if(player == 0)
                p0.y += amt;
            else
                p1.y += amt;
            break;
        case "forward":
            if(player == 0) {
                if(p0.d == "right")
                    p0.x += amt;
                else
                    p0.x -= amt;
            } else {
                if(p1.d == "right")
                    p1.x += amt;
                else
                    p1.x -= amt;
            }
            break;
    }
    checkHit();
}

/* make sure players are facing each other after they move */
var faceEachOther = function() {
    if(p0.x + p0.w / 2 > p1.x + p0.w / 2) {
        p0.d = "left";
        p1.d = "right";

        p0.img = new Image();
        p0.img.onload = function() {
            p0.ready = true;
        };
        p0.img.src = "img/Rp0-base.png";

        p1.img = new Image();
        p1.img.onload = function() {
            p1.ready = true;
        };
        p1.img.src = "img/Rp1-base.png";
    } else {
        p0.d = "right";
        p1.d = "left";

        p0.img = new Image();
        p0.img.onload = function() {
            p0.ready = true;
        };
        p0.img.src = "img/p0-base.png";

        p1.img = new Image();
        p1.img.onload = function() {
            p1.ready = true;
        };
        p1.img.src = "img/p1-base.png";
    }
}

var win = function(player) {
    gameOver = true;
    if(player == 0) {
        win0.play();
        alert("CAN'T JUMP THE TRUMP");
    } else {
        win1.play();
        alert("YOU'VE JUMPED THE TRUMP");
    }
    location.reload();
}

/* win condition: bullet hit or
   landed kick while higher than opponent */
var checkHit = function() {
    if(p0.x < p1.x + p1.w &&
       p0.x + p0.w > p1.x &&
       p0.y < p1.y + p1.h &&
       p0.h + p0.y > p1.y) {
        if(p0.kicking && p0.y + p0.h / 2 < p1.y + p1.h / 2) {
            win(0);
        } else if(p1.kicking) {
            win(1);
        }
    } else if(bullet0.x < p1.x + p1.w &&
              bullet0.x + bullet0.w > p1.x &&
              bullet0.y < p1.y + p1.h &&
              bullet0.h + bullet0.y > p1.y) {
        win(0);
    } else if(bullet1.x < p0.x + p0.w &&
              bullet1.x + bullet1.w > p0.x &&
              bullet1.y < p0.y + p0.h &&
              bullet1.h + bullet1.y > p0.y) {
        win(1);
    }
}

var kick = function(player) {
    if(player == 0) {
        setTimeout(function() {
            setTimeout(function() {
                setTimeout(function() {
                    p0.kicking = false;
                    p0.w = canvas.width * 0.11;
                    if(p0.d == "right") {
                        p0.img.src = "img/p0-base.png";
                    } else {
                        p0.x += canvas.width * 0.15;
                        p0.img.src = "img/Rp0-base.png";
                    }
                }, 100);
                p0.w = canvas.width * 0.11 * 2.375;
                if(p0.d == "right") {
                    p0.img.src = "img/p0-kick1.png";
                } else {
                    p0.x -= p0.w - canvas.width * 0.11;
                    p0.img.src = "img/Rp0-kick1.png";
                }
            }, 100);
            p0.kicking = true;
            p0.w = canvas.width * 0.11 * 1.563;
            if(p0.d == "right") {
                p0.img.src = "img/p0-kick0.png";
            } else {
                p0.x -= p0.w - canvas.width * 0.11;
                p0.img.src = "img/Rp0-kick0.png";
            }
        }, 0); // for some reason one image is skipped without this 0ms setTimeout
    } else {
        setTimeout(function() {
            setTimeout(function() {
                setTimeout(function() {
                    p1.kicking = false;
                    p1.w = canvas.width * 0.1;
                    if(p1.d == "left") {
                        p1.x += canvas.width * 0.16;
                        p1.img.src = "img/p1-base.png";
                    } else {
                        p1.img.src = "img/Rp1-base.png";
                    }
                }, 100);
                p1.w = canvas.width * 0.1 * 2.6;
                if(p1.d == "left") {
                    p1.x -= p1.w - canvas.width * 0.1;
                    p1.img.src = "img/p1-kick1.png";
                } else {
                    p1.img.src = "img/Rp1-kick1.png";
                }
            }, 100);
            p1.kicking = true;
            p1.w = canvas.width * 0.1 * 2.067;
            if(p1.d == "left") {
                p1.x -= p1.w - canvas.width * 0.1;
                p1.img.src = "img/p1-kick0.png";
            } else {
                p1.img.src = "img/Rp1-kick0.png";
            }
        }, 0); // for some reason one image is skipped without this 0ms setTimeout
    }
    faceEachOther();
};

var shoot = function(player) {
    if(player == 0 && (bullet0.x < 0 || bullet0.x > canvas.width)) {
        bullet0.x = p0.x + p0.w / 2;
        bullet0.y = p0.y + p0.h / 5 * 3;
        bullet0.d = p0.d;
    } else if(player == 1 && (bullet1.x < 0 || bullet1.x > canvas.width)) {
        bullet1.x = p1.x + p1.w / 2;
        bullet1.y = p1.y + p1.h / 2;
        bullet1.d = p1.d;
    }
}

var jump = function(player) {
    if(player == 0) {
        move(0, "up", canvas.width * 0.078);
        move(0, "forward", canvas.width * 0.039);
        setTimeout(function() {
            move(0, "down", canvas.width * 0.078);
            move(0, "forward", canvas.width * 0.039);
        }, 1000);
    } else {
        move(1, "up", canvas.width * 0.094);
        move(1, "forward", canvas.width * 0.047);
        setTimeout(function() {
            move(1, "down", canvas.width * 0.094);
            move(1, "forward", canvas.width * 0.047);
        }, 1000);
    }   
    faceEachOther();
}

/* handle keyboard input */
window.addEventListener("keydown", function(e) {
    switch(e.keyCode) {
        case 90: jump(0); break; // z
        case 88: // x
            if(p0.y < canvas.height * 0.26) // above ground
                kick(0);
            else
                shoot(0);
            break;
        case 79: jump(1); break; // o
        case 80: // p
            if(p1.y < canvas.height * 0.335) // above ground
                kick(1);
            else
                shoot(1);
            break;
    }
}, false);

/* draw everything */
var render = function() {
    if(bg.ready) {
        ctx.drawImage(bg.img, bg.x, bg.y, bg.w, bg.h);
    }
    if(p0.ready) {
        ctx.drawImage(p0.img, p0.x, p0.y, p0.w, p0.h)
    }
    if(p1.ready) {
        ctx.drawImage(p1.img, p1.x, p1.y, p1.w, p1.h)
    }
    if(bullet0.ready) {
        ctx.drawImage(bullet0.img, bullet0.x, bullet0.y, bullet0.w, bullet0.h)
    }
    if(bullet1.ready) {
        ctx.drawImage(bullet1.img, bullet1.x, bullet1.y, bullet1.w, bullet1.h)
    }
};

/* main game loop */
var main = function() {
    if(bullet0.d == "right")
        bullet0.x += 15;
    else
        bullet0.x -= 15;

    if(bullet1.d == "right")
        bullet1.x += 15;
    else
        bullet1.x -= 15;
    if(!gameOver)
        checkHit();

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
music.play();
main();
