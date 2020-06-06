$(document).ready(function () {
    var top_val = $('.dest-image img').css('top');
    var left_val = $('.dest-image img').css('left');

    $(".destination-image").mouseenter(function () {
        //$(this).find(".popular-destination-info p").css({ "margin-top": "192px", "color": "red" });
        //$(this).find(".popular-destination-info p").css({ "margin-left": "17px", "color": "red" });
        //$(this).find(".popular-destination-info a").css("background", "red");
        //$(this).find(".popular-destination-info a").css("background", "red");
        //$(this).find(".dest-image img").css("top", "-8px");
        //$(this).find(".dest-image img").css("left", "-8px");


        $(this).find(".popular-destination-info p").animate({ "margin-top": "192px", "color": "red" }, "fast");
        $(this).find(".popular-destination-info p").animate({ "margin-left": "17px", "color": "red" }, "fast");
        $(this).find(".popular-destination-info a").animate({ "background": "red" }, "fast");
        $(this).find(".popular-destination-info a").animate({ "background": "red" }, "fast");
        $(this).find(".dest-image img").animate({ "top": "-8px" }, "fast");
        $(this).find(".dest-image img").animate({ "left": "-8px" }, "fast");
    });
    $(".destination-image").mouseleave(function () {
        //$(this).find(".popular-destination-info p").css({ "margin-top": "200px", "color": "white" });
        //$(this).find(".popular-destination-info p").css({ "margin-left": "25px", "color": "white" });
        //$(this).find(".popular-destination-info a").css("background", "#1EC6B6");
        //$(this).find(".popular-destination-info a").css("background", "#1EC6B6");
        //$(this).find(".dest-image img").css("top", top_val);
        //$(this).find(".dest-image img").css("left", left_val);


        $(this).find(".popular-destination-info p").animate({ "margin-top": "200px", "color": "white" }, "normal");
        $(this).find(".popular-destination-info p").animate({ "margin-left": "25px", "color": "white" }, "normal");
        $(this).find(".popular-destination-info a").animate({ "background": "#1EC6B6" }, "normal");
        $(this).find(".popular-destination-info a").animate({ "background": "#1EC6B6" }, "normal");
        $(this).find(".dest-image img").animate({ "top": top_val }, "normal");
        $(this).find(".dest-image img").animate({ "left": left_val }, "normal");
    });
});