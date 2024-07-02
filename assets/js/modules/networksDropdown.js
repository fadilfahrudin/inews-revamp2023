
const dataNetwork = async () => {
    const res = await fetch(`https://static.inews.co.id/network/menu.json`)
    const data = await res.json()
    return data

}

export const networkDropdown = () => {
    $(".listPulau").each(function (i, el) {
        $(this).on("mouseover", async () => {
            $(".listPulau").removeClass("active")
            $(this).addClass("active")
            const data = await dataNetwork()
            data.island.map((data) => {
                if (data.slug == $(this).attr("data-pulau")) {

                    $("#kabupaten").html(`
                        ${data.network.map((data) => {
                        return `
                                <li class="listKabupaten">
                                    <a href="https://${data.slug}.inews.id">${data.name}</a>
                                </li>
                            `
                    }).join("")}
                    `)
                }
            })
        })

        $("#kabupaten").on("mouseleave", () => {
            $('.listPulau').removeClass("active")
            $("#kabupaten").html(``)
        })
    })
}

export const showHideDropdown = () => {
    $("#dropDownNetworkBtn").on("click", function () {
        $('.modalContainer').css("display", "block");
        $('#networkDropdown').animate({
            top: "+=550",
        }, '5000');
    })

    $("#closeDropdown").on("click", function () {
        $('#networkDropdown').animate({
            top: "-580",
        }, 'slow', function () {
            $('.modalContainer').css("display", "none");
        });
    })
}