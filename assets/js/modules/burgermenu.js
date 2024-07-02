export const burgerMenu = () => {
    $("#burgerBtn").on("click", function () {
        $('.modalContainer').css("display", "block");
        $('#burgerMenu').animate({
            left: "-=450",
        }, '5000');
    })

    $("#closeBurgerMenu").on("click", function () {
        $('#burgerMenu').animate({
            left: "+=450",
        }, 'slow', function () {
            $('.modalContainer').css("display", "none");
        });
    })

}