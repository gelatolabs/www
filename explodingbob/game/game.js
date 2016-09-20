/*
 * 
 * @licstart  The following is the entire license notice for the 
 *  JavaScript code in this page.
 * 
 * Copyright (c) 2015 Kyle Farwell <kfarwell@member.fsf.org>, Matthew
 * Rose <roosterscout@gmail.com>
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
	if (window.innerWidth / 0.75 <= window.innerHeight) { // fit width if the whole 0.75:1 (3:4) canvas will fit
		canvas.width = window.innerWidth;
		canvas.height = window.innerWidth / 0.75;
		canvas.style.boxShadow = "0 0 " + (window.innerHeight - canvas.height) / 2 + "px";
	} else { // else fit height
		canvas.width = window.innerHeight * 0.75;
		canvas.height = window.innerHeight;
		canvas.style.boxShadow = "0 0 " + (window.innerWidth - canvas.width) / 2 + "px";
	}
	canvas.style.top = (window.innerHeight - canvas.height) / 2 + "px";
	canvas.style.left = (window.innerWidth - canvas.width) / 2 + "px";
}

/* place html elements */
var arrangeUI = function() {
	// ok button
	document.getElementById('ok').style.top = ((window.innerHeight - canvas.height) / 2) + (canvas.height / 250) + "px"; // canvas.top + margin
	document.getElementById('ok').style.left = ((window.innerWidth - canvas.width) / 2) + (canvas.height / 250) + "px"; // canvas.left + margin
	document.getElementById('ok').style.fontSize = canvas.height / 30 + "pt";

	// pause button
	document.getElementById('pause').style.top = ((window.innerHeight - canvas.height) / 2) + (canvas.height / 250) + "px";
	document.getElementById('pause').style.right = ((window.innerWidth - canvas.width) / 2) + (canvas.height / 250) + "px";
	document.getElementById('pause').style.fontSize = canvas.height / 30 + "pt";

	// undo button
	document.getElementById('undo').style.top = ((window.innerHeight - canvas.height) / 2) + (canvas.height / 7) + "px";
	document.getElementById('undo').style.right = ((window.innerWidth - canvas.width) / 2) + (canvas.height / 250) + "px";
	document.getElementById('undo').style.fontSize = canvas.height / 30 + "pt";

	// question text
	document.getElementById('question').style.top = ((window.innerHeight - canvas.height) / 2) + (canvas.height / 250) + "px";
	document.getElementById('question').style.fontSize = canvas.height / 16 + "pt";

	// timer text
	document.getElementById('timer').style.top = ((window.innerHeight - canvas.height) / 2) + (canvas.height / 8) + "px";
	document.getElementById('timer').style.left = ((window.innerWidth - canvas.width) / 2) + (canvas.height / 250) + "px";
	document.getElementById('timer').style.fontSize = canvas.height / 22 + "pt";

	// pause text
	document.getElementById('paused').style.top = canvas.height / 5 + "px";
	document.getElementById('paused').style.fontSize = canvas.height / 16 + "pt";

	// resume button
	document.getElementById('resume').style.top = canvas.height / 8 * 3 + "px";
	document.getElementById('resume').style.left = canvas.height / 30 * 5 + "px";
	document.getElementById('resume').style.fontSize = canvas.height / 30 + "pt";

	// restart button
	document.getElementById('restart').style.top = canvas.height / 8 * 4 + "px";
	document.getElementById('restart').style.left = canvas.height / 30 * 5 + "px";
	document.getElementById('restart').style.fontSize = canvas.height / 30 + "pt";

	// menu button
	document.getElementById('menu').style.top = canvas.height / 8 * 5 + "px";
	document.getElementById('menu').style.left = canvas.height / 30 * 5 + "px";
	document.getElementById('menu').style.fontSize = canvas.height / 30 + "pt";

	// game over text
	document.getElementById('gameover').style.top = canvas.height / 5 + "px";
	document.getElementById('gameover').style.fontSize = canvas.height / 16 + "pt";

	// retry button
	document.getElementById('retry').style.top = canvas.height / 8 * 3 + "px";
	document.getElementById('retry').style.left = canvas.height / 30 * 5 + "px";
	document.getElementById('retry').style.fontSize = canvas.height / 30 + "pt";

	// levels button
	document.getElementById('levels').style.top = canvas.height / 8 * 4 + "px";
	document.getElementById('levels').style.left = canvas.height / 30 * 5 + "px";
	document.getElementById('levels').style.fontSize = canvas.height / 30 + "pt";

	// menu button 2
	document.getElementById('menu2').style.top = canvas.height / 8 * 5 + "px";
	document.getElementById('menu2').style.left = canvas.height / 30 * 5 + "px";
	document.getElementById('menu2').style.fontSize = canvas.height / 30 + "pt";

	// return button
	document.getElementById('return').style.top = canvas.height / 8 * 5 + "px";
	document.getElementById('return').style.left = canvas.height / 30 * 5 + "px";
	document.getElementById('return').style.fontSize = canvas.height / 30 + "pt";

	// congratulations text
	document.getElementById('congratulations').style.top = canvas.height / 5 + "px";
	document.getElementById('congratulations').style.fontSize = canvas.height / 16 + "pt";

	// pause menu overlay
	document.getElementById('pauseMenu').style.marginLeft = ((window.innerWidth - canvas.width) / 2) + "px";
	document.getElementById('pauseMenu').style.marginRight = ((window.innerWidth - canvas.width) / 2) + "px";
	document.getElementById('pauseMenu').style.marginTop = ((window.innerHeight - canvas.height) / 2) + "px";
	document.getElementById('pauseMenu').style.marginBottom = ((window.innerHeight - canvas.height) / 2) + "px";

	// game over menu overlay
	document.getElementById('failMenu').style.marginLeft = ((window.innerWidth - canvas.width) / 2) + "px";
	document.getElementById('failMenu').style.marginRight = ((window.innerWidth - canvas.width) / 2) + "px";
	document.getElementById('failMenu').style.marginTop = ((window.innerHeight - canvas.height) / 2) + "px";
	document.getElementById('failMenu').style.marginBottom = ((window.innerHeight - canvas.height) / 2) + "px";

	// win menu overlay
	document.getElementById('winMenu').style.marginLeft = ((window.innerWidth - canvas.width) / 2) + "px";
	document.getElementById('winMenu').style.marginRight = ((window.innerWidth - canvas.width) / 2) + "px";
	document.getElementById('winMenu').style.marginTop = ((window.innerHeight - canvas.height) / 2) + "px";
	document.getElementById('winMenu').style.marginBottom = ((window.innerHeight - canvas.height) / 2) + "px";

	// fullness bar
	document.getElementById('bar').style.top = ((window.innerHeight - canvas.height) / 2) + (canvas.height / 250 * 71) + "px";
	document.getElementById('bar').style.right = ((window.innerWidth - canvas.width) / 2) + (canvas.height / 250) + "px";
	document.getElementById('bar').style.fontSize = canvas.height / 30 + "pt";
}

/* create canvas */
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.style.position = "absolute";
sizeCanvas();
document.body.appendChild(canvas);
arrangeUI();

/* img defs */
// bg
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function() { // don't draw until img is loaded
	bgReady = true;
};
bgImage.src = "img/background.svg";

// single burger
var burgerReady = false;
var burgerImage = new Image();
burgerImage.onload = function() {
	burgerReady = true;
};
burgerImage.src = "img/" + docCookies.getItem('burger') + ".svg";

// 5 burger stack
var burger5Ready = false;
var burger5Image = new Image();
burger5Image.onload = function() {
	burger5Ready = true;
};
burger5Image.src = "img/5" + docCookies.getItem('burger') + ".svg";

// 10 burger stack
var burger10Ready = false;
var burger10Image = new Image();
burger10Image.onload = function() {
	burger10Ready = true;
};
burger10Image.src = "img/10" + docCookies.getItem('burger') + ".svg";

// bob
var bobReady = false;
var bobImage = new Image();
bobImage.onload = function() {
	bobReady = true;
};
bobImage.src = "img/" + docCookies.getItem('bob') + ".svg";

/* game objects */
// to preserve an image's aspect ratio (a), apply a = w / h
// calculate a using the image dimensions (some file managers, GIMP, and
// Inkscape show dimensions somewhere, might be easier to find for the PNG
// version)
// choose a w (relative to canvas.width)
// set h to scale without stretching using the same formula (h = w / a 
// simplified)
var burger = {
	// image
	speed: 512, // for keyboard movement, pixels per second
	w: canvas.width / 7,
	h: (canvas.width / 7) / 1.41,
	x: 0,
	y: 0,

	// hitbox
	hbw: canvas.width / 7,
	hbh: (canvas.width / 7) / 1.41,
	hbx: 0,
	hby: 0
};
var burger5 = {
	// image
	speed: 512, // for keyboard movement, pixels per second
	w: canvas.width / 7,
	h: (canvas.width / 7) / 1.41,
	x: 0,
	y: 0,

	// hitbox
	hbw: canvas.width / 7,
	hbh: (canvas.width / 7) / 1.41,
	hbx: 0,
	hby: 0
};
var burger10 = {
	// image
	speed: 512, // for keyboard movement, pixels per second
	w: canvas.width / 7,
	h: (canvas.width / 7) / 1.41,
	x: 0,
	y: 0,

	// hitbox
	hbw: canvas.width / 7,
	hbh: (canvas.width / 7) / 1.41,
	hbx: 0,
	hby: 0
};
var bob = {
	w: canvas.width / 8 * 13,
	h: (canvas.width / 8 * 13) / 1.61,
	x: canvas.width / 2 - (canvas.width / 8 * 13) / 2, // center, - w / 2 to compensate for top-left anchor
	y: canvas.height - ((canvas.width / 8 * 13) / 1.61),

	hbw: canvas.width / 20 * 3,
	hbh: canvas.width / 10 * 1,
	hbx: canvas.width / 2 - (canvas.width / 20 * 3) / 2,
	hby: canvas.height / 20 * 9
};

/* audio */
var bgMusic = new Audio('snd/game.ogg');
bgMusic.loop = true;
bgMusic.volume = docCookies.getItem('music');

var eatingSnd = new Audio('snd/eating.ogg');
eatingSnd.volume = docCookies.getItem('sfx');

var cryingSnd = new Audio('snd/crying.ogg');
cryingSnd.volume = docCookies.getItem('sfx');

var applauseSnd = new Audio('snd/applause.ogg');
applauseSnd.volume = docCookies.getItem('sfx');

var explosionSnd = new Audio('snd/explosion.ogg');
explosionSnd.volume = docCookies.getItem('sfx');


/* misc var declarations */
var question = "";
var answer = 0;
var correct = "";
var burgerHeld = false;
var burgerOffsetX = 0;
var burgerOffsetX = 0;
var pause = false;
var level = Number(docCookies.getItem('level'));

/* define levels/questions */
switch(level) {
	case 1:
		var questions = new Array(
			'1+1',
			'2+1',
			'3+1',
			'4+1',
			'5+1',
			'6+1',
			'7+1',
			'8+1',
			'9+1'
		);
		break;
	case 2:
		var questions = new Array(
			'2+1',
			'3+1',
			'4+2',
			'5+2',
			'6+2',
			'7+2',
			'8+2',
			'9+2'
		);
		break;
	case 3:
		var questions = new Array(
			'1+3',
			'2+3',
			'4+3',
			'5+3',
			'6+3',
			'7+3',
			'8+3',
			'9+3'
		);
		break;
	case 4:
		var questions = new Array(
			'1+4',
			'2+4',
			'3+4',
			'5+4',
			'6+4',
			'7+4',
			'8+4',
			'9+4'
		);
		break;
	case 5:
		var questions = new Array(
			'1+5',
			'2+5',
			'3+5',
			'4+5',
			'5+5',
			'6+5',
			'7+5',
			'8+5',
			'9+5'
		);
		break;
	case 6:
		var questions = new Array(
			'1+6',
			'2+6',
			'3+6',
			'4+6',
			'5+6',
			'7+6',
			'8+6',
			'9+6'
		);
		break;
	case 7:
		var questions = new Array(
			'1+7',
			'2+7',
			'3+7',
			'4+7',
			'5+7',
			'6+7',
			'7+7',
			'8+7',
			'9+7'
		);
		break;
	case 8:
		var questions = new Array(
			'1+8',
			'2+8',
			'3+8',
			'4+8',
			'5+8',
			'6+8',
			'7+8',
			'8+8',
			'9+8'
		);
		break;
	case 9:
		var questions = new Array(
			'1+9',
			'2+9',
			'3+9',
			'4+9',
			'5+9',
			'6+9',
			'7+9',
			'8+9',
			'9+9'
		);
		break;
}

/* check if first and second objects are touching */
var touching = function(first,second) {
	return (
		first.hbx <= (second.hbx + second.hbw)
		&& second.hbx <= (first.hbx + first.hbw)
		&& first.hby <= (second.hby + second.hbh)
		&& second.hby <= (first.hby + first.hbh)
	);
};

/* mouse dragging */
var getMousePos = function(canvas, evt) {
	var rect = canvas.getBoundingClientRect();
	return {
		x: evt.clientX - rect.left,
		y: evt.clientY - rect.top,
		w: 0,
		h: 0,

		hbx: evt.clientX - rect.left,
		hby: evt.clientY - rect.top,
		hbw: 0,
		hbh: 0
	};
};
canvas.addEventListener('mousemove', function(evt) {
	var mousePos = getMousePos(canvas, evt);
	if (!pause) { // don't drag while paused
		if (burgerHeld == 'burger') {
			burger.x = mousePos.x - burgerOffsetX;
			burger.y = mousePos.y - burgerOffsetY;

			burger.hbx = mousePos.x - burgerOffsetX;
			burger.hby = mousePos.y - burgerOffsetY;
		} else if (burgerHeld == 'burger5') {
			burger5.x = mousePos.x - burgerOffsetX;
			burger5.y = mousePos.y - burgerOffsetY;

			burger5.hbx = mousePos.x - burgerOffsetX;
			burger5.hby = mousePos.y - burgerOffsetY;
		} else if (burgerHeld == 'burger10') {
			burger10.x = mousePos.x - burgerOffsetX;
			burger10.y = mousePos.y - burgerOffsetY;

			burger10.hbx = mousePos.x - burgerOffsetX;
			burger10.hby = mousePos.y - burgerOffsetY;
		}
	}
}, false);
// pick up burger
canvas.addEventListener('mousedown', function(evt) {
	var mousePos = getMousePos(canvas, evt);
	if (touching(mousePos, burger)) {
		burgerHeld = 'burger';
		burgerOffsetX = mousePos.x - burger.x;
		burgerOffsetY = mousePos.y - burger.y;
	} else if (touching(mousePos, burger5)) {
		burgerHeld = 'burger5';
		burgerOffsetX = mousePos.x - burger5.x;
		burgerOffsetY = mousePos.y - burger5.y;
	} else if (touching(mousePos, burger10)) {
		burgerHeld = 'burger10';
		burgerOffsetX = mousePos.x - burger10.x;
		burgerOffsetY = mousePos.y - burger10.y;
	}
}, false);
// drop burger
canvas.addEventListener('mouseup', function(evt) {
	burgerHeld = false;
}, false);
canvas.addEventListener('mouseleave', function(evt) {
	burgerHeld = false;
}, false);

/* reset burgers when bob is fed */
var reset = function() {
	burger.x = canvas.width / 500 * 83;
	burger.y = canvas.width / 100 * 94;

	burger.hbx = canvas.width / 500 * 83;
	burger.hby = canvas.width / 100 * 94;

	burger5.x = canvas.width / 2 - (burger5.w / 2);
	burger5.y = canvas.width / 100 * 98;

	burger5.hbx = canvas.width / 2 - (burger5.w / 2);
	burger5.hby = canvas.width / 100 * 98;

	burger10.x = canvas.width / 500 * 349;
	burger10.y = canvas.width / 100 * 93;

	burger10.hbx = canvas.width / 500 * 349;
	burger10.hby = canvas.width / 100 * 93;

	burgerHeld = false;
};

/* translate touch events to mouse events */
function touchHandler(event) {
	var touches = event.changedTouches,
		first = touches[0],
		type = "";
	switch(event.type) {
		case "touchstart": type = "mousedown"; break;
		case "touchmove":  type = "mousemove"; break;        
		case "touchend":   type = "mouseup";   break;
		default:           return;
	}

	var simulatedEvent = document.createEvent("MouseEvent");
	simulatedEvent.initMouseEvent(type, true, true, window, 1, 
		first.screenX, first.screenY, 
		first.clientX, first.clientY, false, 
		false, false, false, 0/*left*/, null);

	first.target.dispatchEvent(simulatedEvent);
	event.preventDefault();
}

/* remove item from array */
var remItem = function(array, item) {
	for (var i in array) {
		if (array[i] == item) {
			array.splice(i, 1);
			break;
		}
	}
}

/* pause */
var togglePause = function() {
	pause = !pause;

	if (pause) {
		document.getElementById('pauseMenu').style.display = 'initial';
	} else {
		document.getElementById('pauseMenu').style.display = 'none';
	}
}

/* game over */
var gameOver = function() {
	pause = true;
	document.getElementById('failMenu').style.display = 'initial';
}

/* winning */
var win = function() {
	pause = true;
	docCookies.setItem(level, 'complete', 31536000);
	docCookies.setItem('coins', +docCookies.getItem('coins') + (5 * Math.ceil(document.getElementById('timer').innerHTML / 60)), 31536000);
	document.getElementById('congratulations').innerHTML = 'Good job! You earned ' + 5 * Math.ceil(document.getElementById('timer').innerHTML / 60) + ' coins';
	document.getElementById('winMenu').style.display = 'initial';
}

/* undo 1 burger */
var undo = function() {
	if (answer > 0) {
		--answer;
	}
}

/* check answer */
var checkAns = function() {
	if (!pause) { // avoid double-click level fail
		pause = true;
		if (answer < eval(question)) {
			cryingSnd.play();

			bobReady = false;
			bobImage.src = "img/c" + docCookies.getItem('bob') + ".svg";

			document.getElementById('fill').style.transition = 'margin-top 2s, height 2s';
			document.getElementById('fill').style.height = '3.25em';
		} else if (answer > eval(question)) {
			explosionSnd.play();

			bobReady = false;
			bobImage.src = "img/explodingBob.svg";
			bgReady = false;
			bgImage.src = "img/backgroundExplosion.svg";

			// hide burgers the lazy way
			burger.x = Infinity;
			burger5.x = Infinity;
			burger10.x = Infinity;

			document.getElementById('fill').style.transition = 'margin-top 2s, height 2s';
			document.getElementById('fill').style.marginTop = 'initial';
			document.getElementById('fill').style.height = '3.25em';
		} else {
			applauseSnd.play();

			bobReady = false;
			bobImage.src = "img/h" + docCookies.getItem('bob') + ".svg";

			correct = true;
		}

		setTimeout(function() { // do this after 2s
			if (!correct) {
				gameOver();
			} else {
				bobReady = false;
				bobImage.src = "img/" + docCookies.getItem('bob') + ".svg";

				remItem(questions, question); // done current question, remove from array
				if (questions.length == 0) { // finish level if out of Qs
					win();
				} else { // else next Q
					correct = false;
					answer = 0;
					genQ();
					reset();
					pause = false
				}
			}
		}, 2000);
	}
};

/* generate new question */
// array index is random num between 0 and questions.length
var genQ = function() {
	question = questions[Math.floor(Math.random() * questions.length)];
};

/* update game objects */
var update = function() {
	if (touching(burger, bob) && answer <= 19) {
		eatingSnd.play();
		++answer;
		reset();
	} else if (touching(burger5, bob) && answer <= 15) {
		eatingSnd.play();
		answer += 5;
		reset();
	} else if (touching(burger10, bob) && answer <= 10) {
		eatingSnd.play();
		answer += 10;
		reset();
	}
};

/* draw stuff */
// order by z-index
var render = function() {
	if (bgReady) {
		ctx.drawImage(bgImage, 0, 0, canvas.width, canvas.height);
	}

	if (bobReady) {
		ctx.drawImage(bobImage, bob.x, bob.y, bob.w, bob.h);
	}

	if (burgerReady) {
		ctx.drawImage(burgerImage, burger.x, burger.y, burger.w, burger.h);
	}
	if (burger5Ready) {
		ctx.drawImage(burger5Image, burger5.x, burger5.y, burger5.w, burger5.h);
	}
	if (burger10Ready) {
		ctx.drawImage(burger10Image, burger10.x, burger10.y, burger10.w, burger10.h);
	}

	// question
	document.getElementById('question').innerHTML = question + "=" + answer;
};

/* main loop */
// calc time between frames, tell update() so it accounts for inconsistent
// execution times and adjusts movement speed accordingly (modifier)
var main = function() {
	update();
	render();

	// do it again!
	requestAnimationFrame(main);
};

/* make requestAnimationFrame work in different browsers */
var w = window;
requestAnimationFrame =
	w.requestAnimationFrame
	|| w.webkitRequestAnimationFrame
	|| w.msRequestAnimationFrame
	|| w.mozRequestAnimationFrame;

/* start game */
document.addEventListener("touchstart", touchHandler, true);
document.addEventListener("touchmove", touchHandler, true);
document.addEventListener("touchend", touchHandler, true);
document.addEventListener("touchcancel", touchHandler, true);    
bgMusic.play();
genQ();
reset();
main();

/* update timer */
setInterval(function() {
	if (!pause) {
		if (document.getElementById('timer').innerHTML <= 0) {
			cryingSnd.play();
			setTimeout(function() {
				gameOver();
			}, 2000);
		} else {
			document.getElementById('timer').innerHTML -= 1;
		}
	}
}, 1000);
