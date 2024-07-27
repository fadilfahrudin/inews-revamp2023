import slideListAction from "./on-slideList-img.js";
const imgArea = $("#content-area")
let imgWidth, index
let isTransitioning = false;

function enterFullscreen(element) {
    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.mozRequestFullScreen) { // Firefox
        element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) { // Chrome, Safari and Opera
        element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) { // IE/Edge
        element.msRequestFullscreen();
    }
}

function exitFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.mozCancelFullScreen) { // Firefox
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) { // Chrome, Safari and Opera
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { // IE/Edge
        document.msExitFullscreen();
    }
}

function checkButtons() {
    let imgWidthWrapper = imgArea.outerWidth()
    let scrollLeft = imgArea.scrollLeft();
    let maxScrollLeft = imgArea[0].scrollWidth - imgWidthWrapper;
    if (scrollLeft <= 0) {
        $('#prev-fullscreen-btn').prop("disabled", true);
    } else {
        $('#prev-fullscreen-btn').prop("disabled", false);
    }

    if (scrollLeft >= maxScrollLeft) {
        $('#next-fullscreen-btn').prop("disabled", true);
    } else {
        $('#next-fullscreen-btn').prop("disabled", false);
    }
}

const fullscreenActionObject = {
    next: () => {
        if (isTransitioning) return;
        isTransitioning = true
        index = slideListAction.getIndex() + 1
        $('#content-area').animate({ scrollLeft: "+=" + imgWidth }, 500, () => {
            checkButtons();
            slideListAction.setIndex(index)
            isTransitioning = false
        });
    },
    prev: () => {
        if (isTransitioning) return;
        isTransitioning = true
        index = slideListAction.getIndex() - 1
        $('#content-area').animate({ scrollLeft: "-=" + imgWidth }, 500, () => {
            checkButtons();
            slideListAction.setIndex(index)
            isTransitioning = false
        });
    }
}

export const onFullscreen = () => {
    $('#fullscreen-btn').on('click', function () {
        const content = $('.listImage').html();
        $('#fullscreen-container').css('display', 'flex');
        $('#content-area').html(content);

        imgWidth = $('#content-area .imgWrapper').width();
        $("#content-area").animate({ scrollLeft: `${slideListAction.getIndex() * imgWidth}` }, 100, () => {
            checkButtons();
        });
        enterFullscreen(document.getElementById('fullscreen-container'));
    });

    $('#exit-fullscreen-btn').on('click', function () {
        $(".fullscreen-container").css('display', 'none');
        $('#content-area').html("");
        exitFullscreen();
    });

    $(document).on('keydown', function (e) {
        if (e.key === 'Escape') {
            exitFullscreen();
        }
    });

    document.addEventListener('fullscreenchange', function () {
        if (!document.fullscreenElement) {
            $('#content-area').html("");
            $('#fullscreen-container').css('display', 'none');
            imgWidth = $('.listImage .imgWrapper').width();
            $(".listImage").animate({ scrollLeft: `${slideListAction.getIndex() * imgWidth}` }, 100, () => {
                setTimeout(() => {
                    $(".thumb").each(function (i, el) {
                        if (i == slideListAction.getIndex()) {
                            $(".thumb").removeClass("thumb-active")
                            $(el).addClass("thumb-active")
                            slideListAction.setPosition(slideListAction.getIndex())
                        }
                    })
                }, 100)
            });
        }
    });
}

const fullscreenAction = Object.freeze(fullscreenActionObject)
export default fullscreenAction