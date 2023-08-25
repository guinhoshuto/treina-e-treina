console.log('oi')
const username = document.querySelector("#username")
const form = document.querySelector("form")

const avatar = document.querySelector('.avatar')
const ticketUsername = document.querySelector('h1.name')

const errorMessage = document.querySelector('.error-message') 
const successMessage = document.querySelector('.success-message') 

form.addEventListener('submit', async (event) => {
    event.preventDefault() 
    // const [status, data] = await 
    fetch(`https://api.github.com/users/${username.value}`)
        .then(r => [r.status, r])
        .then(([status, response]) => {
            console.log(status)
            if(status !== 200){
                errorMessage.classList.toggle('hidden');
                return
            } 
            return response.json()
        })
        .then(info => {
            avatar.src = info.avatar_url
            ticketUsername.innerHTML = info.login
            document.querySelector('.input-wrapper').classList.toggle('hidden')
            document.querySelector('form button').classList.toggle('hidden')
            document.querySelector('.download').classList.toggle('hidden')
            successMessage.classList.toggle('hidden')
        })

})