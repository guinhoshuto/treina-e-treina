const form = document.querySelector('form');
const formSteps = document.querySelectorAll('.form-step');
let currentStep = 0;

form.addEventListener('click', (e) => {
    if(!e.target.matches('[data-action')) return
    const actions = {
        next() {
            if(currentStep >= formSteps.length) return
            if(!isValidInputs()) return
            currentStep++
        },
        prev() {
            if(currentStep === 0) return
            if(!isValidInputs()) return
            currentStep--
        },
    }

    const action = e.target.dataset.action
    actions[action]()
    updateActiveStep()
    updateProgressStep()
})

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const data = new FormData(form)
    alert(`Obrigado ${data.get('name')}!`)
})

function updateActiveStep(){
    formSteps.forEach(step => step.classList.remove('active'));
    formSteps[currentStep].classList.add('active') 
}

const progressStep = document.querySelector('.step-progress strong')
function updateProgressStep(){
    progressStep.forEach((step, i) => {
        step.classList.remove('active')
        step.classList.remove('done')
        
        if(i < currentStep + 1){
            step.classList.add('active')
        }

        if(i < currentStep){
            step.classList.add('done')
        }
    })
}

function isValidInputs(){
    const currentFormStep = formSteps[currentStep]
    const formFields = [...currentFormStep.querySelectorAll('input'), ...currentFormStep.querySelectorAll('textarea')]

    return formFields.every((input) => input.reportValidity())
}

formSteps.forEach(s => {
    function addhide(){
        s.classList.add('hide')
    }
    s.addEventListener('animationend', e => {
        addHide()
        formSteps[currentStep].classList.remove('hide')
    })
})