$(document).ready(function () {

    $(".nav-btn").each(function (idx) {
        $(this).click(function () {
            $('html,body').animate({
                    scrollTop: $("section").eq(idx).offset().top
                },
                'slow');
        });

    });

    // 이메일 복사 버튼
    function copyToClipboard(val) {
        var t = document.createElement("textarea");
        document.body.appendChild(t);
        t.value = val;
        t.select();
        document.execCommand('copy');
        document.body.removeChild(t);
    }

    $('#email-copy-btn').click(function () {
        copyToClipboard('seop1284@gmail.com');
        $("#myModal").css("display", "block");

    });


    // When the user clicks on <span> (x), close the modal
    $('.close').click(function () {
        $("#myModal").css("display", "none");
    });

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == document.getElementById("myModal")) {
            document.getElementById("myModal").style.display = "none";
        }
    }

});