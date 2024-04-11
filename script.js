var sayac = 0;
$(document).ready(function () {
    HedefleriHazirla();
    for (var i = 0; i < 40; i++) {
        var line = document.createElement("span");
        line.setAttribute("class", "barLines");
        document.querySelector(".barCont").appendChild(line);
    }
});
$(document).on("keydown", function (ev) {
    if (ev.which === 32) {
        console.log(sayac +=2);
    }
});
$(document).on("keyup", function (ev) {
    if (ev.which === 32) {
        sayac = 0;
    }
});

function HedefleriHazirla() {
    var alan = $("#hedef");
    for (var i = 0; i < 7; i++) {
        var newEl = document.createElement("span");
        newEl.setAttribute("class", "hedefler");

        newEl.style.top = `${RandomUret(1, 94)}%`
        newEl.style.left = `${RandomUret(1, 95)}%`

        alan.append(newEl);
    }
}
function RandomUret(min, max) {
    return Math.floor(min + Math.random() * max);
}