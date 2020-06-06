$(document).ready(function () {
    $(".place-picture").mouseenter(function () {
        $(this).find(".place-info a h3").css({ "color": "red" });
    });
    $(".place-picture").mouseleave(function () {
        $(this).find(".place-info a h3").css({ "color": "black" });
    });
});