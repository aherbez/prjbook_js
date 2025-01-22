// console.log('hello world!')

const WIDTH = 800;
const HEIGHT = 600;

const canvas = document.getElementById("stage")
const ctx = canvas.getContext('2d')

let previousTimestamp = 0

let posX = 0

function draw(elapsedTime) {
    const delta = elapsedTime - previousTimestamp
    
    ctx.fillStyle = "#000"

    ctx.fillRect(0, 0, WIDTH, HEIGHT)

    ctx.fillStyle = "#FFF"

    ctx.fillRect(WIDTH/2 + posX - 25, HEIGHT/2-25, 50, 50)

    posX = Math.sin(elapsedTime * 0.002) * 100

    // console.log(delta)

    previousTimestamp = elapsedTime
    requestAnimationFrame(draw)
}

draw()