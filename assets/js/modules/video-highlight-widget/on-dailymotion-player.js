
import { setDailymotionPlayer } from "./video-highlight-widget.js";
let videoID

function loadDailymotionScript(callback) {
    let script = document.createElement('script');
    script.src = 'https://geo.dailymotion.com/libs/player.js';
    script.onload = callback;
    document.body.appendChild(script);
}
const createDailymotionPlayer = () => {
    dailymotion
        .createPlayer('dailymotion-container', {
            video: videoID,
        })

    dailymotion.getPlayer()
        .then((player) => {
            videoPlayerControl(player)
            setDailymotionPlayer(player)
            // setPlaylist(player)
        }).catch((e) => console.error(e));
}

const videoPlayerControl = async (player) => {
    window.addEventListener('scroll', () => {
        if ($(window).scrollTop() > $('.widgetVideoHighlight').offset().top - $('.widgetVideoHighlight').height() && $(window).scrollTop() < $('.widgetVideoHighlight').offset().top + $('.widgetVideoHighlight').height()) {
            player.play()
            player.setMute(false)
        } else {
            player.pause()
        }
    })

}

export const onDailymotionPlayer = () => {
    if (window.dailymotion === undefined) {
        window.dailymotion = {
            onScriptLoaded: () => createDailymotionPlayer()
        }
        loadDailymotionScript(() => window.dailymotion.onScriptLoaded);
    } else {
        createDailymotionPlayer()
    }
}