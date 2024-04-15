var sayac = 0;
var interv;
var ivme = 0.5;
var skor = 0;
$(document).ready(function () {
    HedefleriHazirla(7);
    $("#skor").text(skor.toString());
    ZamanlayiciBaslat();
});
$(document).on("keydown", function (ev) {
    if (interv) {
        OyunSifirla();
    }
    if (ev.which === 32 && sayac < 100) {
        sayac++;
        $("#progress").css("width", sayac + "%");
    }
});
$(document).on("keyup", function (ev) {
    if (ev.which === 32) {
        TopuAt((sayac + 10) * 0.5);
        sayac = 0;
        $("#progress").css("width", sayac + "%");
    }
});
function TopuAt(hiz) {
    var yatayHiz = hiz;
    var dikeyHiz = hiz;
    interv = setInterval(function () {
        var topKoord = $("#oyuncu")[0].getBoundingClientRect();

        var alanYukseklik = $(".oyunCont.bord").height();
        var alanGenislik = $(".oyunCont.bord").width();

        var topEskiSol = topKoord.x;
        var topEskiAlt = alanYukseklik - topKoord.bottom;

        var topYeniSol = topEskiSol + yatayHiz;
        var topYeniAlt = topEskiAlt + dikeyHiz;
        $("#oyuncu").css("left", topYeniSol + "px");
        $("#oyuncu").css("bottom", topYeniAlt + "px");
        HedeflerCakisti(topKoord);
        if (topKoord.right > alanGenislik || topKoord.bottom - 5 > alanYukseklik + 5) {
            OyunSifirla();
            HedeflerCakisti();
        }
        //yer çekimiyle dikey hýz her birim zamanda azalýr
        dikeyHiz -= ivme;
    }, 20);
}
function HedeflerCakisti(topkoord) {
    var hedefler = $(".hedefler");
    hedefler.each((index, elm) => {
        var elmKoord = elm.getBoundingClientRect();
        var dikeyKosul = topkoord.top < elmKoord.bottom && topkoord.bottom > elmKoord.top;
        var yatayKosul = topkoord.left < elmKoord.right && topkoord.right > elmKoord.left;
        if (dikeyKosul && yatayKosul) {
            elm.remove();
            HedefleriHazirla(1);
            skor++;
            $("#skor").text(skor.toString());
        }
    });
}
function HedefleriHazirla(hedefSayisi) {
    var alan = $("#hedef");
    for (var i = 0; i < hedefSayisi; i++) {
        var newEl = document.createElement("span");
        newEl.setAttribute("class", "hedefler");

        newEl.style.top = `${RandomUret(1, 92)}%`
        newEl.style.left = `${RandomUret(1, 95)}%`

        alan.append(newEl);
    }
}
function OyunSifirla() {
    clearInterval(interv);
    $("#oyuncu").css("bottom", "0px");
    $("#oyuncu").css("left", "0px");
}
function RandomUret(min, max) {
    return Math.floor(min + Math.random() * max);
}
function ZamanlayiciBaslat() {
    var saniye = 59;
    var timerInter = setInterval(() => {
        if (saniye == 0) {
            clearInterval(timerInter);
            alert("Oyun Bitti SKOR : " + skor);
        }
        $("#timer").text("00:" + saniye);
        saniye--;
    }, 1000);
}