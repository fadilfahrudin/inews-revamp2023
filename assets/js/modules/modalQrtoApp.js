export const modalQrtoApp = () => {
    $(window).on('click', function (event) {
        switch (event.target) {
            case $(".modal-app-gateway")[0]:
                return;
            case $(".app-gateway img")[0]:
                return;
            case $(".qrcode-app img")[0]:
                return;
            case $(".app-available img")[0]:
                return;
            case $(".app-available img")[1]:
                return;
            default:
                $(".modal-app-gateway").removeClass("modal-app-gateway-open");
                break;
        }
    });

    $('.app-gateway img').on('mouseover', function () {
        $(".modal-app-gateway").removeClass("modal-app-gateway-close");
        $(".modal-app-gateway").addClass("modal-app-gateway-open");
    });

    $('.modal-app-gateway').on('mouseleave', function () {
        $(".modal-app-gateway").removeClass("modal-app-gateway-open");
        $(".modal-app-gateway").addClass("modal-app-gateway-close");
    });
}