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

document.getElementById('startBtn').addEventListener('click', function (event) {
    let menu = document.getElementsByClassName('menuContainer')[0];
    let canvas = document.getElementsByClassName('canvasContainer')[0];
    let song = getSong(1);
    body.style.backgroundImage = `url('./backgrounds/ppp_bg.png')`;

    menu.style.display = 'none';
    body.style.backgroundImage = `url('./backgrounds/ppp_bg.png')`;

    canvas.style.display = 'block';
    let audio = new Audio("./songs/ppp.mp3");
    audio.play();
    let bpm = 375;
    drawNote([]);
    for (let i = 0; i < song.length; i++) {
        let beat = song[i];
        if (beat) {
            setTimeout(() => drawNote(beat), i * bpm);
        }
    }
});

document.getElementById('songBtn').addEventListener('click', function(event) {
	let menu = document.getElementsByClassName('menuContainer')[0];
    let songs = document.getElementsByClassName('songsContainer')[0];
	menu.style.display = 'none';
    songs.style.display = 'block';
    let menuAudio = new Audio('./songs/bensound-popdance.mp3');
    menuAudio.play();
	document.getElementById('stylesheet').href = './css/songs.css';
	document.addEventListener('keydown', scrollMenu(songsDownHandler, 400), false);
	document.addEventListener('keydown', function(e) {
		if (e.key === 'Enter') {
            menuAudio.pause();
			document.getElementById('stylesheet').href = './css/styles.css';
            let active = document.getElementsByClassName('active')[0].classList.contains('c-3');
			let menu = document.getElementsByClassName('songsContainer')[0];
			let canvas = document.getElementsByClassName('canvasContainer')[0];
            let audio;
            let bpm;
            let song;
			menu.style.display = 'none';
            if (active) {
                audio = new Audio('./songs/ppp.mp3');
                body.style.backgroundImage = "url('./backgrounds/ppp_bg.png')";
                bpm = 375;
                song = getSong(1);
            } else {
                audio = new Audio('./songs/www.ogg');
                body.style.backgroundImage = `url('./backgrounds/www_bg.png')`;
                bpm = 400;
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

let dx = 1;
let ctx;
let notes = [];
let combo = 0;
let speed = 1; // lower is faster
let y = 600; // vertical offset
let run;

let drawNote = (beat) => {
    if(beat) {
        let noteX;
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

function draw(notes) {
    ctx.font = "bold 30px Helvetica";
    ctx.strokeStyle = '#000';

    ctx.clearRect(0, 0, 600, 600); // clear the canvas
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
                if(note.y <= 30 && note.y >= 25) note.score = 'Bad';
                if(note.y <= 25 && note.y >= 20) note.score = 'OK';
                if (note.y <= 20 && note.y >= 10) note.score = 'Good';
                if (note.y <= 10) note.score = 'Perfect!';
            }

            if (note.x === 200 && !note.score && downPressed) {
                if (note.y <= 30 && note.y >= 25) note.score = 'Bad';
                if (note.y <= 25 && note.y >= 20) note.score = 'OK';
                if (note.y <= 20 && note.y >= 10) note.score = 'Good';
                if (note.y <= 10) note.score = 'Perfect!';
            }

            if (note.x === 300 && !note.score && upPressed) {
                if (note.y <= 30 && note.y >= 25) note.score = 'Bad';
                if (note.y <= 25 && note.y >= 20) note.score = 'OK';
                if (note.y <= 20 && note.y >= 10) note.score = 'Good';
                if (note.y <= 10) note.score = 'Perfect!';
            }

            if (note.x === 400 && !note.score && rightPressed) {
                if (note.y <= 30 && note.y >= 25) note.score = 'Bad';
                if (note.y <= 25 && note.y >= 20) note.score = 'OK';
                if (note.y <= 20 && note.y >= 10) note.score = 'Good';
                if (note.y <= 10) note.score = 'Perfect!';
            }

            if (note.y < 0 && !note.score) {
                note.score = 'Miss';
                combo = 0;
            }

            if (note.score && !note.displayed) {
                if (note.score == 'Good' || note.score == 'Perfect!') combo++;
                else combo = 0;
            }

            // Display score for 70 frames
            if (note.score && note.displayed <= 70) {
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
        let comboText = `${combo} combo`;
        ctx.fillStyle = '#fff';
        ctx.fillText(comboText, 260, 225);
        ctx.strokeText(comboText, 260, 225);
    }
}


function gameLoop() {
    id = requestAnimationFrame(gameLoop)
}

if(body) {
    body.addEventListener('click', () => {
        cancelAnimationFrame(id)
    })
}

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