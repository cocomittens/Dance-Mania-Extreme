import { songsDownHandler, scrollMenu } from './util/menu.js';
import { getSong } from './assets/songs.js';
import { draw, drawNote } from './util/render.js';
import { songsMenu } from './scenes/menu.js';
import { calculateGrade, showResults } from './scenes/results.js';

const body = document.getElementsByTagName('body')[0];
let id;

let right_arrow = new Image();
let left_arrow = new Image();
let up_arrow = new Image();
let down_arrow = new Image();

right_arrow.src = './sprites/arrow_right.png';
left_arrow.src = './sprites/arrow_left.png';
up_arrow.src = './sprites/arrow_up.png';
down_arrow.src = './sprites/arrow_down.png';

let right_arrow_active = new Image();
let left_arrow_active = new Image();
let up_arrow_active = new Image();
let down_arrow_active = new Image();

right_arrow_active.src = './sprites/arrow_right_active.png';
left_arrow_active.src = './sprites/arrow_left_active.png';
up_arrow_active.src = './sprites/arrow_up_active.png';
down_arrow_active.src = './sprites/arrow_down_active.png';

/* Main menu buttons */

let menu = document.getElementsByClassName('menuContainer')[0];
let canvas = document.getElementsByClassName('canvasContainer')[0];
let songSelect = document.getElementsByClassName('songsContainer')[0];
let audio = new Audio("./songs/www.ogg");
let song;
let title;
let bpm;
let results = { 'Perfect': 0,
    'Great': 0,
    'OK': 0,
    'Bad': 0,
    'Miss': 0
};

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