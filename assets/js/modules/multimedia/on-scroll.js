export const onScroll = () => {
    $(window).on('scroll', function () {
        let scrollY = $(this).scrollTop() || document.documentElement.scrollTop;
        if (scrollY > $(".navigationKanal").height()) {
            $('.stickyFeature').css('transform', 'translateY(0)');
            $('.stickyTools').css('transform', 'translateY(-46px)');
        } else {
            $('.stickyFeature').css('transform', 'translateY(-270px)');
            $('.stickyTools').css('transform', 'translateY(46px)');
        }
    })
}

export const progressBar = () => {
    $(window).on('scroll', function () {
        let scrollY = $(this).scrollTop() || document.documentElement.scrollTop;
        let scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        $('#progressBar').css('transform', `scaleX(${scrollY / scrollHeight})`);
    })
}

export const resizeFontToggle = () => {
    $(window).on('click', function (event) {
        switch (event.target) {
            case $(".resizeFont")[0]:
                return;
            case $(".resizeFontToggle")[0]:
                return;
            case $('#toggle')[0]:
                return;
            case $('.toggleResize')[0]:
                return;
            case $('#largeFont')[0]:
                return;
            case $('#smallFont')[0]:
                return;
            default:
                $('.resizeFontToggle').removeClass('active')
                break;
        }
    });

    $(window).on('touchstart', function (event) {
        switch (event.target) {
            case $(".resizeFont")[0]:
                return;
            case $(".resizeFontToggle")[0]:
                return;
            case $('#toggle')[0]:
                return;
            case $('.toggleResize')[0]:
                return;
            case $('#largeFont')[0]:
                return;
            case $('#smallFont')[0]:
                return;
            default:
                $('.resizeFontToggle').removeClass('active')
                break;
        }
    })

    $('.resizeFont').on('click', () => {
        $('.resizeFontToggle').toggleClass('active')
    })

    let dragging = false
    let dragElement = $('#toggle');
    let offsetX;
    let newX

    $(dragElement).on('touchstart', function (e) {
        dragging = true;
        offsetX = e.originalEvent.touches[0].clientX - dragElement.position().left;
    })
    $(dragElement).on('touchmove', function (e) {
        if (dragging) {
            newX = e.originalEvent.touches[0].clientX - offsetX;
            if (newX < 100 && newX > 0) {
                if (newX > 75) {
                    dragElement.css({ transform: 'translateX(55px)' });
                    $('.body p').css('font-size', '20px')
                } else if (newX < 25) {
                    dragElement.css({ transform: 'translateX(-55px)' });
                    $('.body p').css('font-size', '16px')
                } else if (newX > 26 && newX < 50 || newX > 50 && newX < 74) {
                    dragElement.css({ transform: 'translateX(0)' });
                    $('.body p').css('font-size', '18px')
                }
            }
        }
    })

    dragElement.mousedown(function (e) {
        offsetX = e.clientX - dragElement.position().left;
        dragging = true;
        $(this).css({ cursor: 'grabbing' });
    });

    $(document).mousemove(function (e) {
        if (dragging) {
            newX = e.clientX - offsetX;
            if (newX < 100 && newX > 0) {
                if (newX > 75) {
                    dragElement.css({ transform: 'translateX(55px)' });
                    $('.body p').css('font-size', '20px')
                } else if (newX < 25) {
                    dragElement.css({ transform: 'translateX(-55px)' });
                    $('.body p').css('font-size', '16px')
                } else if (newX > 26 && newX < 50 || newX > 50 && newX < 74) {
                    dragElement.css({ transform: 'translateX(0)' });
                    $('.body p').css('font-size', '18px')
                }
            }

        }
    });

    $(document).mouseup(function () {
        dragging = false;
        $("#toggle").css({ cursor: 'grab' });

    });

    $('#smallFont').on('click', () => {
        $('#toggle').css('transform', 'translateX(-55px)')
        $('.body p').css('font-size', '16px')
    })
    $('#largeFont').on('click', () => {
        $('#toggle').css('transform', 'translateX(55px)')
        $('.body p').css('font-size', '20px')
    })
}