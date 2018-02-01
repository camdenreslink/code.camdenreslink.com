$(document).ready(function() {
    function getNavHeight() {
        return $('#secondary-nav').children().first().outerHeight();
    }
    
    $('.hamburger-icon').on('click', function(e) {
        var isMenuExpanded = $(this).hasClass("hamburger-icon-open");
        if (isMenuExpanded) {
            $(this).removeClass("hamburger-icon-open");
            $('#secondary-nav').animate({
                height: "0",
            }, 400);
        } else {
            $(this).addClass("hamburger-icon-open");
            $('#secondary-nav').animate({
                height: getNavHeight() + "px",
            }, 400);
        }
    });

    // Make sure menu is visible when not in mobile window size.
    function nonMobileDisplayNav() {
        // hamburger nav is only displayed at mobile media query size
        // bit of a hack
        var isNonMobile = $(".hamburger-icon").css("display") === "none"
        if (isNonMobile) {
            $('#secondary-nav').css({"height": getNavHeight() + "px"});
        } else {
            var isMenuExpanded = $(".hamburger-icon").hasClass("hamburger-icon-open");
            if (isMenuExpanded) {
                $('#secondary-nav').css({"height": getNavHeight() + "px"});
            } else {
                $('#secondary-nav').css({"height": "0"});
            }
        }
    }

    // run test on initial page load
    nonMobileDisplayNav();
    
    // run test on resize of the window
    $(window).resize(nonMobileDisplayNav);
});