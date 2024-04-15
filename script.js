var sayac = 0;
$(document).ready(function () {
    HedefleriHazirla();
});
$(document).on("keydown", function (ev) {
    if (ev.which === 32 && sayac < 100) {
        console.log(sayac++);
        $("#progress").css("width", sayac + "%");
    }
});
$(document).on("keyup", function (ev) {
    if (ev.which === 32) {
        sayac = 0;
        $("#progress").css("width", sayac + "%");
    }
});

function HedefleriHazirla() {
    var alan = $("#hedef");
    for (var i = 0; i < 7; i++) {
        var newEl = document.createElement("span");
        newEl.setAttribute("class", "hedefler");

        newEl.style.top = `${RandomUret(1, 92)}%`
        newEl.style.left = `${RandomUret(1, 95)}%`

        alan.append(newEl);
    }
}
function RandomUret(min, max) {
    return Math.floor(min + Math.random() * max);
}