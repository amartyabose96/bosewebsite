$(document).ready(function () {
    $(".dropdown").mouseenter(function () {
        $(this).find(".dropdown-content").slideDown('slow');
    });
    $(".dropdown").mouseleave(function () {
        $(this).find(".dropdown-content").slideUp('fast');
    });


    $("#facebook").mouseenter(function () {
        $(this).attr("src", "img/facebook1.png");
    });
    $("#facebook").mouseleave(function () {
        $(this).attr("src", "img/facebook.png");
    });


    $("#google").mouseenter(function () {
        $(this).attr("src", "img/google1.png");
    });
    $("#google").mouseleave(function () {
        $(this).attr("src", "img/google.png");
    });


    $("#linkedin").mouseenter(function () {
        $(this).attr("src", "img/linkedin1.png");
    });
    $("#linkedin").mouseleave(function () {
        $(this).attr("src", "img/linkedin.png");
    });


    $("#search").mouseenter(function () {
        $(this).attr("src", "img/search1.png");
    });
    $("#search").mouseleave(function () {
        $(this).attr("src", "img/search.png");
    });


    $("#search_box").mouseenter(function () {
        $(this).attr("src", "img/search-box1.png");
    });
    $("#search_box").mouseleave(function () {
        $(this).attr("src", "img/search-box.png");
    });
});

function div_hide() {
    document.getElementById('abc').style.display = "none";
}

function div_show() {
    document.getElementById('abc').style.display = "block";
}