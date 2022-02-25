// Sticky Header
$(window).scroll(function () {
    console.log($(window).scrollTop());
    if ($(window).scrollTop() >= 50) {
        $('.main_h').addClass('sticky');
    } else {
        $('.main_h').removeClass('sticky');
    }
});

// Mobile Navigation
$('.mobile-toggle').click(function () {
    if ($('.main_h').hasClass('open-nav')) {
        $('.main_h').removeClass('open-nav');
    } else {
        $('.main_h').addClass('open-nav');
    }
});

$('.main_h li a').click(function () {
    if ($('.main_h').hasClass('open-nav')) {
        $('.navigation').removeClass('open-nav');
        $('.main_h').removeClass('open-nav');
    }
});
$(document).ready(function () {
    $('#dropDown').click(function () {
        $('.drop-down').toggleClass('drop-down--active');
    });
});

function show(text) {
    new Noty({
        type: 'error',
        theme: 'metroui',
        progressBar: true, timeout: 2000,
        text: text
    }).show();
}
window.onerror = new Function("return true");
function sendMail() {
    var nombre = document.getElementById("nombre");
    var subject = document.getElementById("subject");
    var comment = document.getElementById("comment");
    if (nombre.value == "") {
        show('Enter your name first')
    } else {

        if (subject.value == "") {
            show('Enter the email subject')
        } else {
            if (comment.value == "") {
                show('Enter Email Message')
            } else {
                var link = "asepsis.deep@gmail.com" +
                    "?&subject=" + escape(document.getElementById('subject').value) +
                    "&body=" + "Me llamo " + escape(document.getElementById('nombre').value) + ", " +
                    escape(document.getElementById('comment').value);

                window.location.href = "mailto:" + link;
            }
        }


    }
}