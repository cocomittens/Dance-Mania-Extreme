import { getSong } from './assets/songs.js';
import { draw, drawNote } from './util/render.js';
import { songsMenu } from './scenes/menu.js';
import { showResults } from './scenes/results.js';
import { keyDownHandler, keyUpHandler } from './util/eventhandlers.js';
const body = document.getElementsByTagName('body')[0];
let id;

/* Main menu buttons */

let menu = document.getElementsByClassName('menuContainer')[0];
let canvas = document.getElementsByClassName('canvasContainer')[0];
let songSelect = document.getElementsByClassName('songsContainer')[0];
let audio = new Audio("./songs/www.ogg");
let song;
let title;
let bpm;

document.getElementById('startBtn').addEventListener('click', function (event) {
    menu.style.display = 'none';
    body.style.backgroundImage = `url('./backgrounds/www_bg.png')`;
    canvas.style.display = 'block';
    audio.play();
    song = getSong(2);
    bpm = 700;
    title = 'White Wind World';
    drawNote([]);
    for (let i = 0; i < song.length; i++) {
        let beat = song[i];
        if (beat) {
            setTimeout(() => drawNote(beat), i * bpm);
        }
    }
    setTimeout(showResults, bpm * song.length);
});

document.getElementById('songBtn').addEventListener('click', function (event) {
    songsMenu();
});

document.getElementById('songBtnResults').addEventListener('click', function (event) {
    songsMenu();
});


/* Animation */

function gameLoop() {
    id = requestAnimationFrame(gameLoop)
}

if (body) {
    body.addEventListener('click', () => {
        cancelAnimationFrame(id)
    })
}