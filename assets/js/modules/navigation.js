const dropDownNavigation = () => {
    const listWidth = $('.navList').outerWidth(true)
    const containerWidth = $('#navbar-nav').width()
    const totalListWidth = listWidth * $('.navList').length
    if (totalListWidth >= containerWidth) {
        $('#navbar-nav').append(`<span class="ic-dropdown-kanal"></span>`)
    }

    $('#navbar-nav').on('click', '.ic-dropdown-kanal', function () {
        $('#navbar-nav').toggleClass('dropDown')
        $(this).toggleClass('dropDown')
    })
}

const stickyNavigationMainPage = () => {
    let scrollY = $(this).scrollTop() || document.documentElement.scrollTop;
    if (scrollY > 195) {
        $('.nav__main').addClass('sticky');
    } else {
        $('.nav__main').removeClass('sticky');
    }
}

window.addEventListener('resize', dropDownNavigation);

export const Navigation = {
    dropDown: () => dropDownNavigation(),
    stickyNavigationMainPage: () => {
        $(window).on('scroll', () => stickyNavigationMainPage());
    }
}