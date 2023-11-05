import { getSong } from '../assets/songs';
import { showResults } from './results';

let menu = document.getElementsByClassName('menuContainer')[0];
let canvas = document.getElementsByClassName('canvasContainer')[0];
let songSelect = document.getElementsByClassName('songsContainer')[0];
const body = document.getElementsByTagName('body')[0];
let audio, bpm, title, song;

function startGame(backgroundImage, songFile, bpmValue, titleValue, songIndex) {
    menu.style.display = 'none';
    body.style.backgroundImage = `url('${backgroundImage}')`;
    audio = new Audio(songFile);
    bpm = bpmValue;
    title = titleValue;
    song = getSong(songIndex);
    canvas.style.display = 'block';
    
    audio.play();
    drawNote([]);
    song.forEach((beat, index) => {
        if (beat) {
            setTimeout(() => drawNote(beat), index * bpm);
        }
    });
    setTimeout(showResults, bpm * song.length);
}

function quickplayHandler(e) {
    startGame('./backgrounds/www_bg.png', './songs/www.ogg', 700, 'White Wind World', 2);
}

function menuKeydownHandler(e) {
    if (e.key === 'Enter') {
        let activeClass = document.getElementsByClassName('active')[0].className;
        if (activeClass.contains('c-1')) {
            startGame('./backgrounds/light-bg.png', './songs/lightclors.mp3', 500, 'Light Colors', 4);
        } else if (activeClass.contains('c-2')) {
            startGame('./backgrounds/stepping_w_bg.png', './songs/stepping_w.ogg', 500, 'Stepping Wind', 3);
        } else if (activeClass.contains('c-3')) {
            startGame('./backgrounds/ppp_bg.png', './songs/ppp.mp3', 375, 'Pop Pop Poppet', 1);
        } else if (activeClass.contains('c-4')) {
            startGame('./backgrounds/www_bg.png', './songs/www.ogg', 700, 'White Wind World', 2);
        } else if (activeClass.contains('c-5')) {
            startGame('./backgrounds/iris-bg.jpg', './songs/iris.mp3', 700, 'Tears of Iris', 5);
        }
    }
}

export const songsMenu = () => {
    if (audio) audio.pause();
    menu.style.display = 'none';
    canvas.style.display = 'none';
    songSelect.style.display = 'block';
    document.getElementById('stylesheet').href = './css/songs.css';

    const startButton = document.getElementById('startBtn');
    startButton.removeEventListener('click', quickplayHandler);
    startButton.addEventListener('click', quickplayHandler);

    document.removeEventListener('keydown', scrollMenu(songsDownHandler, 400));
    document.addEventListener('keydown', scrollMenu(songsDownHandler, 400), false);
    document.removeEventListener('keydown', menuKeydownHandler);
    document.addEventListener('keydown', menuKeydownHandler, false);
}