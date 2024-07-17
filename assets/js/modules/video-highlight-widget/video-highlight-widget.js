import { onYoutubePlayer } from "./on-youtube-player.js";
import { onDailymotionPlayer } from "./on-dailymotion-player.js";
const initPlatformPlayer = () => {
    onYoutubePlayer()
    onDailymotionPlayer()
}
export const videoHighlightWidget = () => {
    initPlatformPlayer()
}