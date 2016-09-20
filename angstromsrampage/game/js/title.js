if(!docCookies.hasItem("win")) {
    var narration = new Audio("snd/narration.ogg");
    narration.play();

    setTimeout(function() {
        window.location.href = "game.html";
    }, 40000);
}
else {
    var narration = new Audio("snd/endnarration.ogg");
    narration.play();

    setTimeout(function() {
        docCookies.removeItem("level");
        docCookies.removeItem("strikes");
        docCookies.removeItem("win");
        window.location.reload();
    }, 42000);
}
