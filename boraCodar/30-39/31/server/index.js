import express from 'express'
import cors from 'cors'
import { downloader } from './utils/download-video.js';

const app = express()
app.use(cors())

app.get('/audio', async (req, res) => {
    const videoId = req.query.v
    console.log(videoId)
    try{

        await downloader(videoId)
        await createMP3()
        return res.send(videoId)
    } catch (err) {
        return res.send(err)
    }
});

app.listen(3333, () => console.log('server up'))