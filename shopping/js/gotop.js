$(document).ready(function () {

    $('.gotop-btn').click(function (event) {
        event.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 1500);
    });

});