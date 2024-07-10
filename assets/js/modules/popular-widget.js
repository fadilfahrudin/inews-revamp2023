const cardWidth = $('.cardPopular').outerWidth(true)
let index = window.innerWidth > 1365 ? 3 : 2
let currentIndex = index

export const popularWidget = () => {
    $('#btnPrev-popular').on('click', slide.prev)
    $('#btnNext-popular').on('click', slide.next)
}
const slide = {
    next: () => {
        currentIndex += 1
        $('.widgetPopular__body__wrappList').animate({
            scrollLeft: `+=${cardWidth + 16}`
        }, 'slow')
        if (currentIndex >= index) {
            $('#btnPrev-popular').attr('disabled', false)
        }
        if (currentIndex >= $('.cardPopular').length) {
            $('#btnNext-popular').attr('disabled', true)
        }
    },
    prev: () => {
        currentIndex -= 1
        $('.widgetPopular__body__wrappList').animate({
            scrollLeft: `-=${cardWidth + 16}`
        }, 'slow')
        if (index < $('.cardPopular').length) {
            $('#btnNext-popular').attr('disabled', false)
        }
        if (currentIndex <= index) {
            $('#btnPrev-popular').attr('disabled', true)
        }
    }
}