import { upPressed, downPressed, rightPressed, leftPressed } from './controls.js';
import { ARROW_DOWN_SRC, ARROW_RIGHT_SRC, ARROW_LEFT_SRC, ARROW_UP_SRC, ARROW_DOWN_ACTIVE_SRC, ARROW_LEFT_ACTIVE_SRC, ARROW_RIGHT_ACTIVE_SRC, ARROW_UP_ACTIVE_SRC } from "./constants";

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

let right_arrow = new Image();
let left_arrow = new Image();
let up_arrow = new Image();
let down_arrow = new Image();

let right_arrow_active = new Image();
let left_arrow_active = new Image();
let up_arrow_active = new Image();
let down_arrow_active = new Image();

right_arrow.src = ARROW_RIGHT_SRC;
left_arrow.src = ARROW_LEFT_SRC;
up_arrow.src = ARROW_UP_SRC;
down_arrow.src = ARROW_DOWN_SRC;

right_arrow_active.src = ARROW_RIGHT_ACTIVE_SRC;
left_arrow_active.src = ARROW_LEFT_ACTIVE_SRC;
up_arrow_active.src = ARROW_UP_ACTIVE_SRC;
down_arrow_active.src = ARROW_DOWN_ACTIVE_SRC;

let results = { 'Perfect': 0,
    'Great': 0,
    'OK': 0,
    'Bad': 0,
    'Miss': 0
};

export const calculateScore = (pixels) => {
    if (pixels <= 30 && pixels >= 25) {
        results['Bad']++;
        return 'Bad';
    }
    if (pixels <= 25 && pixels >= 20) {
        results['OK']++;
        return 'OK';
    }
    if (pixels <= 20 && pixels >= 10) {
        results['Great']++;
        return 'Good';
    }
    if (pixels <= 10) {
        results['Perfect']++;
        return 'Perfect!';
    }
}


export const drawNote = (beat) => {
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

export const draw = (notes) => {
    ctx.font = "bold 30px Helvetica";
    progressGradient = ctx.createLinearGradient(550, 400 - progress, 580, 400);
    progressGradient.addColorStop(0, "#40CBEA");
    progressGradient.addColorStop(1, "#FE86C1");

    ctx.fillStyle = progressGradient;
    ctx.strokeStyle = '#FFF';

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
        let lastNote;
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
                results['Miss']++;
                note.score = 'Miss';
                combo = 0;
            }

            if (note.score && !note.displayed) {
                if (note.score == 'Good' || note.score == 'Perfect!') {
                    if (progress < 300) progress += 5;
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
                if (!lastNote) lastNote = note;
                if (lastNote.displayed >= note.displayed && lastNote !== note){
                    lastNote.displayed = 21;
                    lastNote = note;
                }
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
        ctx.strokeStyle = '#000';
        ctx.fillText(comboText, 260, 225);
        ctx.strokeText(comboText, 260, 225);
    }
}
