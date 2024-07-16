export const backToTop = () => {
    $(window).on('scroll', function () {
        let scrollY = $(this).scrollTop() || document.documentElement.scrollTop;
        if (scrollY > 400) {
            $("#backToTop").css('transform', 'translateY(0)');
            $("#backToTop").css('opacity', '1');
        } else {
            $("#backToTop").css('transform', 'translateY(150px)');
            $("#backToTop").css('opacity', '0');
        }
    })

    $("#backToTop").on('click', function () {
        $("html, body").animate({ scrollTop: 0 }, 1000);
    });

}