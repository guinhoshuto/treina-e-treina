const canvas = document.getElementById('tetris')
const context = canvas.getContext('2d')

context.scale(20, 20)


const matrix = [
    [0, 0, 0],
    [1, 1, 1],
    [0, 1, 0]
];

function draw(){
    context.fillStyle = '#000'
    context.fillRect(0, 0, canvas.width, canvas.height)
    drawMatrix(player.matrix, player.pos)
}

function playerDrop(){
    player.pos.y++;
    dropCounter = 0;
}

let dropCounter = 0;
let dropInterval = 1000;

let lastTime = 0;
function update(time=0){
    const deltaTime = time - lastTime;
    lastTime = time;

    dropCounter = deltaTime;
    if(dropCounter > dropInterval) playerDrop()

    draw();    
    if(time < dropInterval) requestAnimationFrame(update)
    requestAnimationFrame(update)
}

function drawMatrix(matrix, offset) {
    matrix.forEach((row, y) => {
        row.forEach((value, x) => {
            if( value !== 0) {
                context.fillStyle = 'red'
                context.fillRect(
                    x + offset.x,
                    y + offset.y, 
                    1, 
                    1
                )
            }
        })
    })
}

const player = {
    pos: {
        x: 1,
        y: 9
    },
    matrix: matrix
}

document.addEventListener('keydown', event => {
    console.log(event)
    if(event.code === 'ArrowRight') player.pos.x++;
    if(event.code === 'ArrowLeft') player.pos.x--;
    if(event.code === 'ArrowDown') playerDrop()
})


update()
