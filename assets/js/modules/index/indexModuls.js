import { calender } from "./buildCalender.js";

const initKanalAction = () => {
    $("#select-kanal").on("focus click", function () {
        $(this).attr("disabled", true);
        $(".kanal-list").removeClass("hidden");
        $('#kalender').hide();
        $(".kanal-list .listItem").each(function (i, el) {
            $(el).on("click", function () {
                $("#select-kanal").val($(this).text());
                $("#select-kanal").attr("disabled", false);
                $(".kanal-list .listItem").removeClass("active");
                $(this).addClass("active");
                $(".kanal-list").addClass("hidden");
            });
        });
    })


    $('.ic-kanal-dropdown').each(function (i, el) {
        $(el).on('click', function () {
            if ($(el).prev("#select-kanal").length > 0) {
                $(".kanal-list").removeClass("hidden");
                $('#kalender').hide();
                $(".kanal-list .listItem").each(function (i, el) {
                    $(el).on("click", function () {
                        $("#select-kanal").val($(this).text());
                        $("#select-kanal").attr("disabled", false);
                        $(".kanal-list .listItem").removeClass("active");
                        $(this).addClass("active");
                        $(".kanal-list").addClass("hidden");
                    });
                });
            }
        });
    })

    $(document).click(function (event) {
        if (!$(event.target).closest('.selectControl').length) {
            $(".kanal-list").addClass("hidden");
            $("#select-kanal").attr("disabled", false);
        }
    });
}

const applyConfig = () => {
    $("#applyBtn").on("click", function () {
        console.log($("#select-kanal").val());
        console.log($("#date-input").val());
    })
}

export const indexModuls = () => {
    calender();
    initKanalAction();
    applyConfig();
}