import { songsDownHandler, scrollMenu } from './songs_menu.js';
import { getSong } from './songs.js';

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
let menuAudio = new Audio('./songs/bensound-popdance.mp3');
let audio = new Audio("./songs/www.ogg");
let song;
let bpm;
let active;

document.getElementById('startBtn').addEventListener('click', function (event) {
    menu.style.display = 'none';
    body.style.backgroundImage = `url('./backgrounds/www_bg.png')`;
    canvas.style.display = 'block';
    audio.play();
    song = getSong(2);
    bpm = 700;
    drawNote([]);
    for (let i = 0; i < song.length; i++) {
        let beat = song[i];
        if (beat) {
            setTimeout(() => drawNote(beat), i * bpm);
        }
    }
});

document.getElementById('songBtn').addEventListener('click', function(event) {
	menu.style.display = 'none';
    songSelect.style.display = 'block';
    menuAudio.play();
	document.getElementById('stylesheet').href = './css/songs.css';
	document.addEventListener('keydown', scrollMenu(songsDownHandler, 400), false);
	document.addEventListener('keydown', function(e) {
		if (e.key === 'Enter') {
            menuAudio.pause();
			menu.style.display = 'none';
			document.getElementById('stylesheet').href = './css/styles.css';
            active = document.getElementsByClassName('active')[0].classList.contains('c-3');
            if (active) {
                audio = new Audio('./songs/ppp.mp3');
                body.style.backgroundImage = "url('./backgrounds/ppp_bg.png')";
                bpm = 375;
                song = getSong(1);
            } else {
                audio = new Audio('./songs/www.ogg');
                body.style.backgroundImage = `url('./backgrounds/www_bg.png')`;
                bpm = 450;
                song = getSong(2);
            }
            canvas.style.display = 'block';

			audio.play();
			drawNote([]);
			for (let i = 0; i < song.length; i++) {
				let beat = song[i];
				if (beat) {
					setTimeout(() => drawNote(beat), i * bpm);
				}
			}
		}
	});
});

/* Rendering */

let dx = 10;
let ctx;
let notes = [];
let combo = 0;
let comboText;
let speed = 30; // lower is faster
let noteX;
let y = 600; // vertical offset
let run;
let progress = 150;
let progressGradient;

const calculateScore = (pixels) => {
    if (pixels <= 30 && pixels >= 25) return 'Bad';
    if (pixels <= 25 && pixels >= 20) return 'OK';
    if (pixels <= 20 && pixels >= 10) return 'Good';
    if (pixels <= 10) return 'Perfect!';
}

const drawNote = (beat) => {
    if(beat) {
        beat.forEach(note => {
            if (note.src.includes('left')) noteX = 100;
            if (note.src.includes('down')) noteX = 200;
            if (note.src.includes('up')) noteX = 300;
            if (note.src.includes('right')) noteX = 400;
            notes.push({ img: note, 
                x: noteX, 
                y, 
                score: null,
                displayed: 0
            });
        })
    }
    ctx = document.getElementById('canvas').getContext('2d');
    clearInterval(run);
    run = setInterval(() => draw(notes), speed);
}

const draw = (notes) => {
    ctx.font = "bold 30px Helvetica";
    progressGradient = ctx.createLinearGradient(550, 100 + progress, 580, 400);
    progressGradient.addColorStop(0, "blue");
    progressGradient.addColorStop(1, "red");
    ctx.fillStyle = progressGradient;
    ctx.strokeStyle = '#000';

    ctx.clearRect(0, 0, 600, 600); // clear the canvas

    ctx.beginPath();
    ctx.rect(550, 100, 30, 300);
    ctx.stroke();
    ctx.fillRect(550, 400 - progress, 30, progress);

    if (rightPressed) {
        ctx.drawImage(right_arrow_active, 400, 0);
    } else {
        ctx.drawImage(right_arrow, 400, 0);
    }
    if (upPressed) {
        ctx.drawImage(up_arrow_active, 300, 0);
    } else {
        ctx.drawImage(up_arrow, 300, 0);
    }
    if (downPressed) {
        ctx.drawImage(down_arrow_active, 200, 0);
    } else {
        ctx.drawImage(down_arrow, 200, 0);
    }
    if (leftPressed) {
        ctx.drawImage(left_arrow_active, 100, 0);
    } else {
        ctx.drawImage(left_arrow, 100, 0);
    }

    if(notes.length) {
        notes.forEach(note => {
            ctx.drawImage(note.img, note.x, note.y);

            if(note.x === 100 && !note.score && leftPressed) {
                note.score = calculateScore(note.y);
            }
            if (note.x === 200 && !note.score && downPressed) {
                note.score = calculateScore(note.y);
            }
            if (note.x === 300 && !note.score && upPressed) {
                note.score = calculateScore(note.y);
            }
            if (note.x === 400 && !note.score && rightPressed) {
                note.score = calculateScore(note.y);
            }
            if (note.y < 0 && !note.score) {
                note.score = 'Miss';
                combo = 0;
            }

            if (note.score && !note.displayed) {
                if (note.score == 'Good' || note.score == 'Perfect!') {
                    progress += 5;
                    combo++;
                }
                else {
                    progress -= 5;
                    combo = 0;
                }
            }

            // Display score for 20 frames
            if (note.score && note.displayed <= 20) {
                let score = new Image();
                
                switch (note.score) {
					case 'Miss':
                        score.src = './sprites/miss.png';
						break;
					case 'Bad':
                        score.src = './sprites/bad.png';
						break;
					case 'OK':
                        score.src = './sprites/ok.png';
						break;
					case 'Good':
                        score.src = './sprites/great.png';
						break;
					case 'Perfect!':
                        score.src = './sprites/perfect.png';
						break;
				}
                ctx.drawImage(score, 250, 150);
                note.displayed++;
            }
            note.y -= dx;
        });
    }

    if (combo >= 2) {
        comboText = `${combo} combo`;
        ctx.fillStyle = '#fff';
        ctx.fillText(comboText, 260, 225);
        ctx.strokeText(comboText, 260, 225);
    }
}

/* Controls */

let upPressed = false;
let downPressed = false;
let rightPressed = false;
let leftPressed = false;

document.addEventListener('keydown', keyDownHandler, false);
document.addEventListener('keyup', keyUpHandler, false);

export function keyDownHandler(e) {
	switch (e.key) {
		case 'w':
		case 'ArrowUp':
			upPressed = true;
			setTimeout(() => keyUpHandler(e), 100);
			break;
		case 's':
		case 'ArrowDown':
			downPressed = true;
			setTimeout(() => keyUpHandler(e), 100);
			break;
		case 'ArrowRight':
		case 'd':
			rightPressed = true;
			setTimeout(() => keyUpHandler(e), 100);
			break;
		case 'a':
		case 'ArrowLeft':
			leftPressed = true;
			setTimeout(() => keyUpHandler(e), 100);
			break;
	}
}

export function keyUpHandler(e) {
	switch (e.key) {
		case 'w':
		case 'ArrowUp':
			upPressed = false;
			break;
		case 's':
		case 'ArrowDown':
			downPressed = false;
			break;
		case 'd':
		case 'ArrowRight':
			rightPressed = false;
			break;
		case 'a':
		case 'ArrowLeft':
			leftPressed = false;
			break;
	}
}

/* Animation */

function gameLoop() {
    id = requestAnimationFrame(gameLoop)
}

if (body) {
    body.addEventListener('click', () => {
        cancelAnimationFrame(id)
    })
}