export const geoLocation = () => {
    let geoActive = false;
    let checked = $("#switchInput");
    let locationNonActive = $('.geo-location-non-active')
    let locationActive = $('.geo-location-active')
    let msgModal = $('#msg_off')

    checked.on('click', () => {
        $("#modalAI").css("display", "flex");

        if (geoActive) {
            msgModal.html(`Non-aktifkan berita di sekitarmu?`)
        } else {
            msgModal.html(`Aktifkan fitur berita di sekitarmu?"`)
        }
    })

    $(".btn-toggle-no").on("click", () => {
        $("#modalAI").css("display", "none");
        if (geoActive) {
            checked.prop("checked", true);
            geoActive = true
        } else {
            checked.prop("checked", false);
            geoActive = false
        }
    })

    $(".btn-toggle-yes").on("click", () => {
        $("#modalAI").css("display", "none");

        if (geoActive) {
            checked.prop("checked", false);
            geoActive = false
            locationActive.css("display", "none");
            locationNonActive.css("display", "block");
        } else {
            locationActive.css("display", "block");
            locationNonActive.css("display", "none");
            checked.prop("checked", true);
            geoActive = true
        }
    })
}