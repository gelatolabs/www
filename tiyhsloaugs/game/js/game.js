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

	ready: false,
	visible: true
};
bg.img = new Image();
bg.img.onload = function() {
	bg.ready = true;
}
bg.img.src = "img/menu.png";

var title = {
	w: canvas.width,
	h: canvas.width * 0.217,
	x: 0,
	y: canvas.height * 0.1,

	ready: false,
	visible: true
};
title.img = new Image();
title.img.onload = function() {
	title.ready = true;
}
title.img.src = "img/title.png";

var btnPlay = {
	w: canvas.width * 0.2,
	h: (canvas.width * 0.2) * 0.438,
	x: canvas.width * 0.1,
	y: canvas.height * 0.45,

	ready: false,
	visible: true
};
btnPlay.img = new Image();
btnPlay.img.onload = function() {
	btnPlay.ready = true;
};
btnPlay.img.src = "img/btnPlay.png";

var btnDontPlay = {
	w: canvas.width * 0.2,
	h: (canvas.width * 0.2) * 0.438,
	x: canvas.width * 0.4,
	y: canvas.height * 0.45,

	ready: false,
	visible: true
};
btnDontPlay.img = new Image();
btnDontPlay.img.onload = function() {
	btnDontPlay.ready = true;
};
btnDontPlay.img.src = "img/btnDontPlay.png";

var btnUnsure = {
	w: canvas.width * 0.2,
	h: (canvas.width * 0.2) * 0.438,
	x: canvas.width * 0.7,
	y: canvas.height * 0.45,

	ready: false,
	visible: true
};
btnUnsure.img = new Image();
btnUnsure.img.onload = function() {
	btnUnsure.ready = true;
};
btnUnsure.img.src = "img/btnUnsure.png";

var phone = {
	w: canvas.width * 0.12,
	h: (canvas.width * 0.12) * 1.167,
	x: canvas.width * 0.7,
	y: canvas.height * 0.485,
	visible: false,
	ringing: false
};
phone.img = new Image();
phone.img.onload = function() {
	phone.ready = true;
};
phone.img.src = "img/phone.png";

var phone1 = {
	w: canvas.width * 0.12,
	h: (canvas.width * 0.12) * 1.1,
	x: canvas.width * 0.2,
	y: canvas.height * 0.485,
	visible: false,
	ringing: false
};
phone1.img = new Image();
phone1.img.onload = function() {
	phone1.ready = true;
};
phone1.img.src = "img/phone1.png";

var phone2 = {
	w: canvas.width * 0.12,
	h: canvas.width * 0.12,
	x: canvas.width * 0.05,
	y: canvas.height * 0.48,
	visible: false,
	ringing: false
};
phone2.img = new Image();
phone2.img.onload = function() {
	phone2.ready = true;
};
phone2.img.src = "img/phone2.png";

var btnStore = {
	w: canvas.width * 0.1,
	h: (canvas.width * 0.1) * 0.438,
	x: canvas.width * 0.01,
	y: canvas.width * 0.01,

	ready: false,
	visible: false
};
btnStore.img = new Image();
btnStore.img.onload = function() {
	btnStore.ready = true;
};
btnStore.img.src = "img/btnStore.png";

var computer = {
	w: canvas.width * 0.33,
	h: (canvas.width * 0.33) * 0.789,
	x: canvas.width * 0.33,
	y: canvas.height * 0.33,
	
	ready: false,
	visible: false,
	ringing: false,
	broken: false
};
computer.img = new Image();
computer.img.onload = function() {
	computer.ready = true;
};
computer.img.src = "img/computer.png";

var thinkbad = {
	w: canvas.width * 0.2,
	h: (canvas.width * 0.2) * 0.432,
	x: canvas.width * 0.33,
	y: canvas.height * 0.33,
	
	ready: false,
	visible: false,
	ringing: false
};
thinkbad.img = new Image();
thinkbad.img.onload = function() {
	thinkbad.ready = true;
};
thinkbad.img.src = "img/thinkbad.png";

var macbookPear = {
	w: canvas.width * 0.2,
	h: (canvas.width * 0.2) * 0.432,
	x: canvas.width * 0.33,
	y: canvas.height * 0.33,
	
	ready: false,
	visible: false,
	ringing: false
};
macbookPear.img = new Image();
macbookPear.img.onload = function() {
	macbookPear.ready = true;
};
macbookPear.img.src = "img/macbook-pear.png";

var bbpi = {
	w: canvas.width * 0.1,
	h: canvas.width * 0.1,
	x: canvas.width * 0.1,
	y: canvas.width * 0.1,

	ready: false,
	visible: false,
	ringing: false
};
bbpi.img = new Image();
bbpi.img.onload = function() {
	bbpi.ready = true;
};
bbpi.img.src = "img/bbpi.png";

var computerCrt = {
	w: canvas.width * 0.25,
	h: (canvas.width * 0.26) * 0.65,
	x: canvas.width * 0.33,
	y: canvas.width * 0.33,

	ready: false,
	visible: false,
	ringing: false,
	broken: false
};
computerCrt.img = new Image();
computerCrt.img.onload = function() {
	computerCrt.ready = true;
};
computerCrt.img.src = "img/computerCRT.png";

var ducky = {
	w: canvas.width * 0.08,
	h: canvas.width * 0.08,
	x: canvas.width * 0.85,
	y: canvas.height * 0.18,

	ready: false,
	visible: false
};
ducky.img = new Image();
ducky.img.onload = function () {
	ducky.ready = true;
};
ducky.img.src = "img/ducky.png";

/* you get the missing browser poster after the related call */
var iePoster = {
	w: canvas.width * 0.1,
	h: (canvas.width * 0.1) * 1.5,
	x: canvas.width * 0.2,
	y: canvas.height * 0.15,

	ready: false,
	visible: false
};
iePoster.img = new Image();
iePoster.img.onload = function() {
	iePoster.ready = true;
};
iePoster.img.src = "img/wanted-browser.png";

var hipsterGlasses = {
	w: canvas.width * 0.1,
	h: canvas.width * 0.1,
	x: canvas.width * 0.9,
	y: canvas.height * 0.2,

	ready: false,
	visible: false
};
hipsterGlasses.img = new Image();
hipsterGlasses.img.onload = function() {
	hipsterGlasses.ready = true;
}
hipsterGlasses.img.src = "img/hipsterglasses.png";

var painting = {
	w: canvas.width * 0.2,
	h: canvas.width * 0.2,
	x: canvas.width * 0.2,
	y: canvas.height * 0.2,

	ready: false,
	visible: false
};
painting.img = new Image();
painting.img.onload = function() {
	painting.ready = true;
}
painting.img.src = "img/painting.png";

var painting1 = {
	w: canvas.width * 0.25,
	h: canvas.width * 0.25,
	x: canvas.width * 0.4,
	y: canvas.width * 0.2,

	ready: false,
	visible: false
};
painting1.img = new Image();
painting1.img.onload = function() {
	painting1.ready = true;
}
painting1.img.src = "img/painting1.png";

var sticky1 = {
	w: canvas.width * 0.03,
	h: canvas.width * 0.03,
	x: canvas.width * 0.75,
	y: canvas.width * 0.3,

	ready: false,
	visible: false
};
sticky1.img = new Image();
sticky1.img.onload = function() {
	sticky1.ready = true;
}
sticky1.img.src = "img/sticky1.png";

var sticky2 = {
	w: canvas.width * 0.03,
	h: canvas.width * 0.03,
	x: canvas.width * 0.73,
	y: canvas.width * 0.28,

	ready: false,
	visible: false
};
sticky2.img = new Image();
sticky2.img.onload = function() {
	sticky2.ready = true;
}
sticky2.img.src = "img/sticky2.png";

var sticky3 = {
	w: canvas.width * 0.03,
	h: canvas.width * 0.03,
	x: canvas.width * 0.75,
	y: canvas.width * 0.2,

	ready: false,
	visible: false
};
sticky3.img = new Image();
sticky3.img.onload = function() {
	sticky3.ready = true;
}
sticky3.img.src = "img/sticky3.png";

var sticky4 = {
	w: canvas.width * 0.03,
	h: canvas.width * 0.03,
	x: canvas.width * 0.78,
	y: canvas.width * 0.26,

	ready: false,
	visible: false
};
sticky4.img = new Image();
sticky4.img.onload = function() {
	sticky4.ready = true;
}
sticky4.img.src = "img/sticky4.png";

var sticky5 = {
	w: canvas.width * 0.03,
	h: canvas.width * 0.03,
	x: canvas.width * 0.8,
	y: canvas.width * 0.34,

	ready: false,
	visible: false
};
sticky5.img = new Image();
sticky5.img.onload = function() {
	sticky5.ready = true;
}
sticky5.img.src = "img/sticky5.png";

var sticky6 = {
	w: canvas.width * 0.03,
	h: canvas.width * 0.03,
	x: canvas.width * 0.66,
	y: canvas.width * 0.2,

	ready: false,
	visible: false
};
sticky6.img = new Image();
sticky6.img.onload = function() {
	sticky6.ready = true;
}
sticky6.img.src = "img/sticky6.png";

var monster = {
	w: canvas.width * 0.1,
	h: (canvas.width * 0.1) * 0.65,
	x: canvas.width * 0.4,
	y: canvas.width * 0.4,

	ready: false,
	visible: false
};
monster.img = new Image();
monster.img.onload = function() {
	monster.ready = true;
}
monster.img.src = "img/monster.png";

/* audio */
var ringtone = new Audio("snd/ringtone.ogg");
ringtone.loop = true;

var ringtone1 = new Audio("snd/ringtone1.ogg");
ringtone1.loop = true;

var ringtone2 = new Audio("snd/ringtone2.ogg");
ringtone2.loop = true;

var messagetone = new Audio("snd/message.ogg");
var messagetone1 = new Audio("snd/message1.ogg");
var messagetone2 = new Audio("snd/message2.ogg");
var messagetone3 = new Audio("snd/message3.ogg");
var messagetone4 = new Audio("snd/message4.ogg");

var quack = new Audio("snd/quack.ogg");

/* useful functions */
var pointOver = function(p, a) {
	return (p.x >= a.x && p.x <= (a.x + a.w) && p.y >= a.y && p.y <= (a.y + a.h));
};

var message = function(caller, message, a, b, c) {
	bootbox.dialog({
		message: message,
		title: "Incoming message from " + caller,
		closeButton: false,
		buttons: {
			a: {
				label: a.answer,
				className: "btn-primary",
				callback: a.result
			},
			b: {
				label: b.answer,
				className: "btn-primary",
				callback: b.result
			},
			c: {
				label: c.answer,
				className: "btn-primary",
				callback: c.result
			}
		}
	});
}

/* game events */
var play = function() {
	title.visible = false;
	btnPlay.visible = false;
	btnDontPlay.visible = false;
	btnUnsure.visible = false;
	phone.visible = true;
	btnStore.visible = true;
	computer.visible = true;
	ducky.visible = true;

	delivery();

	setInterval(function() {
		pay = (docCookies.getItem("ticketCount") * 5) + (Math.floor(Math.random() * (200 - 100 + 1)) + 100);
		if (docCookies.getItem("ticketCount") === "0") {
			docCookies.setItem("rating", +docCookies.getItem("rating") + 1, 31536000);
			bootbox.alert({message: "You're slacking off! Strike " + docCookies.getItem("rating") + "/5!", closeButton: false});
		} else {
			docCookies.setItem("cash", +docCookies.getItem("cash") + pay, 31536000);
			bootbox.alert({message: "You got paid $" + pay + ".", closeButton: false});
			docCookies.setItem("ticketCount", 0, 31536000);
		}

		if (docCookies.getItem("rating") > 4)
			gameOver();
	}, 60000);
};

var deviceAns = function(call,device) {
	if (device === "phone") {
		phone.ringing = false;
		phone.ready = false;
		phone.img.src = "img/phone.png";

		ringtone.pause();
		ringtone.currentTime = 0;
	} else if (device === "phone1") {
		phone1.ringing = false;
		phone1.ready = false;
		phone1.img.src = "img/phone1.png";

		ringtone1.pause();
		ringtone1.currentTime = 0;
	} else if (device === "phone2") {
		phone2.ringing = false;
		phone2.ready = false;
		phone2.img.src = "img/phone2.png";

		ringtone2.pause();
		ringtone2.currentTime = 0;
	} else if (device === "computer") {
		computer.ringing = false;
		computer.ready = false;
		computer.img.src = "img/computer.png";
	} else if (device === "thinkbad") {
		thinkbad.ringing = false;
		thinkbad.ready = false;
		thinkbad.img.src = "img/thinkbad.png";
	} else if (device === "macbookPear") {
		macbookPear.ringing = false;
		macbookPear.ready = false;
		macbookPear.img.src = "img/macbook-pear.png";
	} else if (device === "computerCrt") {
		computerCrt.ringing = false;
		computerCrt.ready = false;
		computerCrt.img.src = "img/computerCRT.png";
	}

	var callers = ["John Smith", "Your Mother", "Phil", "Department 5", "Department Head", "Bell Labs", "Some Loser", "Outer Space", "NASA", "Sweet Old Lady", "George", "Some Mexican Dude", "Abraham Lincoln", "Richard Stallman", "Kim Jong Un", "Kim Jong Il", "Donald Trump", "Microsoft", "Nigerian Prince", "Some Indie Game Dev", "The Monkeys in Sales", "That Amish Guy", "Your Pointy-Haired Boss", "Jesus Christ", "Snoop Dogg", "Eric S. Raymond", "Dennis Ritchie", "Linus Torvalds", "Theo de Raadt", "Uriel", "Pizza Pizza", "Nintendo", "Riot Games", "Taco Casa", "Miley Cyrus", "Cirno", "Yourself", "Your Wife", "Your Dog", "Geoff Howland","Your Annoying Neightbour","The Whitehouse","Vladimir Putin","Zombie Hitler"];
	var caller = callers[Math.floor(Math.random() * callers.length)];

	switch(call) {
		case 0:
			message(caller, "Help, my computer imploded??", {
				answer: "Shut up and hang up.",
				result: function() {
					docCookies.setItem("quality", docCookies.getItem("quality") - 5, 31536000);
					docCookies.setItem("ticketCount", +docCookies.getItem("ticketCount") + 1, 31536000);
					bootbox.alert({message: "They hung up.", closeButton: false});
				}
			}, {
				answer: "Have you tried turning it off and on again?",
				result: function() {
					continueConversation(caller, 2);
				}
			}, {
				answer: "Hello, this is tech support. May I close your ticket now?",
				result: function() {
					docCookies.setItem("ticketCount", +docCookies.getItem("ticketCount") + 1, 31536000);
					bootbox.alert({message: "They hung up.", closeButton: false});
				}
			});
			break;
		case 1:
			message(caller, "The error message says my copy of Wingdows is not genuine.", {
				answer: "Install Gentoo.",
				result: function() {
					docCookies.setItem("quality", +docCookies.getItem("quality") + 10, 31536000);
					docCookies.setItem("ticketCount", +docCookies.getItem("ticketCount") + 1, 31536000);
					bootbox.alert({message: "They hung up.", closeButton: false});
				}
			}, {
				answer: "I'll walk you through a series of steps that won't work.",
				result: function() {
					docCookies.setItem("quality", docCookies.getItem("quality") - 5, 31536000);
					continueConversation(caller, 3);
				}
			}, {
				answer: "Your mousepad is incompatible with your operating system.",
				result: function() {
					continueConversation(caller, 4);
				}
			});
			break;

		case 2:
			message(caller, "The Internet is slow, what causes that?", {
				answer: "Have you tried turning it on and off again?",
				result: function() {
					docCookies.setItem("ticketCount", +docCookies.getItem("ticketCount") + 1, 31536000);
					bootbox.alert({message: "They rebooted like a pro.", closeButton: false});
				}
			}, {
				answer: "Please hold while I ignore your call.",
				result: function() {
					if (Math.floor(Math.random() * 2) === 0)
						docCookies.setItem("quality", docCookies.getItem("quality") - 15, 31536000);
					bootbox.alert("You put them on hold.");
				}
			}, {
				answer: "You'll have to provide me with more information.",
				result: function() {
					continueConversation(caller, 4);
				}
			});
			break;
		case 3:
			message(caller, "Where's Internet Explorer?", {
				answer: "I don't know, why don't you try putting up some posters?",
				result: function() {
					docCookies.setItem("ticketCount", +docCookies.getItem("ticketCount") + 1, 31536000);
					bootbox.alert({message: "They hung up.", closeButton: false});
					/* poster unlocked */
					iePoster.visible = true;
					iePoster.ready = true;
					iePoster.active = true;
				}
			}, {
				answer: "First, I need to ask you many questions.", 
				result: function() {
					continueConversation(caller, 3);
				}
			}, {
				answer: "We'll start by uninstalling all your drivers and reinstalling.",
				result: function() {
					continueConversation(caller, 3);
				}
			});
			break;
		case 4:
			message(caller, "Hello, I...", {
				answer: "Shut up and reboot.",
				result: function() {
					docCookies.setItem("ticketCount", +docCookies.getItem("ticketCount") + 1, 31536000);
					bootbox.alert({message: "They turned it off and on again.", closeButton: false});
				}
			}, {
				answer: "Yeah, yeah, it's probably broken. Please hold.", 
				result: function() {
					if ((Math.floor(Math.random() * 2)) === 0)
						continueConversation(caller, 5);
					else {
						docCookies.setItem("quality", docCookies.getItem("quality") - 10, 31536000);
						docCookies.setItem("ticketCount", +docCookies.getItem("ticketCount") + 1, 31536000);
						bootbox.alert({message: "They gave up.", closeButton: false});
					}
				}
			}, {
				answer: "Sorry ma'am, I think you have the wrong number.",
				result: function() {
					docCookies.setItem("ticketCount", +docCookies.getItem("ticketCount") + 1, 31536000);
					bootbox.alert({message: "They hung up, embarrassed.", closeButton: false});
				}
			});
			break;
		case 5:
			message(caller, "I can't get my email.", {
				answer: "Works on my machine.",
				result: function() {
					docCookies.setItem("quality", docCookies.getItem("quality") - 10, 31536000);
					docCookies.setItem("ticketCount", +docCookies.getItem("ticketCount") + 1, 31536000);
					bootbox.alert({message: "Ticket closed.", closeButton: false});
				}
			}, {
				answer: "Your software is worn out. You must be typing too hard.", 
				result: function() {
					continueConversation(caller, 5);
				}
			}, {
				answer: "Your problem is caused by another company's products and/or services.",
				result: function() {
					continueConversation(caller, 4);
				}
			});
			break;
		case 6:
			message(caller, "I've been on hold for tech support since Tuesday.", {
				answer: "Are you sure that NTS is configured correctly?",
				result: function() {
					continueConversation(caller, 4)
				}
			}, {
				answer: "Please hold, another representative will be with you shortly.", 
				result: function() {
					if (Math.floor(Math.random() * 2) === 0)
						docCookies.setItem("quality", docCookies.getItem("quality") - 5, 31536000);
					docCookies.setItem("ticketCount", +docCookies.getItem("ticketCount") + 1, 31536000);
				}
			}, {
				answer: "If you'd like some false hope, I can tell you how to defragment your disk drive.",
				result: function() {
					continueConversation(caller, 3);
				}
			});
			break;
		case 7:
			message(caller, "My keyboard is broken. It only types asterisks for passwords.", {
				answer: "Try changing your password to five asterisks.",
				result: function() {
					docCookies.setItem("ticketCount", +docCookies.getItem("ticketCount") + 1, 31536000);
					bootbox.alert({message: "Thanks. I hope I can remember it.", closeButton: false});
				}
			}, {
				answer: "Have you tried turning it off and on again?",
				result: function() {
					continueConversation(caller, 2);
				}
			}, {
				answer: "The problem is in the part of your brain that handles intelligence.",
				result: function() {
					docCookies.setItem("ticketCount", +docCookies.getItem("ticketCount") + 1, 31536000);
					docCookies.setItem("quality", docCookies.getItem("quality") - 5, 31536000);
					bootbox.alert({message: "They hung up.", closeButton: false});
				}
			});
			break;
		case 8:
			message(caller, "COMPUTER'S BROKEN!", {
				answer: "Is it a PC or a Mac?.",
				result: function() {
					continueConversation(caller, 6);
				}
			}, {
				answer: "Have you tried turning it off and on again?",
				result: function() {
					continueConversation(caller, 2);
				}
			}, {
				answer: "What's the precise nature of the problem?",
				result: function() {
					continueConversation(caller, 7);
				}
			});
			break;
		case 9:
			message(caller, "The HD movie you sold me is 240p.", {
				answer: "If you'd like some false hope, I can tell you how to defragment your disk drive.",
				result: function() {
					continueConversation(caller, 3);
				}
			}, {
				answer: "If your picture is fuzzy then get new glasses.",
				result: function() {
					continueConversation(caller, 10);
				}
			}, {
				answer: "First, I need to ask you many questions.",
				result: function() {
					continueConversation(caller, 3);
				}
			});
			break;
		case 10:
			message(caller, "I think my digital modem is broken.", {
				answer: "Please hold while I pretend to be testing it... Okay, it looks fine from here. The problem must be in your wiring.",
				result: function() {
					continueConversation(caller, 11);
				}
			}, {
				answer: "Have you tried turning it off and on again?",
				result: function() {
					continueConversation(caller, 2);
				}
			}, {
				answer: "If you'd like some false hope, I can tell you how to defragment your disk drive.",
				result: function() {
					continueConversation(caller, 3);
				}
			});
			break;
		case 11:
			message(caller, "I lost my launch codes.", {
				answer: "If you'd like some false hope, I can tell you how to defragment your disk drive.",
				result: function() {
					continueConversation(caller, 3);
				}
			}, {
				answer: "Don't worry, our security system isn't functional. You don't need the codes to launch our nuclear weapons.",
				result: function() {
					docCookies.setItem("ticketCount", +docCookies.getItem("ticketCount") + 1, 31536000);
					bootbox.alert({message: "Problem solved.", closeButton: false});
				}
			}, {
				answer: "I'll need your serial number, which is conveniently located inside the unit.",
				result: function() {
					continueConversation(caller, 13);
				}
			});
			break;
		case 12:
			message(caller, "My mouse doesn't work.", {
				answer: "Try turning off your router, your modem, and your computer. Now turn off your air conditioning, your lights, and your water heater. Unplug your microwave and defrost your refrigerator. Cancel your garbage service, renounce your citizenship, and yank out your phone.",
				result: function() {
					docCookies.setItem("ticketCount", +docCookies.getItem("ticketCount") + 1, 31536000);
					bootbox.alert({message: "They hung up.", closeButton: false});
				}
			}, {
				answer: "Give me a list of all the software and hardware you're using. Now sit there like a sheep while I randomly select a product from the list and tell you it's the problem.",
				result: function() {
					docCookies.setItem("ticketCount", +docCookies.getItem("ticketCount") + 1, 31536000);
					bootbox.alert({message: "They hung up.", closeButton: false});
				}
			}, {
				answer: "No one else has ever reported that problem. That means you are either crazy or a liar.",
				result: function() {
					docCookies.setItem("ticketCount", +docCookies.getItem("ticketCount") + 1, 31536000);
					bootbox.alert({message: "They hung up.", closeButton: false});
				}
			});
			break;
	}
};

var continueConversation = function(caller, id) {
	switch(id) {
		case 0:
			message(caller, "Help, my computer imploded??", {
				answer: "Install Gentoo.",
				result: function() {
					docCookies.setItem("quality", +docCookies.getItem("quality") + 10, 31536000);
					continueConversation(caller, 0);
				}
			}, {
				answer: "Have you tried turning it off and on again?",
				result: function() {
					continueConversation(caller, 1);
				}
			}, {
				answer: "Try hanging up and slamming your head in a drawer.",
				result: function() {
					docCookies.setItem("ticketCount", +docCookies.getItem("ticketCount") + 1, 31536000);
					bootbox.alert({message: "They hung up.", closeButton: false});
				}
			});
			break;
		case 1:
			message(caller, "Help, my computer exploded.", {
				answer: "Install Gentoo.",
				result: function() {
					docCookies.setItem("quality", +docCookies.getItem("quality") + 10, 31536000);
					continueConversation(caller, 0);
				}
			}, {
				answer: "Have you tried turning it off and on again?",
				result: function() {
					continueConversation(caller, 1);
				}
			}, {
				answer: "Try hanging up and slamming your head in a drawer.",
				result: function() {
					docCookies.setItem("ticketCount", +docCookies.getItem("ticketCount") + 1, 31536000);
					bootbox.alert({message: "They hung up.", closeButton: false});
				}
			});
			break;
		case 2:
			message(caller, "I can't find my power button.", {
				answer: "Install Gentoo.",
				result: function() {
					docCookies.setItem("ticketCount", +docCookies.getItem("ticketCount") + 1, 31536000);
					docCookies.setItem("quality", +docCookies.getItem("quality") + 10, 31536000);
					bootbox.alert({message: "They hung up.", closeButton: false});
				}
			}, {
				answer: "Have you tried turning it off and on again?",
				result: function() {
					continueConversation(caller, 2);
				}
			}, {
				answer: "Try hanging up and slamming your head in a drawer.",
				result: function() {
					docCookies.setItem("ticketCount", +docCookies.getItem("ticketCount") + 1, 31536000);
					docCookies.setItem("quality", docCookies.getItem("quality") - 5, 31536000);
					bootbox.alert({message: "They hung up.", closeButton: false});
				}
			});
			break;
		case 3:
			message(caller, "Can I skip all the steps and just buy a new computer?", {
				answer: "Let me transfer you to the Imarichidiot Department.",
				result: function() {
					docCookies.setItem("ticketCount", +docCookies.getItem("ticketCount") + 1, 31536000);
					docCookies.setItem("cash", +docCookies.getItem("cash") + 100, 31536000);
					docCookies.setItem("quality", docCookies.getItem("quality") - 5, 31536000);
					bootbox.alert({message: "You scored a sale somehow.", closeButton: false});
				}
			}, {
				answer: "Have you tried turning it off and on again?",
				result: function() {
					continueConversation(caller, 2);
				}
			}, {
				answer: "You need to upgrade your IQ a few points.",
				result: function() {
					docCookies.setItem("quality", docCookies.getItem("quality") - 10, 31536000);
					continueConversation(caller, 4);
				}
			});
			break;
		case 4:
			message(caller, "How do you do that?", {
				answer: "I'm evaluated on how many tickets I close, not how helpful I am.",
				result: function() {
					docCookies.setItem("ticketCount", +docCookies.getItem("ticketCount") + 1, 31536000);
					bootbox.alert({message: "They hung up.", closeButton: false});
				}
			}, {
				answer: "Try stuffing tree bark in the CD drive and meditating.",
				result: function() {
					docCookies.setItem("ticketCount", +docCookies.getItem("ticketCount") + 1, 31536000);
					docCookies.setItem("quality", docCookies.getItem("quality") - 5, 31536000);
					bootbox.alert({message: "They broke their computer beyond repair.", closeButton: false});
				}
			}, {
				answer: "Try rebooting the mousepad. If that doesn't work, I'll call you back.",
				result: function() {
					docCookies.setItem("ticketCount", +docCookies.getItem("ticketCount") + 1, 31536000);
					bootbox.alert({message: "They seemed satisfied. Maybe.", closeButton: false});
				}
			});
			break;
		case 5:
			message(caller, "May I speak with your superior?", {
				answer: "Sure, but he sounds exactly like me.",
				result: function() {
					docCookies.setItem("quality", docCookies.getItem("quality") - 5, 31536000);
					docCookies.setItem("ticketCount", +docCookies.getItem("ticketCount") + 1, 31536000);
					bootbox.alert({message: "They hung up.", closeButton: false});
				}
			}, {
				answer: "There some religious debate on that one.",
				result: function() {
					docCookies.setItem("ticketCount", +docCookies.getItem("ticketCount") + 1, 31536000);
					bootbox.alert({message: "* silence *", closeButton: false});
				}
			}, {
				answer: "Shut up and reboot.",
				result: function() {
					docCookies.setItem("ticketCount", +docCookies.getItem("ticketCount") + 1, 31536000);
					docCookies.setItem("quality", docCookies.getItem("quality") - 5, 31536000);
					bootbox.alert({message: "They rebooted like an Ubuntu pro.", closeButton: false});
				}
			});
			break;
		case 6:
			message(caller, "YES!", {
				answer: "The problem is in the part of your brain that handles intelligence.",
				result: function() {
					docCookies.setItem("ticketCount", +docCookies.getItem("ticketCount") + 1, 31536000);
					docCookies.setItem("quality", docCookies.getItem("quality") - 5, 31536000);
					bootbox.alert({message: "They hung up.", closeButton: false});
				}
			}, {
				answer: "What's wrong with it?",
				result: function() {
					continueConversation(caller, 8);
				}
			}, {
				answer: "What's the precise nature of the problem?",
				result: function() {
					continueConversation(caller, 7);
				}
			});
			break;
		case 7:
			message(caller, "EMAIL!", {
				answer: "Email me a list of things you already tried. I'll go down the list and make you try every single thing again, sometimes more than once.",
				result: function() {
					docCookies.setItem("ticketCount", +docCookies.getItem("ticketCount") + 1, 31536000);
					docCookies.setItem("quality", docCookies.getItem("quality") - 5, 31536000);
					bootbox.alert({message: "They hung up.", closeButton: false});
				}
			}, {
				answer: "What's wrong with it?",
				result: function() {
					continueConversation(caller, 8);
				}
			}, {
				answer: "The battery on my phone is dying! *click*",
				result: function() {
					docCookies.setItem("ticketCount", +docCookies.getItem("ticketCount") + 1, 31536000);
					bootbox.alert({message: "They seemed satisfied enough.", closeButton: false});
				}
			});
			break;
		case 8:
			message(caller, "BROKEN DOWN!", {
				answer: "Broken down how?",
				result: function() {
					continueConversation(caller, 9);
				}
			}, {
				answer: "Our software is perfect. The problem must be with you.",
				result: function() {
					docCookies.setItem("ticketCount", +docCookies.getItem("ticketCount") + 1, 31536000);
					docCookies.setItem("quality", docCookies.getItem("quality") - 5, 31536000);
					bootbox.alert({message: "They hung up.", closeButton: false});
				}
			}, {
				answer: "What's the precise nature of the problem?",
				result: function() {
					continueConversation(caller, 7);
				}
			});
			break;
		case 9:
			message(caller, "BIG LOUD NOISE!", {
				answer: "Google it.",
				result: function() {
					docCookies.setItem("ticketCount", +docCookies.getItem("ticketCount") + 1, 31536000);
					docCookies.setItem("quality", docCookies.getItem("quality") - 5, 31536000);
					bootbox.alert({message: "They hung up.", closeButton: false});
				}
			}, {
				answer: "Your stubbornness is becoming an obstacle to my financial success.",
				result: function() {
					docCookies.setItem("ticketCount", +docCookies.getItem("ticketCount") + 1, 31536000);
					docCookies.setItem("quality", docCookies.getItem("quality") - 5, 31536000);
					bootbox.alert({message: "They hung up.", closeButton: false});
				}
			}, {
				answer: "What's the precise nature of the problem?",
				result: function() {
					continueConversation(caller, 7);
				}
			});
			break;
		case 10:
			message(caller, "If my glasses are the problem, why does the couch look perfectly clear?", {
				answer: "Google it.",
				result: function() {
					docCookies.setItem("ticketCount", +docCookies.getItem("ticketCount") + 1, 31536000);
					bootbox.alert({message: "They found an HD version on Google.", closeButton: false});
				}
			}, {
				answer: "Your stubbornness is becoming an obstacle to my financial success.",
				result: function() {
					docCookies.setItem("ticketCount", +docCookies.getItem("ticketCount") + 1, 31536000);
					docCookies.setItem("quality", docCookies.getItem("quality") - 5, 31536000);
					bootbox.alert({message: "They hung up.", closeButton: false});
				}
			}, {
				answer: "Good question. Please hold while I transfer you to couch tech support.",
				result: function() {
					if (Math.floor(Math.random() * 2) === 0)
						docCookies.setItem("quality", docCookies.getItem("quality") - 15, 31536000);
					bootbox.alert("You put them on hold.");
				}
			});
			break;
		case 11:
			message(caller, "How do I fix it?", {
				answer: "Google it.",
				result: function() {
					docCookies.setItem("ticketCount", +docCookies.getItem("ticketCount") + 1, 31536000);
					bootbox.alert({message: "They found a better tech support provider on Google.", closeButton: false});
				}
			}, {
				answer: "You'll have to rip out all of the wiring in your entire house to locate the problem.",
				result: function() {
					continueConversation(caller, 12);
				}
			}, {
				answer: "Your stubbornness is becoming an obstacle to my financial success.",
				result: function() {
					docCookies.setItem("ticketCount", +docCookies.getItem("ticketCount") + 1, 31536000);
					docCookies.setItem("quality", docCookies.getItem("quality") - 5, 31536000);
					bootbox.alert({message: "They hung up.", closeButton: false});
				}
			});
			break;
		case 12:
			message(caller, "Are you sure? Because the lights on the modem aren't even on.", {
				answer: "That means you have moisture on your internal wiring. You'll also need to replace all of your plumbing and get a new roof.",
				result: function() {
					docCookies.setItem("ticketCount", +docCookies.getItem("ticketCount") + 1, 31536000);
					bootbox.alert({message: "They gave up and switched ISPs.", closeButton: false});
				}
			}, {
				answer: "Please hold, another representative will be with you shortly.", 
				result: function() {
					if (Math.floor(Math.random() * 2) === 0)
						docCookies.setItem("quality", docCookies.getItem("quality") - 5, 31536000);
					docCookies.setItem("ticketCount", +docCookies.getItem("ticketCount") + 1, 31536000);
				}
			}, {
				answer: "Your stubbornness is becoming an obstacle to my financial success.",
				result: function() {
					docCookies.setItem("ticketCount", +docCookies.getItem("ticketCount") + 1, 31536000);
					docCookies.setItem("quality", docCookies.getItem("quality") - 5, 31536000);
					bootbox.alert({message: "They hung up.", closeButton: false});
				}
			});
			break;
		case 13:
			message(caller, "The sticker says my warranty will be void if I open the case.", {
				answer: "Well, call me if anything changes.",
				result: function() {
					docCookies.setItem("ticketCount", +docCookies.getItem("ticketCount") + 1, 31536000);
					docCookies.setItem("quality", docCookies.getItem("quality") - 5, 31536000);
					bootbox.alert({message: "They hung up.", closeButton: false});
				}
			}, {
				answer: "Please hold, another representative will be with you shortly.", 
				result: function() {
					if (Math.floor(Math.random() * 2) === 0)
						docCookies.setItem("quality", docCookies.getItem("quality") - 5, 31536000);
					docCookies.setItem("ticketCount", +docCookies.getItem("ticketCount") + 1, 31536000);
				}
			}, {
				answer: "Your stubbornness is becoming an obstacle to my financial success.",
				result: function() {
					docCookies.setItem("ticketCount", +docCookies.getItem("ticketCount") + 1, 31536000);
					docCookies.setItem("quality", docCookies.getItem("quality") - 5, 31536000);
					bootbox.alert({message: "They hung up.", closeButton: false});
				}
			});
			break;
	}
}

var phoneCall = function() {
	bootbox.alert("No one is calling right now.");
};

var toggleEpay = function() {
	if (epayContainer.style.display === "block")
		epayContainer.style.display = "none";
	else {
		epay.contentWindow.location.reload();
		epayContainer.style.display = "block";
	}
};

var duckyClick = function() {
	quack.play();
	bootbox.alert({message: "What are you going to do with that? ...Chew on it?", closeButton: false});
};

var computerCall = function() {
	bootbox.alert({message: "No one is queued right now.", closeButton: false});
}

var iePosterClick = function() {
	bootbox.alert({message: "The elusive Interweb Exploder.", closeButton: false});
}

var monsterClick = function() {
	bootbox.alert({message: "Plot twist: you are the energy drink.", closeButton: false});
}

var sticky1Click = function() {
	bootbox.alert({message: "Protip: stickies are your friend.", closeButton: false});
}
var sticky2Click = function() {
	bootbox.alert({message: "Protip: completing more calls will earn you more money at your next pay cheque.", closeButton: false});
}
var sticky3Click = function() {
	bootbox.alert({message: "Protip: slacking off will make your boss skip pay cheques and eventually fire you.", closeButton: false});
}
var sticky4Click = function() {
	bootbox.alert({message: "Protip: being rude to callers can cause them to file complaints and get you fired.", closeButton: false});
}
var sticky5Click = function() {
	bootbox.alert({message: "Protip: you earn commission if you can manage to land a sale. This isn't your job though, so you might get complaints.", closeButton: false});
}
var sticky6Click = function() {
	bootbox.alert({message: "Protip: Gentoo will forgive your sins and reduce the odds of callers filing complaints.", closeButton: false});
}

var gameOver = function() {
	setTimeout(function() {
		bootbox.alert({message: "You got fired.", closeButton: false});
		setTimeout(function() {
			var cookies = document.cookie.split("; ");
			for (var i = 0; i < cookies.length; i++)
				docCookies.removeItem(cookies[i].split("=")[0]);
			window.location.reload(false);
		}, 2000);
	}, 2000);
}

var delivery = function() {
	docCookies.setItem("new", "false", 31536000);

	if (docCookies.hasItem("yacht")) {
		bg.ready = false;
		bg.img.src = "img/yacht.png";

		computer.w = canvas.width * 0.25;
		computer.h = (canvas.width * 0.25) * 0.789;
		computer.x = canvas.width * 0.7;
		computer.y = canvas.height * 0.3;

		computerCrt.x = canvas.width * 0.42;
		computerCrt.y = canvas.height * 0.28;

		bbpi.x = canvas.width * 0.9;
		bbpi.y = canvas.height * 0.47;

		thinkbad.w = canvas.width * 0.12;
		thinkbad.h = (canvas.width * 0.12) * 0.432;
		thinkbad.x = canvas.width * 0.57;
		thinkbad.y = canvas.height * 0.5;

		macbookPear.w = canvas.width * 0.12;
		macbookPear.h = (canvas.width * 0.12) * 0.432;
		macbookPear.x = canvas.width * 0.41;
		macbookPear.y = canvas.height * 0.5;

		phone.w = canvas.width * 0.1;
		phone.h = (canvas.width * 0.1) * 1.1;
		phone.x = canvas.width * 0.05;
		phone.y = canvas.height * 0.42;
		phone1.w = canvas.width * 0.1;
		phone1.h = (canvas.width * 0.1) * 1.1;
		phone1.x = canvas.width * 0.15;
		phone1.y = canvas.height * 0.42;
		phone2.w = canvas.width * 0.1;
		phone2.h = canvas.height * 0.1;
		phone2.x = canvas.width * 0.25;
		phone2.y = canvas.height * 0.44;

		ducky.x = canvas.width * 0.53;
		ducky.y = canvas.height * 0.09;

		hipsterGlasses.x = canvas.width * 0.2;
		hipsterGlasses.y = canvas.height * 0.12;

		monster.x = canvas.width * 0.36;
		monster.y = canvas.height * 0.11;

		iePoster.x = canvas.width * 0.9;
		iePoster.y = canvas.height * 0.07;

		painting.w = canvas.width * 0.1;
		painting.h = canvas.width * 0.1;
		painting.x = canvas.width * 0.13;
		painting.y = canvas.height * 0.24;

		painting1.w = canvas.width * 0.1;
		painting1.h = canvas.width * 0.1;
		painting1.x = canvas.width * 0.3;
		painting1.y = canvas.height * 0.24;

		sticky1.x = canvas.width * 0.58;
		sticky1.y = canvas.height * 0.25;
		sticky2.x = canvas.width * 0.65;
		sticky2.y = canvas.height * 0.28;
		sticky3.x = canvas.width * 0.67;
		sticky3.y = canvas.height * 0.23;
		sticky4.x = canvas.width * 0.69;
		sticky4.y = canvas.height * 0.26;
		sticky5.x = canvas.width * 0.73;
		sticky5.y = canvas.height * 0.26;
		sticky6.x = canvas.width * 0.78;
		sticky6.y = canvas.height * 0.22;

	} else if (docCookies.hasItem("cubicle")) {
		bg.ready = false;
		bg.img.src = "img/cubicle.png";
		
		computer.w = canvas.width * 0.25;
		computer.h = (canvas.width * 0.25) * 0.789;
		computer.x = canvas.width * 0.7;
		computer.y = canvas.height * 0.3;

		bbpi.x = canvas.width * 0.9;
		bbpi.y = canvas.height * 0.47;

		thinkbad.w = canvas.width * 0.12;
		thinkbad.h = (canvas.width * 0.12) * 0.432;
		thinkbad.x = canvas.width * 0.57;
		thinkbad.y = canvas.height * 0.5;

		macbookPear.w = canvas.width * 0.12;
		macbookPear.h = (canvas.width * 0.12) * 0.432;
		macbookPear.x = canvas.width * 0.41;
		macbookPear.y = canvas.height * 0.5;

		phone.w = canvas.width * 0.1;
		phone.h = (canvas.width * 0.1) * 1.1;
		phone.x = canvas.width * 0.05;
		phone.y = canvas.height * 0.42;
		phone1.w = canvas.width * 0.1;
		phone1.h = (canvas.width * 0.1) * 1.1;
		phone1.x = canvas.width * 0.15;
		phone1.y = canvas.height * 0.42;
		phone2.w = canvas.width * 0.1;
		phone2.h = canvas.height * 0.1;
		phone2.x = canvas.width * 0.25;
		phone2.y = canvas.height * 0.44;

		ducky.x = canvas.width * 0.8;
		ducky.y = canvas.height * 0.05;

		hipsterGlasses.x = canvas.width * 0.65;
		hipsterGlasses.y = canvas.height * 0.07;

		monster.x = canvas.width * 0.72;
		monster.y = canvas.height * 0.05;

		iePoster.x = canvas.width * 0.42;
		iePoster.y = canvas.height * 0.22;

		painting.w = canvas.width * 0.15;
		painting.h = canvas.width * 0.15;
		painting.x = canvas.width * 0.13;
		painting.y = canvas.height * 0.22;

		sticky1.x = canvas.width * 0.58;
		sticky1.y = canvas.height * 0.25;
		sticky2.x = canvas.width * 0.63;
		sticky2.y = canvas.height * 0.28;
		sticky3.x = canvas.width * 0.67;
		sticky3.y = canvas.height * 0.23;
		sticky4.x = canvas.width * 0.69;
		sticky4.y = canvas.height * 0.26;
		sticky5.x = canvas.width * 0.73;
		sticky5.y = canvas.height * 0.26;
		sticky6.x = canvas.width * 0.78;
		sticky6.y = canvas.height * 0.22;


	} else if (docCookies.hasItem("callcenter")) {
		bg.ready = false;
		bg.img.src = "img/callcenter.png";

		computer.x = canvas.width * 0.33;
		computer.y = canvas.height * 0.1;

		bbpi.x = canvas.width * 0.8;
		bbpi.y = canvas.height * 0.36;

		phone.x = canvas.width * 0.1;
		phone.y = canvas.height * 0.42;
		phone1.x = canvas.width * 0.3;
		phone1.y = canvas.height * 0.42;
		phone2.x = canvas.width * 0.5;
		phone2.y = canvas.height * 0.42;

		ducky.x = canvas.width * 0.8;
		ducky.y = canvas.height * 0.46;

		iePoster.x = canvas.width * 0.8;
		iePoster.y = canvas.height * 0.1;

		painting.x = canvas.width * 0.13;
		painting.y = canvas.height * 0.05;
		
		sticky1.x = canvas.width * 0.65;
		sticky1.y = canvas.height * 0.3;
		sticky2.x = canvas.width * 0.68;
		sticky2.y = canvas.height * 0.27;
		sticky3.x = canvas.width * 0.7;
		sticky3.y = canvas.height * 0.29;
		sticky4.x = canvas.width * 0.69;
		sticky4.y = canvas.height * 0.13;
		sticky5.x = canvas.width * 0.73;
		sticky5.y = canvas.height * 0.2;
		sticky6.x = canvas.width * 0.66;
		sticky6.y = canvas.height * 0.22;
		
	} else {
		bg.ready = false;
		bg.img.src = "img/callcloset.png";
	}

	if (docCookies.hasItem("new-computer")) {
		computer.broken = false;
		computer.ready = false;
		computer.img.src = "img/computer.png";
	} else {
		computer.broken = true;
		computer.ready = false;
		computer.img.src = "img/computerGoofed.png";
	}
	if (docCookies.hasItem("computer-crt")) {
		computerCrt.ready = false;
		if (docCookies.getItem("computer-crt") === "broken")
			computerCrt.img.src = "img/computerGoofed.png";
		else
			computerCrt.img.src = "img/computerCRT.png";
		computerCrt.visible = true;
	}

	if (docCookies.hasItem("phone2"))
		phone1.visible = true;
	if (docCookies.hasItem("phone3"))
		phone2.visible = true;
	if (docCookies.hasItem("thinkbad"))
		thinkbad.visible = true;
	if (docCookies.hasItem("macbook-pear"))
		macbookPear.visible = true;
	if (docCookies.hasItem("bbpi"))
		bbpi.visible = true;
	
	if (docCookies.hasItem("hipsterglasses"))
		hipsterGlasses.visible = true;
	if (docCookies.hasItem("painting"))
		painting.visible = true;
	if (docCookies.hasItem("painting1"))
		painting1.visible = true;
	if (docCookies.hasItem("sticky1"))
		sticky1.visible = true;
	if (docCookies.hasItem("sticky2"))
		sticky2.visible = true;
	if (docCookies.hasItem("sticky3"))
		sticky3.visible = true;
	if (docCookies.hasItem("sticky4"))
		sticky4.visible = true;
	if (docCookies.hasItem("sticky5"))
		sticky5.visible = true;
	if (docCookies.hasItem("sticky6"))
		sticky6.visible = true;
	if (docCookies.hasItem("monster"))
		monster.visible = true;
}

/* real events */
canvas.addEventListener('mouseup', function(evt) {
	var mouse = {
		x: evt.pageX - canvas.offsetLeft,
		y: evt.pageY - canvas.offsetTop
	};
	if (pointOver(mouse, btnPlay) && btnPlay.visible)
		play();
	else if (pointOver(mouse, btnDontPlay) && btnDontPlay.visible)
		location.href = "http://google.com/";
	else if (pointOver(mouse, btnUnsure) && btnUnsure.visible) {
		if (Math.floor(Math.random() * 2) === 0)
			play();
		else
			location.href = "http://google.com/";
	}
	else if (pointOver(mouse, phone) && phone.visible) {
		if (phone.ringing)
			deviceAns(Math.floor(Math.random() * 13),"phone");
		else
			phoneCall();
	}
	else if (pointOver(mouse, phone1) && phone1.visible) {
		if (phone1.ringing)
			deviceAns(Math.floor(Math.random() * 13),"phone1");
		else
			phoneCall();
	}
	else if (pointOver(mouse, phone2) && phone2.visible) {
		if (phone2.ringing)
			deviceAns(Math.floor(Math.random() * 13),"phone2");
		else
			phoneCall();
	}
	else if (pointOver(mouse, bbpi) && bbpi.visible) {
		if (bbpi.ringing)
			deviceAns(Math.floor(Math.random() * 13),"bbpi");
		else
			computerCall();
	}
	else if (pointOver(mouse, computer) && computer.visible) {
		if (computer.ringing)
			deviceAns(Math.floor(Math.random() * 13),"computer");
		else
			computerCall();
	}
	else if (pointOver(mouse, thinkbad) && thinkbad.visible) {
		if (thinkbad.ringing)
			deviceAns(Math.floor(Math.random() * 13),"thinkbad");
		else
			computerCall();
	}
	else if (pointOver(mouse, macbookPear) && macbookPear.visible) {
		if (macbookPear.ringing)
			deviceAns(Math.floor(Math.random() * 13),"macbookPear");
		else
			computerCall();
	}
	else if (pointOver(mouse, computerCrt) && computerCrt.visible) {
		if (computerCrt.ringing)
			deviceAns(Math.floor(Math.random() * 13),"computerCrt");
		else
			computerCall();
	}
	else if (pointOver(mouse, btnStore) && btnStore.visible)
		toggleEpay();
	else if (pointOver(mouse, ducky) && ducky.visible)
		duckyClick();
	else if (pointOver(mouse, iePoster) && iePoster.visible)
		iePosterClick();
	else if (pointOver(mouse, monster) && monster.visible)
		monsterClick();
	else if (pointOver(mouse, sticky1) && sticky1.visible)
		sticky1Click();
	else if (pointOver(mouse, sticky2) && sticky2.visible)
		sticky2Click();
	else if (pointOver(mouse, sticky3) && sticky3.visible)
		sticky3Click();
	else if (pointOver(mouse, sticky4) && sticky4.visible)
		sticky4Click();
	else if (pointOver(mouse, sticky5) && sticky5.visible)
		sticky5Click();
	else if (pointOver(mouse, sticky6) && sticky6.visible)
		sticky6Click();
});

var render = function() {
	if (bg.ready && bg.visible) {
		ctx.drawImage(bg.img, bg.x, bg.y, bg.w, bg.h);
	}
	if (title.ready && title.visible) {
		ctx.drawImage(title.img, title.x, title.y, title.w, title.h);
	}
	if (btnPlay.ready && btnPlay.visible) {
		ctx.drawImage(btnPlay.img, btnPlay.x, btnPlay.y, btnPlay.w, btnPlay.h);
	}
	if (btnDontPlay.ready && btnDontPlay.visible) {
		ctx.drawImage(btnDontPlay.img, btnDontPlay.x, btnDontPlay.y, btnDontPlay.w, btnDontPlay.h);
	}
	if (btnUnsure.ready && btnUnsure.visible) {
		ctx.drawImage(btnUnsure.img, btnUnsure.x, btnUnsure.y, btnUnsure.w, btnUnsure.h);
	}
	if (phone.ready && phone.visible) {
		ctx.drawImage(phone.img, phone.x, phone.y, phone.w, phone.h);
	}
	if (phone1.ready && phone1.visible) {
		ctx.drawImage(phone1.img, phone1.x, phone1.y, phone1.w, phone1.h)
	}
	if (phone2.ready && phone2.visible) {
		ctx.drawImage(phone2.img, phone2.x, phone2.y, phone2.w, phone2.h)
	}
	if (btnStore.ready && btnStore.visible) {
		ctx.drawImage(btnStore.img, btnStore.x, btnStore.y, btnStore.w, btnStore.h);
	}
	if (computer.ready && computer.visible) {
		ctx.drawImage(computer.img, computer.x, computer.y, computer.w, computer.h);
	}
	if (thinkbad.ready && thinkbad.visible) {
		ctx.drawImage(thinkbad.img, thinkbad.x, thinkbad.y, thinkbad.w, thinkbad.h);
	}
	if (macbookPear.ready && macbookPear.visible) {
		ctx.drawImage(macbookPear.img, macbookPear.x, macbookPear.y, macbookPear.w, macbookPear.h);
	}
	if (bbpi.ready && bbpi.visible) {
		ctx.drawImage(bbpi.img, bbpi.x, bbpi.y, bbpi.w, bbpi.h);
	}
	if (computerCrt.ready && computerCrt.visible) {
		ctx.drawImage(computerCrt.img, computerCrt.x, computerCrt.y, computerCrt.w, computerCrt.h);
	}
	if (ducky.ready && ducky.visible) {
		ctx.drawImage(ducky.img, ducky.x, ducky.y, ducky.w, ducky.h);
	}
	if (iePoster.ready && iePoster.visible) {
		ctx.drawImage(iePoster.img, iePoster.x, iePoster.y, iePoster.w, iePoster.h);
	}
	if (hipsterGlasses.ready && hipsterGlasses.visible) {
		ctx.drawImage(hipsterGlasses.img, hipsterGlasses.x, hipsterGlasses.y, hipsterGlasses.w, hipsterGlasses.h);
	}
	if (sticky1.ready && sticky1.visible) {
		ctx.drawImage(sticky1.img, sticky1.x, sticky1.y, sticky1.w, sticky1.h);
	}
	if (sticky2.ready && sticky2.visible) {
		ctx.drawImage(sticky2.img, sticky2.x, sticky2.y, sticky2.w, sticky2.h);
	}
	if (sticky3.ready && sticky3.visible) {
		ctx.drawImage(sticky3.img, sticky3.x, sticky3.y, sticky3.w, sticky3.h);
	}
	if (sticky4.ready && sticky4.visible) {
		ctx.drawImage(sticky4.img, sticky4.x, sticky4.y, sticky4.w, sticky4.h);
	}
	if (sticky5.ready && sticky5.visible) {
		ctx.drawImage(sticky5.img, sticky5.x, sticky5.y, sticky5.w, sticky5.h);
	}
	if (sticky6.ready && sticky6.visible) {
		ctx.drawImage(sticky6.img, sticky6.x, sticky6.y, sticky6.w, sticky6.h);
	}
	if (painting.ready && painting.visible) {
		ctx.drawImage(painting.img, painting.x, painting.y, painting.w, painting.h);
	}
	if (painting1.ready && painting1.visible) {
		ctx.drawImage(painting1.img, painting1.x, painting1.y, painting1.w, painting1.h);
	}
	if (monster.ready && monster.visible) {
		ctx.drawImage(monster.img, monster.x, monster.y, monster.w, monster.h);
	}
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
if (! docCookies.hasItem("cash")) {
	docCookies.setItem("cash", 10, 31536000);
	docCookies.setItem("new-computer", "owned", 31536000);
	docCookies.setItem("new", "false", 31536000); // whether a new item has been bought
	docCookies.setItem("ticketCount", 0, 31536000);
	docCookies.setItem("rating", 0, 31536000); // if this reaches 5 you lose!
	docCookies.setItem("quality", 100, 31536000); // customers complain if this is too low
}
main();

/* time-related stuff */
/* ring stuff, give up */
setInterval(function() {
	if (phone.ringing) {
		phone.ringing = false;

		phone.ready = false;
		phone.img.src = "img/phone.png";

		ringtone.pause();
		ringtone.currentTime = 0;
	} else if (Math.floor(Math.random() * 5) === 0 && phone.visible === true) {
		phone.ringing = true;

		phone.ready = false;
		phone.img.src = "img/phoneRinging.png";

		ringtone.play();
	}
}, 5172);
setInterval(function() {
	if (phone1.ringing) {
		phone1.ringing = false;

		phone1.ready = false;
		phone1.img.src = "img/phone1.png";

		ringtone1.pause();
		ringtone1.currentTime = 0;
	} else if (Math.floor(Math.random() * 6) === 0 && phone1.visible === true) {
		phone1.ringing = true;

		phone1.ready = false;
		phone1.img.src = "img/phone1Ringing.png";

		ringtone1.play();
	}
}, 7930);
setInterval(function() {
	if (phone2.ringing) {
		phone2.ringing = false;

		phone2.ready = false;
		phone2.img.src = "img/phone2.png";

		ringtone2.pause();
		ringtone2.currentTime = 0;
	} else if (Math.floor(Math.random() * 6) === 0 && phone2.visible === true) {
		phone2.ringing = true;

		phone2.ready = false;
		phone2.img.src = "img/phone2Ringing.png";

		ringtone2.play();
	}
}, 8240);
setInterval(function() {
	if (computer.ringing) {
		computer.ringing = false;

		computer.ready = false;
		computer.img.src = "img/computer.png";
	} else if (Math.floor(Math.random() * 4) === 0 && computer.visible && computer.broken === false) {
		computer.ringing = true;

		computer.ready = false;
		computer.img.src = "img/computerRinging.png";

		messagetone.play();
	}
}, 3813);
setInterval(function() {
	if (thinkbad.ringing) {
		thinkbad.ringing = false;
		
		thinkbad.ready = false;
		thinkbad.img.src = "img/thinkbad.png";
	} else if (Math.floor(Math.random() * 4) === 0 && thinkbad.visible) {
		thinkbad.ringing = true;

		thinkbad.ready = false;
		thinkbad.img.src = "img/thinkbadRinging.png";

		messagetone1.play();
	}
}, 11020);
setInterval(function() {
	if (macbookPear.ringing) {
		macbookPear.ringing = false;

		macbookPear.ready = false;
		macbookPear.img.src = "img/macbook-pear.png";
	} else if (Math.floor(Math.random() * 4) === 0 && macbookPear.visible) {
		macbookPear.ringing = true;

		macbookPear.ready = false;
		macbookPear.img.src = "img/macbook-pearRinging.png";

		messagetone2.play();
	}
}, 9280);
setInterval(function() {
	if (bbpi.ringing) {
		bbpi.ringing = false;
		
		bbpi.ready = false;
		bbpi.img.src = "img/bbpi.png";
	} else if (Math.floor(Math.random() * 4) === 0 && bbpi.visible) {
		bbpi.ringing = true;

		bbpi.ready = false;
		bbpi.img.src = "img/bbpiRinging.png";

		messagetone3.play();
	}
}, 11111);
setInterval(function() {
	if (computerCrt.ringing) {
		computerCrt.ringing = false;

		computerCrt.ready = false;
		computerCrt.img.src = "img/computerCRT.png";
	} else if (Math.floor(Math.random() * 4) === 0 && computerCrt.visible && computerCrt.broken === false) {
		computerCrt.ringing = true;

		computerCrt.ready = false;
		computerCrt.img.src = "img/computerCRTRinging.png";

		messagetone4.play();
	}
}, 10831);

/* break computer every now and then */
setInterval(function() {
	if (computer.visible && Math.floor(Math.random() * 3) === 0) {
		computer.ringing = false;
		
		computer.broken = true;
		computer.ready = false;
		computer.img.src="img/computerGoofed.png";
		docCookies.removeItem("new-computer");

		messagetone.pause();
		messagetone.currentTime = 0;
	}
}, 292839);
setInterval(function() {
	if (computerCrt.visible && Math.floor(Math.random() * 3) === 0) {
		computerCrt.ringing = false;
		
		computerCrt.broken = true;
		computerCrt.ready = false;
		computerCrt.img.src="img/computerCRTGoofed.png";
		docCookies.setItem("computer-crt", "broken", 31536000);

		messagetone4.pause();
		messagetone4.currentTime = 0;
	}
}, 328401);

setInterval(function() {
	if (Math.random() > docCookies.getItem("quality") / 100) {
		docCookies.setItem("rating", +docCookies.getItem("rating") + 1, 31536000);
		docCookies.setItem("quality", 100, 31536000);
		bootbox.alert({message: "A customer has complained regarding your incompetence. Strike " + docCookies.getItem("rating") + "/5!", closeButton: false});

		if (docCookies.getItem("rating") > 4)
			gameOver();
	}
}, 34021);

setInterval(function() {
	if (docCookies.getItem("new") === "true") {
		delivery();
		bootbox.alert({message: "ePay has delivered your recent purchase.", closeButton: false});
	}
}, 8913);
