$('#fullscreen').on('click', function () {
    const imgSrc = $(this).attr('src');
    $('#fullscreen-image').attr('src', imgSrc);
    $('#fullscreen-container').css('display', 'flex');
    enterFullscreen(document.getElementById('fullscreen-container'));
});

$('#fullscreen').on('click', function () {
    $(this).css('display', 'none');
    exitFullscreen();
});

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


const listThumb = $(".listThumb")
const thumbWidth = listThumb.outerWidth()
let totalListImgVisible = 4
let scrollAmount = thumbWidth / totalListImgVisible
let indexThumb
let isTransitioning = false

export function checkButtons() {
    let scrollLeft = listThumb.scrollLeft();
    let maxScrollLeft = listThumb[0].scrollWidth - thumbWidth;
    console.log(scrollLeft, maxScrollLeft)

    if (scrollLeft <= 0) {
        $('#prev-img').prop("disabled", true);
    } else {
        $('#prev-img').prop("disabled", false);
    }

    if (scrollLeft >= maxScrollLeft) {
        $('#next-img').prop("disabled", true);
    } else {
        $('#next-img').prop("disabled", false);
    }
}

const sliderObject = {
    nextList: () => {
        $(".listThumb").animate({ scrollLeft: "+=" + scrollAmount }, 500, () => {
            checkButtons();
        });
    },
    prevList: () => {
        $(".listThumb").animate({ scrollLeft: "-=" + scrollAmount }, 500, () => {
            checkButtons();
        });
    },
    onClick: (index) => {
        indexThumb = index
        $(".listThumb").animate({ scrollLeft: `+=${indexThumb * scrollAmount}` }, 500, () => {
            checkButtons();
        });
    },
    setIndexThumb: (index) => {
        indexThumb = index
    }
}

const slideListAction = Object.freeze(sliderObject)
export default slideListAction