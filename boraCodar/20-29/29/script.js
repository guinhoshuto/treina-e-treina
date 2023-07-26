const slider = document.getElementById("slider")
const before = document.querySelector(".before-image")

slider.addEventListener("input", (e) => {
    console.log(e.target.value)
    before.style.width = e.target.value + '%'  
})