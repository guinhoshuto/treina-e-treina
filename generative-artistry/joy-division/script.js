const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const size = window.innerWidth;
const dpr = window.devicePixelRatio;

canvas.width = size*dpr
canvas.height = size*dpr
ctx.scale(dpr, dpr)
ctx.lineWidth = 2;

let falseJ = 0;
const step = 10;
const lines = [];

for (let i = step; i <= size - step; i += step){
    const line = [];
    for (let j = step; j <= size - step; j += step) {
        const distanceToCenter = Math.abs(j - size/2)
        const variance = Math.max(size/2 - 50 - distanceToCenter, 0);
        const random = Math.random()*variance/2*-1
        const point = {x: j, y: i + random} 
        line.push(point);
    }
    lines.push(line)
}

for (let i = 5; i < lines.length; i++){
    ctx.beginPath();
    ctx.moveTo(lines[i][0].x, lines[i][0].y);

    for(let j = 0; j < lines[i].length - 2; j++){
        const xc = (lines[i][j].x + lines[i][j + 1].x ) /2;
        const yc = (lines[i][j].y + lines[i][j + 1].y ) /2;
        ctx.quadraticCurveTo(lines[i][j].x, lines[i][j].y, xc, yc);
    }
    falseJ = lines[i].length -2;
    // ctx.quadraticCurveTo(lines[i][j].x, lines[i][j].y, lines[i][j + 1].x, lines[i][j + 1].y)
    ctx.quadraticCurveTo(lines[i][falseJ].x, lines[i][falseJ].y, lines[i][falseJ + 1].x, lines[i][falseJ + 1].y);
    ctx.save();
    ctx.globalCompositeOperation = 'destination-out';
    ctx.fill();
    ctx.restore();
    ctx.stroke();
}
