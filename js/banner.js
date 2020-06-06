$(document).ready(function () {
    $("#input-field1").mouseenter(function () {
        $(this).find(".list").slideDown('slow');
    });
    $("#input-field1").mouseleave(function () {
        $(this).find(".list").slideUp('normal');
    });

    showDivs(slideIndex);
    $("#date-chooser").mouseenter(function () {
        $(this).attr("type", "date");
    });
    $("#date-chooser").mouseleave(function () {
        $(this).attr("type", "none");
    });

});
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("banner-images");
    if (n > x.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = x.length }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex - 1].style.display = "block";
}