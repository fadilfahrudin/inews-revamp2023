const playlist = $('.listPlayer')
const playing = `<div class="playing"><img src="./assets/img/icon/ic-playing-video.png" alt="play" width="24" height="24"loading="lazy"> Now Playing</div>`
let youtubeID = $('.listPlayer').data("youtubeid");
let player

function onYouTubeIframeAPIReady() {
    player = new YT.Player('youtube-container', {
        height: '329',
        width: '100%',
        videoId: youtubeID,
        playerVars: {
            'playsinline': 1,
            'autoplay': 1,
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerReady(event) {
    setYoutubePlayer();
}

function onPlayerStateChange(event) {
    // if (event.data == YT.PlayerState.PLAYING && !playingEnd) {
    //     setTimeout(stopVideo, 6000);
    //     playingEnd = true;
    // }
    // state ini akan di jalankan ketika video di mulai atau di pause
}
function stopVideo() {
    player.stopVideo();
}

function playVideo() {
    player.playVideo();
}

const setYoutubePlayer = async () => {
    playlist.each((index, element) => {
        if (index == 0) {
            $(element).prepend(playing)
            $('.video-title').text($(element).data("title"))
        }
        $(element).on("click", () => {
            youtubeID = $(element).data("youtubeid")
            player.loadVideoById(youtubeID)
            $('.playing').remove()
            $(element).prepend(playing)
            $('.video-title').text($(element).data("title"))
        })
    })
}

export const videoHighlightWidget = () => {
    onYouTubeIframeAPIReady()
    window.addEventListener('scroll', () => {
        if ($(window).scrollTop() > $('.widgetVideoHighlight').offset().top - $('.widgetVideoHighlight').height() && $(window).scrollTop() < $('.widgetVideoHighlight').offset().top + $('.widgetVideoHighlight').height()) {
            playVideo()
        } else {
            stopVideo()
        }
    })
}