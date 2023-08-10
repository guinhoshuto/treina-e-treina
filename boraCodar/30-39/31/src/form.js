import { startLoading, stopLoading, loadingMessage } from "./loading"

const form = document.querySelector("#form")

form.addEventListener("submit", (e) => {
    e.preventDefault()
    try{
        loadingMessage('Iniciando')
        startLoading()
        const formData = new FormData(form)
        const url = formData.get('url')
        loadVideo(url)
        console.log(url)
    } catch (err) {
        console.log('[SUBMIT_ERROR]', error)
    } finally {
        stopLoading()
    }
})