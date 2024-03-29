import { transcribeAudio } from "./transcribe"
import { startLoading, stopLoading, loadingMessage } from "./loading"
import { loadVideo, getVideoId } from "./youtube-api"
import { renderText } from './render'
import  axios from "axios"

const form = document.querySelector("#form")

form.addEventListener("submit", async (e) => {
    e.preventDefault()
    try{
        loadingMessage('Iniciando')
        startLoading()
        const formData = new FormData(form)
        const url = formData.get('url')
        await loadVideo(url)
        await axios.get('audio?v=' + getVideoId(url), {baseURL: 'http://localhost:3333'})

        const data = await transcribeAudio()
        console.log(data)
        renderText(data)
    } catch (err) {
        console.log('[SUBMIT_ERROR]', err)
    } finally {
        stopLoading()
    }
})