$(document).ready(function () {
    $("#dot1").click(function () {
        $("#carPictureSlideID").attr("src", "/images/ss4-2x.png");
        $(this).css("background", "#47a0ee");
        $("#dot2").css("background", "#5f8de7");
        $("#dot3").css("background", "##5f8de7");

    });
    $("#dot2").click(function () {
        $("#carPictureSlideID").attr("src", "/images/ss1-2x.png");
        $(this).css("background", "#47a0ee");
        $("#dot1").css("background", "#5f8de7");
        $("#dot3").css("background", "#5f8de7");

    });
    $("#dot3").click(function () {
        $("#carPictureSlideID").attr("src", "/images/ss3-2x.png");
        $(this).css("background", "#47a0ee");
        $("#dot1").css("background", "#5f8de7");
        $("#dot2").css("background", "#5f8de7");
    });

});

document.onreadystatechange = function () {
    if (document.readyState === "complete") {
        $("#panel_left").addClass("panel_left");
        $("#panel_right").addClass("panel_right");
        $("#loader").addClass("loaded-circle");
        $("#loader-img").addClass("loaded-img");
        $("#preloader").addClass("loaded-img");
    }
}