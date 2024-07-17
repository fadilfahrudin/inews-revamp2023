import { isPlatformPlaying, setYoutubePlayer } from "./video-highlight-widget.js"
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
        }
    });
}

function onPlayerReady(event) {
    setYoutubePlayer(player)
    window.addEventListener('scroll', () => {
        if ($(window).scrollTop() > $('.widgetVideoHighlight').offset().top - $('.widgetVideoHighlight').height() && $(window).scrollTop() < $('.widgetVideoHighlight').offset().top + $('.widgetVideoHighlight').height()) {
            isPlatformPlaying() == "youtube" ? player.playVideo() : null;
        } else {
            isPlatformPlaying() == "youtube" ? player.stopVideo() : null;
        }
    })
}

export const onYoutubePlayer = () => {
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