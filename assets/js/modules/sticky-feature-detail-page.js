export const sticky = () => {
    $(window).on('scroll', function () {
        let scrollY = $(this).scrollTop() || document.documentElement.scrollTop;
        if (scrollY > $(".navigationKanal").offset().top) {
            $('.stickyFeature').css('transform', 'translateY(-10px)');
        } else {
            $('.stickyFeature').css('transform', 'translateY(-270px)');
        }
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

    $('.resizeFont').on('click', () => {
        $('.resizeFontToggle').toggleClass('active')
    })

    let dragging = false
    let dragElement = $('#toggle');
    let offsetX;
    let newX

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
                    $('.bodyArticle p').css('font-size', '20px')
                } else if (newX < 25) {
                    dragElement.css({ transform: 'translateX(-55px)' });
                    $('.bodyArticle p').css('font-size', '16px')
                } else if (newX > 26 && newX < 50 || newX > 50 && newX < 74) {
                    dragElement.css({ transform: 'translateX(0)' });
                    $('.bodyArticle p').css('font-size', '18px')
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
        $('.bodyArticle p').css('font-size', '16px')
    })
    $('#largeFont').on('click', () => {
        $('#toggle').css('transform', 'translateX(55px)')
        $('.bodyArticle p').css('font-size', '20px')
    })
}

export const progressBar = () => {
    $(window).on('scroll', function () {
        let scrollY = $(this).scrollTop() || document.documentElement.scrollTop;
        let scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        $('#progressBar').css('transform', `scaleX(${scrollY / scrollHeight})`);
    })
}

export const counterLike = () => {
    $("#btnLike").on("click", function () {
        $("#btnLike").toggleClass("active");
        let count = parseInt($("#likeCount").text());
        if ($("#btnLike").hasClass("active")) {
            $("#likeCount").text(count + 1);
        } else {
            $("#likeCount").text(count - 1);
        }
    })
}

export const copyLink = () => {
    const url = window.location.href;
    $(".ic-link-share").on('click', function () {
        $("#copied").addClass("active");
        navigator.clipboard.writeText(url)
        .then(() => {
            setTimeout(() => {
                $("#copied").removeClass("active");
            }, 3000)
        })
        .catch((error) => {
            console.error(error);
        });
        
    })
    $(".ic-link-share-2").on('click', function () {
        $("#copied-2").addClass("active");
        navigator.clipboard.writeText(url)
        .then(() => {
            setTimeout(() => {
                $("#copied-2").removeClass("active");
            }, 3000)
        })
        .catch((error) => {
            console.error(error);
        });
        
    })
}