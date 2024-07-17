
const playlist = $('.listPlayer')
let videoID
const playing = `<div class="playing"><img src="./assets/img/icon/ic-playing-video.png" alt="play" width="24" height="24"loading="lazy"> Now Playing</div>`

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
            getPlayerControl(player)
            setVideoPlayer(player)
        }).catch((e) => console.error(e));
}

const getPlayerControl = async (player) => {
    window.addEventListener('scroll', () => {
        if ($(window).scrollTop() > $('.widgetVideoHighlight').offset().top - $('.widgetVideoHighlight').height() && $(window).scrollTop() < $('.widgetVideoHighlight').offset().top + $('.widgetVideoHighlight').height()) {
            player.play()
            player.setMute(false)
        } else {
            player.pause()
        }
    })

}

const setVideoPlayer = (player) => {
    playlist.each((index, element) => {
        // if (index == 0) {
        //     $(element).prepend(playing)
        //     $('.video-title').text($(element).data("title"))
        //     videoID = $(element).data("link-dailymotion").split("embed/video/")[1]
        //     player.loadContent({ video: videoID })
        // }
        $(element).on("click", () => {
            videoID = $(element).data("link-dailymotion").split("embed/video/")[1]
            $('.playing').remove()
            $(element).prepend(playing)
            $('.video-title').text($(element).data("title"))
            console.log(videoID)
            player.loadContent({ video: videoID })
            // player.on(dailymotion.PLAYER_VIDEOCHANGE, () => {
            //     player.loadContent({ video: videoID })
            // })
        })
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