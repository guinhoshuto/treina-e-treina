import ffmpegStatic from 'ffmpeg-static'
import ffmpeg from 'fluent-ffmpeg'

export const createMP3 = () => new Promise((resolve, reject) => {
    ffmpeg.setFfmpegPath(ffmpegStatic)

    ffmpeg()
        .input('audio.mp4')
        .outputOptions('-ab', '20k')
        .saveToFile('audio.mp3')
        .on('start', () => {
            console.log('[LOG] Início da conversão de áudio')
        })
        .on('progress', (progress) => {
            console.log(`[CONVERTING] ${progress.percent}%`)
        })
        .on('end', () => {
            console.log('[LOG] Áudio convertido')
            resolve()
        })
        .on('error', (err) => {
            console.log('[ERROR]', err)
            reject()
        })
})