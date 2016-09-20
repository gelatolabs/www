/*
 * 
 * @licstart  The following is the entire license notice for the 
 *  JavaScript code in this page.
 * 
 * Copyright (c) 2015 Kyle Farwell <kfarwell@member.fsf.org>
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

if (window.innerWidth / 0.75 <= window.innerHeight) { // fit width if the whole 0.75:1 (3:4) container will fit
	document.getElementById("container").style.width = window.innerWidth + "px";
	document.getElementById("container").style.height = window.innerWidth / 0.75 + "px";
	document.getElementById("container").style.top = (window.innerHeight - window.innerWidth / 0.75) / 2 + "px";
	document.getElementById("container").style.left = (window.innerWidth - window.innerWidth) / 2 + "px";
	document.getElementById("container").style.boxShadow = "0 0 " + (window.innerHeight - window.innerWidth / 0.75) / 2 + "px";
	document.getElementById("html").style.fontSize = window.innerWidth / 100 + "px";
} else { // else fit height
	document.getElementById("container").style.width =  window.innerHeight * 0.75 + "px";
	document.getElementById("container").style.height =  window.innerHeight + "px";
	document.getElementById("container").style.top = "0px";
	document.getElementById("container").style.left = (window.innerWidth - window.innerHeight * 0.75) / 2 + "px";
	document.getElementById("container").style.boxShadow = "0 0 " + (window.innerWidth - window.innerHeight * 0.75) / 2 + "px";
	document.getElementById("html").style.fontSize = window.innerHeight * 0.75 / 100 + "px";
}

// prevent dragging elements
window.ondragstart = function() {
	return false;
}

// init coins on first play
if (!docCookies.hasItem('coins')) {
	docCookies.setItem('coins', 0, 31536000);
}
// init volumes on first play
if ((!docCookies.hasItem('music')) || (!docCookies.hasItem('sfx'))) {
	docCookies.setItem('music', 0.5, 31536000);
	docCookies.setItem('sfx', 0.5, 31536000);
}
/* set items on first play */
if (! docCookies.hasItem('burger')) {
	docCookies.setItem('burger', 'hdefault', 31536000);
}
if (! docCookies.hasItem('bob')) {
	docCookies.setItem('bob', 'bdefault', 31536000);
}

var music = new Audio('snd/menu.ogg');
music.loop = true;
music.volume = docCookies.getItem('music');
music.play();
