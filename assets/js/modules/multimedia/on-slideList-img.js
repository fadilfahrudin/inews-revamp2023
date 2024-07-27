const listThumb = $(".listThumb")
const thumbWidth = listThumb.outerWidth()
let mainWidthImg = $('.imgWrapper').outerWidth()
let totalListImgVisible = 4
let scrollAmount = thumbWidth / totalListImgVisible
let index

function checkButtons() {
    let scrollLeft = listThumb.scrollLeft();
    let maxScrollLeft = listThumb[0].scrollWidth - thumbWidth;

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
    onClick: (indexImg) => {
        index = indexImg
        $(".listImage").animate({ scrollLeft: `${index * mainWidthImg}` }, 500);
        console.log(mainWidthImg)
    },
    setPosition: (indexImg) => {
        $(".listThumb").animate({ scrollLeft: `${indexImg * scrollAmount}` }, 100, () => {
            checkButtons();
        });
    },
    getIndex: () => {
        if (index === undefined) {
            index = 0
        }
        return index
    },
    setIndex: (newIndex) => {
        index = newIndex
    }
}

const slideListAction = Object.freeze(sliderObject)
export default slideListAction