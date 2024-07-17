import { burgerMenu } from "./modules/burgermenu.js";
import { geoLocationWidget } from "./modules/geolocation-widget.js";
import { downloadAppQR } from "./modules/download-app-qr.js";
import { networkDropdown, showHideDropdown } from "./modules/networks-dropdown.js";
import { pagination } from "./modules/pagination.js";
import { ssoLogin } from "./modules/sso.js";
import { counterLike, progressBar, resizeFontToggle, sticky, copyLink } from "./modules/sticky-feature-detail-page.js";
import { backToTop } from "./modules/backToTop.js"
import { schaduleSlider } from "./modules/newsTv.js"
import { Navigation } from "./modules/navigation.js";
import { popularWidget } from "./modules/popular-widget.js";
import { videoHighlightWidget } from "./modules/video-highlight-widget/video-highlight-widget.js";
import main3dCarousel from "./modules/3dcarousel/main-3d-carousel.js";

function initialize() {
    initNav()
    iniPopWidget()
    initGeoLocationWidget()
    initVideoHighlightWidget()
    init3dCarousel()
    downloadAppQR()
    burgerMenu()
    networkDropdown()
    showHideDropdown()
    initStickyFeatureDetailPage()
    initNewsTVFeaturePage()
    initPaginationInDetailPage()
    ssoLogin()
    backToTop()
    initJumpToOtherNews()
}

function initNav() {
    if ($('#navbar-nav').length > 0) {
        Navigation.dropDown()
        if ($('.nav__main').length > 0) {
            Navigation.stickyNavigationMainPage()
        }
    }
}

function iniPopWidget() {
    if ($('.widgetPopular').length > 0) {
        popularWidget()
    }
}

function initGeoLocationWidget() {
    if ($('.widgetGeoLocation').length > 0) {
        geoLocationWidget()
    }
}
function initVideoHighlightWidget() {
    if ($('.widgetVideoHighlight').length > 0) {
        videoHighlightWidget()
    }
}

function init3dCarousel() {
    if ($("#widget3dCarousel").length > 0) {
        main3dCarousel()
    }
}

function initStickyFeatureDetailPage() {
    if ($('.stickyFeature').length > 0) {
        sticky()
        resizeFontToggle()
        progressBar()
        counterLike()
        copyLink()
    }
    $('.share').length > 0 && copyLink();
}

function initNewsTVFeaturePage() {
    if ($('.schedule__tv').length > 0) {
        schaduleSlider()
    }
}

function initPaginationInDetailPage() {
    if ($('.pagination').length > 0) {
        pagination()
    }
}

function initJumpToOtherNews() {
    if ($('.btnMoreNews').length > 0) {
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
    }
}


// Initialize all the modules
document.addEventListener("DOMContentLoaded", initialize);

