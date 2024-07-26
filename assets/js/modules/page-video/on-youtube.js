import { isPlatformPlaying } from "./video-detail.js"
let player
let youtubeID

const loadYoutubeScript = () => {
    return new Promise((resolve, reject) => {
        // Check if the script is already loaded
        if (document.getElementById('youtube-iframe-api')) {
            resolve();
            return;
        }

        // Create a script element to load the YouTube IFrame API
        const tag = document.createElement('script');
        tag.src = 'https://www.youtube.com/iframe_api';
        tag.id = 'youtube-iframe-api';
        tag.onload = () => {
            // Wait for the YT object to be available
            const checkYTReady = () => {
                if (window.YT && window.YT.Player) {
                    resolve();
                } else {
                    setTimeout(checkYTReady, 100);
                }
            };
            checkYTReady();
        };
        tag.onerror = (error) => reject(error);

        // Append the script to the document body
        document.body.appendChild(tag);

    });
}

const onYouTubeIframeAPIReady = () => {
    player = new YT.Player('video-youtube', {
        height: '455',
        width: '100%',
        videoId: youtubeID,
        playerVars: {
            'playsinline': 1,
            'autoplay': 0,
            "mute": 1
        },
        events: {
            'onReady': onPlayerReady,
        }
    });
}

function onPlayerReady(event) {
    $("#video-youtube").show()
    window.addEventListener('scroll', () => {
        // play
        if ($(window).scrollTop() > $('.videoWrapper').offset().top - $('.videoWrapper').height()) {
            isPlatformPlaying() == "youtube" ? player.playVideo() : null;
            isPlatformPlaying() == "youtube" ? player.unMute() : null;
        } else {
            isPlatformPlaying() == "youtube" ? player.pauseVideo() : null;
            isPlatformPlaying() == "youtube" ? player.mute() : null;
        }

        // pip
        if ($(window).scrollTop() > $('.videoWrapper').offset().top + $('.videoWrapper').height() - 100) {
            isPlatformPlaying() == "youtube" ? $('#video-youtube').addClass('pip') : null;
        } else {
            isPlatformPlaying() == "youtube" ? $('#video-youtube').removeClass('pip') : null;
        }
    })
}

export const onYoutubePlayer = (videoId) => {
    youtubeID = videoId
    loadYoutubeScript()
        .then(() => {
            // Ensure the YouTube API is ready
            if (typeof YT === 'undefined' || typeof YT.Player === 'undefined') {
                console.error('YouTube API is not ready');
                return;
            }
            onYouTubeIframeAPIReady()
        })
        .catch((error) => console.error('Failed to load YouTube script:', error));
}