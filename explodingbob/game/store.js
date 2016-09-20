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

var updateCoins = function() {
	document.getElementById('coins').innerHTML = 'Coins: ' + docCookies.getItem('coins');
}

items = [
	['hcheeseburger', 10],
	['hhotdog', 15],
	['hpopcorn', 15],
	['hnachos', 15],
	['banime', 20],
	['bmovie', 20],
	['balien', 20],
	['bshinji', 1337]
]

var buyItem = function(item, cost) {
	if (docCookies.hasItem(item)) {
		alert("You already own that item!");
	} else if (docCookies.getItem('coins') < cost) {
		alert("You can't afford that!");
	} else {
		docCookies.setItem(item, 'owned', 31536000);
		docCookies.setItem('coins', +docCookies.getItem('coins') - cost, 31536000);
		updateItems();
		updateCoins();
	}
};

var updateItems = function() {
	for (var i in items) {
		if (docCookies.hasItem(items[i][0])) {
			// hide owned items
			document.getElementById(items[i][0]).style.display = 'none';
		} else if (docCookies.getItem('coins') < items[i][1]) {
			// make items that cannot be afforded red
			document.getElementById(items[i][0]).style.backgroundColor = '#ff0000';
		}
	}
}

updateItems();
updateCoins();
