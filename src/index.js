import { handleInput, keyDownHandler, keyUpHandler, drawArrows } from './game.js';

document.querySelectorAll('.button')[0].addEventListener('click', function (event) {
    let menu = document.getElementsByClassName('menuContainer')[0];
    let canvas = document.getElementsByClassName('canvasContainer')[0];
    menu.style.display = 'none';
    canvas.style.display = 'block';
    drawArrows();
});

const body = document.getElementsByTagName('body')[0];
let id;

function gameLoop() {
    // Animate stuff
    id = requestAnimationFrame(gameLoop)
}
if(body) {
    body.addEventListener('click', () => {
        cancelAnimationFrame(id)
    })
}