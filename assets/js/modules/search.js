
export const searchModul = () => {
    $("#search").on('focus', () => {
        $("#data-list").show()

        $(".list-search").each((i, el) => {
            $(el).click(() => {
                $("#search").val($(el).text());
            })
        })

        $(".remove-recent").each((i, el) => {
            $(el).click(() => {
                $(el).parent().remove()
            })
        })
        $("#clear-recent").click(() => {
            $(".remove-recent").parent().remove()
        })
    })
    $('#search').on('blur', () => {
        setTimeout(function () {
            $('#data-list').hide();
            $(".recent-search").show()
            $(".trending-topic").show()
            $(".search-on-keyup").hide()
        }, 200);
    });

    $("#search").on('keyup', () => {
        $(".recent-search").hide()
        $(".trending-topic").hide()
        $(".search-on-keyup").show()

        if ($(this).val() == "") {
            $(".recent-search").show()
            $(".trending-topic").show()
            $(".search-on-keyup").hide()
        }
    })
}