$(document).ready(function () {

    $(".nav-btn").each(function (idx) {
        $(this).click(function () {
            $('html,body').animate({
                scrollTop: $("section").eq(idx).offset().top},
                'slow');
        });

    });

});