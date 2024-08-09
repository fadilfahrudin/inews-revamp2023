let btnIndex

function accordiOnChange () {
    $(".accordion__body").each(function (i, el) {
        if (i == btnIndex) {
            $(el).slideToggle(300);
        }
    })
}

function accordion() {
    $(".dropdown").each(function (i, el) {
        $(el).on("click", function () {
            btnIndex = i
            if ($(this).hasClass("active")) {
                $(this).removeClass("active");
                accordiOnChange()
            } else {
                $(this).addClass("active");
                accordiOnChange()
            }
        })
    });
}

export const aboutModule = () => {
    accordion();
};
