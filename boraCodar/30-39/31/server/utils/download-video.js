import ytdl from "ytdl-core"
import fs from 'fs'

export const downloader = (videoId) => new Promise((resolve, reject) => {
    const videoURL = 'https://youtube.com/watch?v=' + videoId
    console.log('[LOG] download started')

    ytdl(videoURL, {
        quality: "lowestaudio",
        filter: "audioonly"
    }).on('progress', (length, downloaded, totalLength) => {
        console.log(`[DOWLOADING] ${parseInt((downloaded/totalLength)*100)}%`)
    }).on('end', () => {
        console.log('[LOG] finished download')
        resolve()
    }).on('error', () => {
        console.log('[ERROR] erro ao baixar o vídeo')
        reject()
    }).pipe(fs.createWriteStream('./audio.mp4'))
}) 