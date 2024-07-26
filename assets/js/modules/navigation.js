const dropDownNavigation = () => {
    const listWidth = $('.navList').outerWidth(true)
    const containerWidth = $('#navbar-nav').width()
    const totalListWidth = listWidth * $('.navList').length
    if (totalListWidth >= containerWidth) {
        $('#navbar-nav').append(`<li class="ic-dropdown-kanal"></li>`)
    }

    $('#navbar-nav').on('click', '.ic-dropdown-kanal', function () {
        $('#navbar-nav').toggleClass('dropDown')
        $(this).toggleClass('dropDown')
    })
}

window.addEventListener('resize', dropDownNavigation);

export const Navigation = {
    dropDown: () => dropDownNavigation(),
}