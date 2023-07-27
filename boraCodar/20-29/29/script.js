const slider = document.getElementById("slider")
const before = document.querySelector(".before-image")
const dragger = document.getElementById("dragger")

slider.addEventListener("input", (e) => {
    console.log(e.target.value)
    before.style.width = e.target.value + '%'  
    dragger.style.left = e.target.value + '%'  
})