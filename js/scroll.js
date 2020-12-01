$(document).ready(function(){
    $(window).scroll(function(){
        $(".bg-image1Blurred").css("opacity", 1 - $(window).scrollTop()/500)
    })
})