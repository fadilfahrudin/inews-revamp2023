import { burgerMenu } from "./_modules/burgermenu.js";
import { geoLocation } from "./_modules/geoLocation.js";
import { modalQrtoApp } from "./_modules/modalQrtoApp.js";
import { networkDropdown, showHideDropdown } from "./_modules/networksDropdown.js";
import { pagination } from "./_modules/pagination.js";
import { ssoLogin } from "./_modules/sso.js";
import { counterLike, progressBar, resizeFontToggle, sticky, copyLink } from "./_modules/sticky.js";
import { backToTop } from "./_modules/backToTop.js"
import { schaduleSlider } from "./_modules/newsTv.js"
import { Navigation } from "./modules/navigation.js";

function initialize() {
    initNav()
}

function initNav() {
    if ($('#navbar-nav').length > 0) {
        Navigation.dropDown()
        if ($('.nav__main').length > 0) {
            Navigation.stickyNavigationMainPage()
        }
    }
}

document.addEventListener("DOMContentLoaded", initialize);

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