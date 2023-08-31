lucide.createIcons()

let select = document.querySelector('.select')
let selectedValue = document.querySelector('#selected-value')
let optionsViewButton = document.querySelector('#options-view-button')
let inputsOptions = document.querySelectorAll('.option input')

inputsOptions.forEach(input => {
    input.addEventListener('click', event => {
        selectedValue.textContent = input.dataset.label

        const isMouseOrTouch = event.pointerType === "mouse" || event.pointerType === "touch"
        isMouseOrTouch && optionsViewButton.click()
    })
})

window.addEventListener('keydown', event => {
    if(!select.classList.contains('open')) return

    if(event.key === "Escape" || event.key === " "){
        console.log('oi')
        optionsViewButton.click()
    }
})

optionsViewButton.addEventListener('input', () => {
    select.classList.toggle('open')
    if(!select.classList.contains('open')) return

    const input = document.querySelector('.option input:checked') || document.querySelector('.option input')
    console.log('ois')
    input.focus()
})