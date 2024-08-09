let startX, currentX, isDragging = false;
let slideSize = $('.channel').outerWidth() + 16;
let index
export const schaduleSlider = () => {
    let isDown = false;
    let startX;
    let scrollLeft;

    $('#scheduleWrapper').mousedown(function (e) {
        isDown = true;
        startX = e.pageX - $(this).offset().left;
        scrollLeft = $(this).scrollLeft();
    });

    $('#scheduleWrapper').mouseleave(function () {
        isDown = false;
    });

    $('#scheduleWrapper').mouseup(function () {
        isDown = false;
    });

    $('#scheduleWrapper').mousemove(function (e) {

        if (!isDown) return;
        e.preventDefault();
        let x = e.pageX - $(this).offset().left;
        let walk = (x - startX) * 3; // Scroll-fast multiplier
        $(this).scrollLeft(scrollLeft - walk);
    });
}

export const widgetNewsTV = () => {
    if ($('.video-area').hasClass('hidden')) {
        $('.widgetNewsTV__news24Jam--container').addClass('hover')
    }
}



function isTouchDevice() {
    return ('ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0);
}
function move(i, transition = true) {

    slideSize = $('.channel').outerWidth() + 16; // 16 is Gap
    if (transition) {
        $('#channelList').css('transition', 'transform 0.3s ease-in-out');
    } else {
        $('#channelList').css('transition', 'none');
    }
    $('#channelList').css('transform', `translateX(-${slideSize * i}px)`);
}
function handleGesture(e) {
    if (currentX - startX > slideSize / 2) {
        move(index - 1,);
        setTimeout(() => {
            if (index <= 1) {
                move($('.channel').length - 5, false );   
            }
        },300)
    } else if (startX - currentX > slideSize / 2) {
        move(index + 1);
        setTimeout(() => {
            if (index >= $('.channel').length - 6) {
                move(5, false);   
            }
        },500)
    } else {
        move(index);
    }
}

function initChannel() {
    $('#channelList').prepend($('.channel').eq($('.channel').length - 1).clone());
    $('#channelList').prepend($('.channel').eq($('.channel').length - 2).clone());
    $('#channelList').prepend($('.channel').eq($('.channel').length - 3).clone());
    $('#channelList').prepend($('.channel').eq($('.channel').length - 4).clone());
    $('#channelList').prepend($('.channel').eq($('.channel').length - 5).clone());
    $('#channelList').append($('.channel').eq(0).clone());
    $('#channelList').append($('.channel').eq(1).clone());
    $('#channelList').append($('.channel').eq(2).clone());
    $('#channelList').append($('.channel').eq(3).clone());
    $('#channelList').append($('.channel').eq(4).clone());
    setTimeout(() => {
        move(5, false);
    }, 100)
}

export const channelSlider = () => {
    initChannel();
    $('.channel').each((i, el) => {
        let offsetX, initialTranslateX, newX;
        if (isTouchDevice()) {
            // on touch
            $(el).on('touchstart', (e) => {
                e.preventDefault();
                console.log('touch')
                startX = e.touches[0].pageX;
                isDragging = true;
                const transformMatrix = $('#channelList').css('transform').replace(/[^0-9\-.,]/g, '').split(',');
                initialTranslateX = transformMatrix[4] ? parseFloat(transformMatrix[4]) : 0;
                offsetX = e.touches[0].clientX - initialTranslateX;
            })

            $(el).on('touchmove', (e) => {
                if (!isDragging) return;
                newX = e.touches[0].clientX - offsetX;
                currentX = e.touches[0].pageX;

                if ($('.slider__3d').length > 0) {
                    slider3dShow(i)
                }

                $('#channelList').css('transition', `transform 0s ease-in-out`)
                $('#channelList').css('transform', `translateX(${newX}px)`)
            })

            $(el).on('touchend', (e) => {
                if (!isDragging) return;
                isDragging = false;
                handleGesture();
            })
        } else {
            // on mouse
            $(el).mousedown((e) => {
                e.preventDefault();
                startX = e.pageX;
                isDragging = true;
                const transformMatrix = $('#channelList').css('transform').replace(/[^0-9\-.,]/g, '').split(',');
                initialTranslateX = transformMatrix[4] ? parseFloat(transformMatrix[4]) : 0;
                offsetX = startX - initialTranslateX;
                $(el).css("pointer-events", "fill");
                $(el).css("cursor", "grabbing");
                index = i
            })

            $(el).mousemove((e) => {
                if (!isDragging) return;
                $(el).css("pointer-events", "fill");

                currentX = e.pageX;
                newX = e.clientX - offsetX;

                $('#channelList').css('transition', 'none');
                $('#channelList').css('transform', `translateX(${newX}px)`);
            })

            $(el).mouseup((e) => {
                if (!isDragging) return;
                isDragging = false;
                $(el).css("cursor", "grab");
                handleGesture();
            })
        }
    })
}