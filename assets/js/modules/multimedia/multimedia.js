import { onScroll, progressBar, resizeFontToggle } from "./on-scroll.js";
import slideListAction, { checkButtons } from "./on-slide-img.js"

const actionInit = () => {
    checkButtons();
    $("#prev-img").click(slideListAction.prevList);
    $("#next-img").click(slideListAction.nextList);
    // on thumb click

    $(".thumb img").each(function () {
        $(this).click(function () {
            // let index = $(this).parent().index();
            // slideListAction.slideList(index);
            // checkButtons();
            // console.log($(this).parent().index())
            $(".thumb").removeClass("thumb-active")
            $(this).parent().addClass("thumb-active")
        })
    })
}


export function multimedia() {
    onScroll();
    progressBar();
    resizeFontToggle();
    actionInit();
}