let pageList = document.querySelectorAll(".pageList");
let showAll = document.querySelector(".showAll");
let currentPage = 0;


function updatePrevBtn() {
    let pageList = document.querySelectorAll(".pageList");
    if (!pageList[0].classList.contains("active")) {
        $('.ic-prev').addClass("ic-prev-active");
        $('.ic-prev').removeClass("ic-prev");
    } else {
        $('.ic-prev-active').addClass("ic-prev");
        $('.ic-prev-active').removeClass("ic-prev-active");
    }
}

function updateNextBtn() {
    let pageList = document.querySelectorAll(".pageList");
    if (pageList[pageList.length - 1].classList.contains("active")) {
        $('.ic-next-active').addClass("ic-next");
        $('.ic-next-active').removeClass("ic-next-active");
    } else {
        $('.ic-next').addClass("ic-next-active");
        $('.ic-next').removeClass("ic-next");
    }
}
export const pagination = () => {

    pageList.forEach((page, i) => {
        page.addEventListener("click", () => {
            pageList.forEach((page, i) => {
                if (page.classList.contains("active")) {
                    page.classList.remove("active");
                }
            })
            currentPage = i;
            page.classList.add("active");
            updateNextBtn();
            updatePrevBtn();
        })
    })

    //  event delegation
    $('.prev').on("click", (event) => {
        if (event.target.classList.contains("ic-prev-active")) {
            pageList[currentPage].classList.remove("active");
            currentPage = currentPage - 1;
            pageList[currentPage].classList.add("active");
            updateNextBtn();
            updatePrevBtn();
        }
    })

    $('.next').on("click", (event) => {
        if (event.target.classList.contains("ic-next-active")) {
            pageList[currentPage].classList.remove("active");
            currentPage = currentPage + 1;
            pageList[currentPage].classList.add("active");
            updateNextBtn();
            updatePrevBtn();
        }
    })

}

