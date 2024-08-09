const dropDownNavigation = () => {
    const containerWidth = $('#navbar-nav').width()
    let totalListWidth = 0
    $('.navList').each(function (i, el) {
        totalListWidth += $(el).outerWidth(true)
    })
    if (totalListWidth >= containerWidth) {
        $('.ic-dropdown-kanal').removeClass('hidden')
    }

    $('#dropdown').on('click', '.ic-dropdown-kanal', function () {
        $('#navbar-nav').toggleClass('dropDown')
        $(this).toggleClass('dropDown')
    })
}

window.addEventListener('resize', dropDownNavigation);

export const Navigation = {
    dropDown: () => dropDownNavigation(),
}