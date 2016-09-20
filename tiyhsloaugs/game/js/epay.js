/*
 *
 * @licstart  The following is the entire license notice for the
 *	JavaScript code in this page.
 *
 * Copyright (c) 2015 Kyle Farwell <kfarwell@member.fsf.org>
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
 * @licend	The above is the entire license notice
 * for the JavaScript code in this page.
 *
 */

var updateCash = function() {
	document.getElementById("cash").innerHTML = "Cash: " + docCookies.getItem("cash");
}

/* things you can buy in the store */
items = [
	/* workplaces */
	["callcenter", 750],
	["cubicle", 1500],
	["yacht", 3000],
	/* tech */
	["new-computer", 150],
	["phone2", 300],
	["phone3", 500],
	["bbpi", 300],
	["thinkbad", 500],
	["macbook-pear", 1000],
	["computer-crt", 2000],
	/* decor */
	["hipsterglasses", 300],
	["painting", 5000],
	["painting1", 10000],
	["sticky1", 10],
	["sticky2", 20],
	["sticky3", 30],
	["sticky4", 40],
	["sticky5", 50],
	["sticky6", 60],
	["monster", 100]
]

var buyItem = function(item, cost) {
	if (docCookies.getItem("cash") < cost) {
		bootbox.alert({message: "You are too poor!", closeButton: false});
	}
	else {
		docCookies.setItem(item, "owned", 31536000);
		docCookies.setItem("cash", +docCookies.getItem("cash") - cost, 31536000);
		docCookies.setItem("new", "true", 31536000);
		updateItems();
		updateCash();
	}
};

var updateItems = function() {
	for (var i in items) {
		if (docCookies.hasItem(items[i][0])) {
			// hide owned items
			document.getElementById(items[i][0]).style.display = "none";
		}
		else if (docCookies.getItem("cash") < items[i][1]) {
			// make items that cannot be afforded red
			document.getElementById(items[i][0]).className = "btn expensive";
		}
	}
	if (docCookies.getItem("computer-crt") === "broken")
		document.getElementById("computer-crt").style.display = "initial";

	if (!docCookies.hasItem("yacht")) {
		document.getElementById("computer-crt").style.display = "none";
		document.getElementById("painting1").style.display = "none";
	}
	if (!docCookies.hasItem("cubicle")) {
		document.getElementById("thinkbad").style.display = "none";
		document.getElementById("macbook-pear").style.display = "none";
		document.getElementById("monster").style.display = "none";
		document.getElementById("hipsterglasses").style.display = "none";
	}
	if (!docCookies.hasItem("callcenter")) {
		document.getElementById("phone3").style.display = "none";
		document.getElementById("bbpi").style.display = "none";
		document.getElementById("painting").style.display = "none";
	}

	if (docCookies.hasItem("callcenter") && !docCookies.hasItem("cubicle"))
		document.getElementById("yacht").style.display = "none";
	else if (!docCookies.hasItem("callcenter")) {
		document.getElementById("cubicle").style.display = "none";
		document.getElementById("yacht").style.display = "none";
	}
}

updateItems();
updateCash();
