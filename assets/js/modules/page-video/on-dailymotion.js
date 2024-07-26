function loadDailymotionScript(callback) {
    let script = document.createElement('script');
    script.src = 'https://geo.dailymotion.com/libs/player.js';
    script.onload = callback;
    document.body.appendChild(script);
}
const createDailymotionPlayer = (videoID) => {
    dailymotion
        .createPlayer('video-dailymotion', {
            video: videoID,
            params: {
                mute: false,
            },
        }).then((player) => {
            videoPlayerControl(player)
            if (player) {
                $("#video-dailymotion").show()
            }
        })
        .catch((error) => {
            console.error(error);
        });
}

const videoPlayerControl = async (player) => {
    window.addEventListener('scroll', () => {
        if ($(window).scrollTop() > $('.video-container').offset().top + $('.video-container').height()) {
            // do something
        } else {
            // do something
        }
    })
}

export const onDailymotionPlayer = (videoId) => {
    if (window.dailymotion === undefined) {
        window.dailymotion = {
            onScriptLoaded: () => createDailymotionPlayer(videoId)
        }
        loadDailymotionScript(() => window.dailymotion.onScriptLoaded);
    } else {
        createDailymotionPlayer(videoId)
    }
}