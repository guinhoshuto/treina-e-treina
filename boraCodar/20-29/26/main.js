let counter = 1;
const ingredientsQtd = document.getElementsByClassName('qtd')
console.log(typeof ingredientsQtd)
const portions = document.querySelector('#counter')

function formatNumber(n){
    return n.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false})
}

function changePortion(n){
    counter += n
    if(counter < 0) counter = 0
    setPortion()
}

function setPortion(){
    Array.prototype.forEach.call(ingredientsQtd , e => {
        e.innerHTML = parseInt(e.dataset.qtd)*counter; 
    })
    portions.innerHTML = formatNumber(counter)
} 

setPortion();

