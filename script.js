if ( $(window).width() > 1024) {
    // Click to scroll
    $('a').click(function(){
        $('html, body').animate({
            scrollTop: $( $(this).attr('href') ).offset().top
        }, 500);
        return false;
    });
    // Fades Nav Bar into view on scroll
    $(window).scroll(function() {
        if ($(this).scrollTop()> 500) {
            $('.scrolltop').fadeIn();
        } else {
            $('.scrolltop').fadeOut();
        }
    });
    // Fades About section into view on scroll
    $(window).scroll(function() {
        if ($(this).scrollTop()> 1000) {
            $('.scrollnext').fadeIn();
        } else {
            $('.scrollnext').fadeOut();
        }
    });
    // Fades background images out of view
    $(window).scroll(function() {
        if ($(this).scrollTop()> 1900) {
            $('.scrollBG').fadeOut();
        } else {
            $('.scrollBG').fadeIn();
        }
    });
    // Fades social media icons out of, then back into view
    $(window).scroll(function() {
        if ($(this).scrollTop()> 1200 && $(this).scrollTop()< 2800) {
            $('.scrollSM').fadeOut();
        } else {
            $('.scrollSM').fadeIn();
        }
    });
} else {
    // Click to scroll
    $('a').click(function(){
        $('html, body').animate({
            scrollTop: $( $(this).attr('href') ).offset().top
        }, 500);
        return false;
    });
    // Fades Nav Bar into view on scroll
    $(window).scroll(function() {
        if ($(this).scrollTop()> 500) {
            $('.scrolltop').fadeIn();
        } else {
            $('.scrolltop').fadeOut();
        }
    });
    // Fades background images out of view
    $(window).scroll(function() {
        if ($(this).scrollTop()> 1900) {
            $('.scrollBG').fadeOut();
        } else {
            $('.scrollBG').fadeIn();
        }
    });
}
