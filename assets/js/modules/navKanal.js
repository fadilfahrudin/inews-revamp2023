export const navKanal = () => {
    if ($(".navList").length > 7) {
        $('#navbar-nav').append(`<span class="ic-dropdown-kanal"></span>`)
    }

    $('#navbar-nav').on('click', '.ic-dropdown-kanal', function () {
        $('#navbar-nav').toggleClass('dropDown')
        $(this).toggleClass('dropDown')
    })
}
export const navMain = () => {
    if ($(".navList").length > 7) {
        $('#navbar-nav').append(`<span class="ic-dropdown-kanal"></span>`)
    }

    $('#navbar-nav').on('click', '.ic-dropdown-kanal', function () {
        $('#navbar-nav').toggleClass('dropDown')
        $(this).toggleClass('dropDown')
    })

    $(window).on('scroll', function () {
        let scrollY = $(this).scrollTop() || document.documentElement.scrollTop;
        if (scrollY > 195) {
            $('.nav__main').addClass('sticky');
        } else {
            $('.nav__main').removeClass('sticky');
        }
    })
}