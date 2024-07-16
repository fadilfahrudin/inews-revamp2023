import action from "./move.js"
const slide = $(".slide")

const setClassSlide = () => {
    $(".slide").eq(3).addClass("prevLeftSecond")
    $(".slide").eq(4).addClass("prev")
    $(".slide").eq(5).addClass("selected")
    $(".slide").eq(6).addClass("next")
    $(".slide").eq(7).addClass("nextRightSecond")

    $('.slide').each((i, el) => {
        if (!$(el).hasClass("nextRightSecond") && !$(el).hasClass("prevLeftSecond") && !$(el).hasClass("prev") && !$(el).hasClass("next") && !$(el).hasClass("hideLeft") && !$(el).hasClass("hideRight") && !$(el).hasClass("selected")) {
            $(el).addClass("hideRight")
        }
    })
}
const cloneSlide = () => {
    $('#carousel3d').append($(slide).eq(0).clone().addClass("hideRight"));
    $('#carousel3d').append($(slide).eq(1).clone().addClass("hideRight"));
    $('#carousel3d').append($(slide).eq(2).clone().addClass("hideRight"));
    $('#carousel3d').prepend($(slide).eq(slide.length - 1).clone().addClass("hideLeft"));
    $('#carousel3d').prepend($(slide).eq(slide.length - 2).clone().addClass("hideLeft"));
    $('#carousel3d').prepend($(slide).eq(slide.length - 3).clone().addClass("hideLeft"));
}

export default function main3dCarousel() {
    cloneSlide()
    setClassSlide()

    $('#carousel3d .slide img').click((e) => {
        setTimeout(() =>{
            action.objectClick(e.currentTarget)
        },100)
    });
    $('#prev').click(() => action.prev());
    $('#next').click(() => action.next());

    $('#carousel3d .slide').on("click", (e) => {
        if ($(e.currentTarget).hasClass("selected")) {
            window.location.href = $(e.currentTarget).attr('data-link')
        }
    })

    if ($("#widget3dCarousel").attr('data-auto-play') === 'true') {
        setInterval(() => action.next(), 5000)
    }
}
