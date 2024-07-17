import { onYoutubePlayer } from "./on-youtube-player.js";
import { onDailymotionPlayer } from "./on-dailymotion-player.js";

const playlist = $('.listPlayer')
const playing = `<div class="playing"><img src="./assets/img/icon/ic-playing-video.png" alt="play" width="24" height="24"loading="lazy"> Now Playing</div>`
let videoID
let isPlaying

const initPlatformPlayer = () => {
    onYoutubePlayer()
    onDailymotionPlayer()
}

const setPlaying = (element) => {
    $('.playing').remove()
    $(element).prepend(playing)
    $('.video-title').text($(element).data("title"))
}

const extractDomainFromURL = (url) => {
    const anchor = document.createElement('a');
    anchor.href = url;

    const hostname = anchor.hostname;

    const parts = hostname.split('.');
    const domain = parts.length > 2 ? parts[parts.length - 2] : parts[0];

    return domain;
}

export const isPlatformPlaying = () => {
    return isPlaying
}

export const setYoutubePlayer = (player) => {
    playlist.each((index, element) => {
        if (index == 0) {
            let platform = extractDomainFromURL($(element).data("link"))
            $(element).prepend(playing)
            $('.video-title').text($(element).data("title"))
            videoID = platform == "youtube" ? $(element).data("link")?.split('embed/')[1] : undefined;
            videoID ? $('#youtube-container').show() : $('#youtube-container').hide()
            videoID ? isPlaying = "youtube" : isPlaying = "dailymotion"
            player.loadVideoById(videoID)
        }
        $(element).on("click", () => {
            let platform = extractDomainFromURL($(element).data("link"))
            videoID = platform == "youtube" ? $(element).data("link")?.split('embed/')[1] : undefined;
            videoID ? $('#youtube-container').show() : $('#youtube-container').hide()
            videoID ? player.loadVideoById(videoID) : player.stopVideo();
            videoID ? isPlaying = "youtube" : isPlaying = "dailymotion"
            setPlaying(element)
        })
    })
}

export const setDailymotionPlayer = (player) => {
    dailymotion.play = player
    playlist.each((index, element) => {
        if (index == 0) {
            let platform = extractDomainFromURL($(element).data("link"))
            $(element).prepend(playing)
            $('.video-title').text($(element).data("title"))
            videoID = platform == "dailymotion" ? $(element).data("link")?.split('embed/video/')[1] : undefined;
            videoID ? $('#dailymotion-container').show() : $('#dailymotion-container').hide()
            videoID ? isPlaying = "dailymotion" : isPlaying = "youtube"
            player.loadContent({ video: videoID })
        }
        $(element).on("click", () => {
            let platform = extractDomainFromURL($(element).data("link"))
            videoID = platform == "dailymotion" ? $(element).data("link")?.split('embed/video/')[1] : undefined;
            videoID ? $('#dailymotion-container').show() : $('#dailymotion-container').hide()
            videoID ? isPlaying = "dailymotion" : isPlaying = "youtube"
            player.loadContent({ video: videoID })
            setPlaying(element)
        })
    })
}

export const videoHighlightWidget = () => {
    initPlatformPlayer()
}