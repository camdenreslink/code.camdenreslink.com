$(document).ready(function() {
    function blink() {
        $("#logo-cursor").stop(true, false);
        $("#logo-cursor").delay(100).fadeTo(50, 0).delay(650).fadeTo(50, 1.0);
    }
    var intervalId;

    $('#logo').on('mouseenter', function () {
        intervalId = setInterval(blink, 1400);
    });

    $('#logo').on('mouseleave', function () {
        clearInterval(intervalId);
    });
});