$(document).ready(function () {
    for (var i = 0; i < 40; i++) {
        var line = document.createElement("span");
        line.setAttribute("class", "barLines");
        document.querySelector(".barCont").appendChild(line);
    }
});
$(document).on("keydown", function (ev) {
    if (ev.which === 32) {
        var val = $("#bar").val();
        $("#bar").val(parseInt(val)+1);
    }
});