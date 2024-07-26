import { onDailymotionPlayer } from "./on-dailymotion.js"
import { onYoutubePlayer } from "./on-youtube.js"
let urlLink = $(".videoWrapper").data("link");
let videoId, isPlaying
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
const setPlayer = (playing) => {
    if (playing == "dailymotion") {
        $("#video-youtube").hide()
        onDailymotionPlayer(videoId)
    } else {
        $("#video-dailymotion").hide()
        onYoutubePlayer(videoId)
    }
}
export const detailVideo = () => {
    isPlaying = extractDomainFromURL(urlLink)
    videoId = isPlaying == "dailymotion" ? urlLink?.split('embed/video/')[1] : urlLink?.split('embed/')[1];
    setPlayer(isPlaying)
}