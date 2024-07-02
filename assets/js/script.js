import { burgerMenu } from "./modules/burgermenu.js";
import { geoLocation } from "./modules/geoLocation.js";
import { modalQrtoApp } from "./modules/modalQrtoApp.js";
import { navKanal, navMain } from "./modules/navKanal.js";
import { networkDropdown, showHideDropdown } from "./modules/networksDropdown.js";
import { pagination } from "./modules/pagination.js";
import { ssoLogin } from "./modules/sso.js";
import { counterLike, progressBar, resizeFontToggle, sticky, copyLink } from "./modules/sticky.js";
import { backToTop } from "./modules/backToTop.js"
import { schaduleSlider } from "./modules/newsTv.js"

// Check Dokument is ready
document.addEventListener("DOMContentLoaded", function () {

    // run geolocation function
    $('#switchInput').length > 0 && geoLocation();

    // run modal qr to download app
    $('.app-gateway').length > 0 && modalQrtoApp();

    // Burger Button
    $("#burgerBtn").length > 0 && burgerMenu();

    // Network Dropdown
    $('#networkDropdown').length > 0 && networkDropdown();
    $('#networkDropdown').length > 0 && showHideDropdown();

    // run sticky 
    $('.stickyFeature').length > 0 && sticky();
    $('.stickyFeature').length > 0 && resizeFontToggle();
    $('.stickyFeature').length > 0 && progressBar();
    $('.stickyFeature').length > 0 && counterLike();
    $('.stickyFeature').length > 0 && copyLink();
    $('.share').length > 0 && copyLink();

    // Nav Kanal
    $('.navigationKanal').length > 0 && navKanal();
    $('.nav__main').length > 0 && navMain();

    // iNews TV Feature
    $('.schedule__tv').length > 0 && schaduleSlider();

    // pagination
    $('.pagination').length > 0 && pagination();

    // sso
    $('#login').length > 0 && ssoLogin();

    // back to top
    $('#backToTop').length > 0 && backToTop();


    $('.btnMoreNews').on('click', function () {
        let target = $(this).attr('target');
        let to = $(target)

        if (to.length > 0) {
            window.scrollTo({
                top: to.offset().top - 120,
                left: 0,
                behavior: 'smooth'
            })
        }
    })


    // load img
    let img = $('img');
    let loadImg = 0;

    // Fungsi untuk menghapus kelas tertentu setelah semua gambar dimuat
    // function checkAllImagesLoaded() {
    //     loadImg++;
    //     // Variabel untuk memeriksa apakah semua gambar sudah dimuat
    //     let allImagesLoaded = true;
    //     img.each(image => {
    //         if (image.complete) {
    //             allImagesLoaded = false;
    //         }
    //     });

    //     if (allImagesLoaded) {
    //         console.log("All images loaded");
    //         // Hapus kelas tertentu (misalnya, kelas 'hide') dari elemen gambar
    //         $(".loading").each(function (i, item) {
    //             item.classList.remove("loading");
    //         })
    //     }
    // }

    // window.addEventListener('load', checkAllImagesLoaded);

})