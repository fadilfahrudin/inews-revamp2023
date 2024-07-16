export const ssoLogin = () => {
    $("#login").on("click", function (e) {
        if (e.target.classList.contains("btnLogin") || e.target.classList.contains("ic-login")) {
            $(".btnLogin").addClass("hide");
            $("#openModalSSO").removeClass("hide");
        }

        if (e.target.id === "profileThumb") {
            $("#modalSSO").removeClass("hide");
        }
        if (e.target.classList.contains("ic-close-modal-sso")) {
            $("#modalSSO").addClass("hide");
        }
        if (e.target.id === "disconect") {
            $("#modalSSO").addClass("hide");
            $(".btnLogin").removeClass("hide");
            $("#openModalSSO").addClass("hide");
        }
    })
}