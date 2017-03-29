function scrollToTop() {
    $('html, body').animate({
        scrollTop: 0
    }, 600);
}

function scrollToProjects() {
    // window.scrollTo(1000,1000);
    $('html, body').animate({
        scrollTop: $('#projects-section').offset().top + 'px',
    }, 600);
}

function scrollToExperience() {
    // window.scrollTo(1000,1000);
    $('html, body').animate({
        scrollTop: $('#experience-section').offset().top + 'px',
    }, 600);
}

function scrollToSkills() {
    // window.scrollTo(1000,1000);
    $('html, body').animate({
        scrollTop: $('#skills-section').offset().top + 'px',
    }, 600);
}

$(window).scroll(function() {
    if ($(window).scrollTop() > 100) {
        $('#up-arrow').css('display', 'block');
    }
    else {
        $('#up-arrow').css('display', 'none');
    }
});