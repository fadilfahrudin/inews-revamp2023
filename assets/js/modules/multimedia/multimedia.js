import { onScroll, progressBar, resizeFontToggle } from "./on-scroll.js";
import slideListAction from "./on-slideList-img.js"
import fullscreenAction, { onFullscreen } from "./on-fullscreen.js";

const totalImage = $(".imgWrapper").length

const initImage = () => {
    if (totalImage <= 1) {
        $(".listThumbImg").remove()
        $(".listImage").addClass("adjustHeight")
        $("#showIndex").remove()
        $(".fullscreen-img-wrapper button").remove()
    } else {
        $(".listThumbImg").css('display', 'flex')
    }
}

const actionInit = () => {
    $("#prev-img").click(slideListAction.prevList);
    $("#next-img").click(slideListAction.nextList);

    $("#next-fullscreen-btn").click(fullscreenAction.next)
    $("#prev-fullscreen-btn").click(fullscreenAction.prev)


    $(".thumb img").each(function () {
        $(this).click(function () {
            $(".thumb").removeClass("thumb-active")
            $(this).parent().addClass("thumb-active")
            slideListAction.onClick($(this).parent().index())
        })
    })
}

export function multimedia() {
    initImage()
    onScroll();
    progressBar();
    resizeFontToggle();
    actionInit();
    onFullscreen();
}