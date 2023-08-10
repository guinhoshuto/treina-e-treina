import { loadingMessage } from "./loading";

var tag = document.createElement('script')

tag.src = "https://www.youtube.com/iframe_api"
var firstScriptTag = document.getElementsByTagName('script')[0];

firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

window.YTPlayer = null

function getVideoId(url){
    const [part1, part2] = url.split("?v=")
    const [videoId, other] = part2.split("&")
    return videoId
}

export function loadVideo(url) {
    loadingMessage('Carregando vídeo do Youtube');
    window.YTPlayer = new YT.YTPlayer('youtubeVideo', {
        videoId: getVideoId(url)
    })
}