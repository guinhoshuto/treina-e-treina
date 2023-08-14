const copyButton = document.querySelector('button.copy')
copyButton.addEventListener('click', () => {
    const texts = document.querySelectorAll('.transcription .content .p') 

    const output = [ ...texts].reduce((acc, txt) => acc += txt.innerText, "")

    navigator.clipboard.writeText(output.trim())

    const icon = copyButton.querySelector("i.ph")
    icon.setAttribute('class', 'ph ph-check-circle')
    setTimeout(() => {
        icon.setAttribute('class', 'ph ph-copy-simple')
    }, 2000)
})