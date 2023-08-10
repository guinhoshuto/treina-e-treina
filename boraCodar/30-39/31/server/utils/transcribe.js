import { pipeline } from "@xenova/transformers"
import { loadingMessage } from "../../src/loading"

let data = null

async function transcribeAudio(){
    const options = {
        chunk_length_s: 30,
        stride_length_s: 5,
        language: 'portuguese',
        task: 'transcribe',
        return_timestamp: true
    }
    try{
        console.time()
        loadingMessage('Iniciando a transcrição de áudio...')
        console.log('[LOG] início da transcrição')

        const transcriber = await pipeline('automatic-speech-recognition', 'Xenova/whisper-small')
        data = await transcriber('../../audio.mp3', options)
    } catch (err) {

        console.log('[ERROR]', err)
        throw new Error(err)
    } finally {
        console.timeEnd()
        console.log('[LOG] finalizou a transcrição')
        return data
    }
} 