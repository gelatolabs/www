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

function preloader() {
	if (document.images) {
		var img1 = new Image();
		var img2 = new Image();
		var img3 = new Image();
		var img4 = new Image();
		var img5 = new Image();
		var img6 = new Image();
		var img7 = new Image();
		var img8 = new Image();
		var img9 = new Image();
		var img10 = new Image();
		var img11 = new Image();
		var img12 = new Image();
		var img13 = new Image();
		var img14 = new Image();
		var img15 = new Image();
		var img16 = new Image();
		var img17 = new Image();
		var img18 = new Image();
		var img19 = new Image();
		var img20 = new Image();
		var img21 = new Image();
		var img22 = new Image();
		var img23 = new Image();
		var img24 = new Image();
		var img25 = new Image();
		var img26 = new Image();
		var img27 = new Image();
		var img28 = new Image();
		var img29 = new Image();
		var img30 = new Image();
		var img31 = new Image();
		var img32 = new Image();
		var img33 = new Image();
		var img34 = new Image();
		var img35 = new Image();
		var img36 = new Image();
		var img37 = new Image();

		img1.src= "img/10hcheeseburger.svg";
		img2.src= "img/10hdefault.svg";
		img3.src= "img/10hhotdog.svg";
		img4.src= "img/10hnachos.svg";
		img5.src= "img/10hpopcorn.svg";
		img6.src= "img/5hcheeseburger.svg";
		img7.src= "img/5hdefault.svg";
		img8.src= "img/5hhotdog.svg";
		img9.src= "img/5hnachos.svg";
		img10.src = "img/5hpopcorn.svg";
		img11.src = "img/backgroundExplosion.svg";
		img12.src = "img/background.svg";
		img13.src = "img/balien.svg";
		img14.src = "img/banime.svg";
		img15.src = "img/bdefault.svg";
		img16.src = "img/bmovie.svg";
		img17.src = "img/bshinji.svg";
		img18.src = "img/cbalien.svg";
		img19.src = "img/cbanime.svg";
		img20.src = "img/cbdefault.svg";
		img21.src = "img/cbmovie.svg";
		img22.src = "img/cbshinji.svg";
		img23.src = "img/explodingBob.svg";
		img24.src = "img/hbalien.svg";
		img25.src = "img/hbanime.svg";
		img26.src = "img/hbdefault.svg";
		img27.src = "img/hbmovie.svg";
		img28.src = "img/hbshinji.svg";
		img29.src = "img/hcheeseburger.svg";
		img30.src = "img/hdefault.svg";
		img31.src = "img/hhotdog.svg";
		img32.src = "img/hnachos.svg";
		img33.src = "img/hpopcorn.svg";
		img34.src = "img/howToPlayFour.svg";
		img35.src = "img/howToPlayOne.svg";
		img36.src = "img/howToPlayThree.svg";
		img37.src = "img/howToPlayTwo.svg";
	}
}

function addLoadEvent(func) {
	var oldonload = window.onload;
	if (typeof window.onload != 'function') {
		window.onload = func;
	} else {
		window.onload = function() {
			if (oldonload) {
				oldonload();
			}
			func();
		}
	}
}

addLoadEvent(preloader);
