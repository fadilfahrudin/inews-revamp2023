import { burgerMenu } from "./modules/burgermenu.js";
import { geoLocationWidget } from "./modules/geolocation-widget.js";
import { downloadAppQR } from "./modules/download-app-qr.js";
import { networkDropdown, showHideDropdown } from "./modules/networks-dropdown.js";
import { pagination } from "./modules/pagination.js";
import { ssoLogin } from "./modules/sso.js";
import { counterLike, progressBar, resizeFontToggle, sticky, copyLink } from "./modules/sticky-feature-detail-page.js";
import { backToTop } from "./modules/backToTop.js"
import { schaduleSlider, widgetNewsTV, channelSlider } from "./modules/newsTv.js"
import { Navigation } from "./modules/navigation.js";
import { popularWidget } from "./modules/popular-widget.js";
import { videoHighlightWidget } from "./modules/video-highlight-widget/video-highlight-widget.js";
import main3dCarousel from "./modules/3dcarousel/main-3d-carousel.js";
import { searchModule } from "./modules/search.js";
import { indexModuls } from "./modules/index/indexModuls.js";
import { detailVideo } from "./modules/page-video/video-detail.js"
import { multimedia } from "./modules/multimedia/multimedia.js";
import { aboutModule } from "./modules/about-module.js";
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
    searchModule()
    initPageIndex()
    iniDetailPageVideo()
    initMultimedia()
    initwidgetNewsTV()
    initAboutModul()
}

function initwidgetNewsTV() {
    if ($('.widgetNewsTV').length > 0) {
        widgetNewsTV()
    }
    if ($('.channelList').length > 0) {
        channelSlider()
    }
}

function initAboutModul() {
    if ($('#about-page').length > 0 || $('#browser-setting-page').length > 0) {
        aboutModule()
    }
}

function initMultimedia() {
    if (("#detail-photo").length > 0 || $("#detail-infographic").length > 0) {
        multimedia()
    }
}

function iniDetailPageVideo() {
    if ($("#detail-video").length > 0) {
        detailVideo()
    }
}
function initPageIndex() {
    if ($('#index-page').length > 0) {
        indexModuls()
    }
}
function initNav() {
    if ($('#navbar-nav').length > 0) {
        Navigation.dropDown()
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
    if ($('#detail-video').length > 0 || $('#detail-page').length > 0) {
        sticky()
        resizeFontToggle()
        progressBar()
        counterLike()
        copyLink()
        console.log('klik')
    }
    $('.share').length > 0 && copyLink();
    $('#detailPhotoInfo__copied').length > 0 && copyLink();
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
            let target = $(this).attr('data-target');
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
