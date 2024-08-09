import { calender } from "./buildCalender.js";

const initKanalAction = () => {
    $("#select-kanal").on("click", function () {
        $(".kanal-list").hasClass("hidden") ? $(".kanal-list").removeClass("hidden") : $(".kanal-list").addClass("hidden");
        $('#kalender').addClass("hidden");
        $(".kanal-list .listItem").each(function (i, el) {
            $(el).on("click", function () {
                $("#select-kanal").val($(this).text());
                $(".kanal-list .listItem").removeClass("active");
                $(this).addClass("active");
                setTimeout(function () {
                    $(".kanal-list").addClass("hidden");
                },100)
            });
        });
    })

    $(document).click(function (event) {
        if (!$(event.target).closest('.selectControl').length) {
            $(".kanal-list").addClass("hidden");
        }
    });
}

const applyConfig = () => {
    $("#applyBtn").on("click", function (e) {
        e.preventDefault();
        console.log($("#select-kanal").val());
        console.log($("#date-input").val());
    })
}

export const indexModuls = () => {
    calender();
    initKanalAction();
    applyConfig();
}