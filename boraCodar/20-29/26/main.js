console.log('oi')
let counter = 1;
const portions = document.querySelector('#counter')

function formatNumber(n){
    return n.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false})
}

function changePortion(n){
    console.log(n)
}