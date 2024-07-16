
export const schaduleSlider = () => {
    let isDown = false;
    let startX;
    let scrollLeft;

    $('#scheduleWrapper').mousedown(function (e) {
        isDown = true;
        startX = e.pageX - $(this).offset().left;
        scrollLeft = $(this).scrollLeft();
    });

    $('#scheduleWrapper').mouseleave(function () {
        isDown = false;
    });

    $('#scheduleWrapper').mouseup(function () {
        isDown = false;
    });

    $('#scheduleWrapper').mousemove(function (e) {

        if (!isDown) return;
        e.preventDefault();
        let x = e.pageX - $(this).offset().left;
        let walk = (x - startX) * 3; // Scroll-fast multiplier
        $(this).scrollLeft(scrollLeft - walk);
    });
}