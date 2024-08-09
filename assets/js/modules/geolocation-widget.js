let geoActive = false;
let checked = $("#switchInput");
let locationNonActive = $('.geo-location-non-active')
let locationActive = $('.geo-location-active')
let msgModal = $('#msg_off')
export const geoLocationWidget = () => {
    $("#btnToggleGeoLocation").on("click", handleSwitch);
    $(".btn-toggle-no").on("click", () => commandAI("no"));
    $(".btn-toggle-yes").on("click", () => commandAI("yes"));
}

const handleSwitch = () => {
    $("#modalAI").css("display", "flex");
    geoActive = checked.prop("checked") ? true : false;
    if (geoActive) {
        msgModal.html(`Non-aktifkan berita di sekitarmu?`)
    } else {
        msgModal.html(`Aktifkan fitur berita di sekitarmu?"`)
    }
}

const commandAI = (command) => {
    if (command == "no") {
        $("#modalAI").css("display", "none");
        if (geoActive) {
            checked.prop("checked", true);
            geoActive = true
        } else {
            checked.prop("checked", false);
            geoActive = false
        }
    } else {
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
    }
}