let right = new Image();
let left = new Image();
let up = new Image();
let down = new Image();

right.src = "./sprites/arrow_right_note.png";
left.src = "./sprites/arrow_left_note.png";
up.src = "./sprites/arrow_up_note.png";
down.src = "./sprites/arrow_down_note.png";

let song = [
    null, null, null, null,
    null, null, null, null,
    null, null, null, null,
    null, null, null, null,
    [left], null, [right], null,
    [down], null, [up], null,
    [right], null, [left], null,
    [up], null, [down], null,
    [left], null, [up], null,
    [down], null, [right], null,
    [left], null, [down], null,
    [right], null, [up], null,
    [right], null, [down], null,
    [up], null, [left], null,
    [right], null, [up], null,
    [left], null, [down], null,
    [left], null, [down], null,
    [up], null, [right], null,
    [up], null, [down], null,
    [left], null, null, [right],
    [down], null, [up], null,
    [right], null, [left], null,
    [right], null, [up], null,
    [down], null, null, [up],
    [right], null, [up], null,
    [down], null, [left], null,
    [down], null, [up], null,
    [right], null, null, [left],
    [up], null, [right], null,
    [left], null, [down], null,
    [left], null, [right], null,
    [up], null, null, [down],
    [left, right], null, [left], [right],
    [up], [down], [up], [down],
    [right], null, [left], null,
    [right], [left], [down], [up],
    [left, right], null, [right], [down],
    [left], [up], [left], [up],
    [down], null, [right], null,
    [down], [right], [up], [left],
    [up], null, [down], null,
    [left], [up, down], [right], [up, down],
    [down], null, [up], null,
    [right], [up, down], [left], [up, down],
    [right], null, [left], null,
    [down], [left, right], [up], [left, right],
    [left], null, [right], null,
    [left, right], null, null, null,
    [left], null, [right], null,
    [down], null, [up], null,
    [down], null, [right], null,
    [left], null, null, [right],
    [down], null, [up], null,
    [right], null, [left], null,
    [right], null, [up], null,
    [down], null, null, [up],
    [right], [down], [up], [left],
    [right], [up], [left], [down],
    [left], [up], [down], [right],
    [left], [down], [right], [up],
    [right], [up], [down], [left],
    [right], [left], [up], [down],
    [left], [down], [up], [right],
    [left], [right], [down], [left, right]

];

let dx = 1;
let ctx;
let notes = [];
let combo = 0;

let CanvasXSize = 600;
let CanvasYSize = 600;
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
                    y: 600, 
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
    ctx.font = "30px Helvetica";
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
                ctx.fillText(combo, 500, 100);
                note.displayed++;
            }


            note.y -= dx;
        });
    }
    ctx.fillText(combo, 500, 200);
}

document.querySelectorAll('.button')[0].addEventListener('click', function (event) {
    let menu = document.getElementsByClassName('menuContainer')[0];
    let canvas = document.getElementsByClassName('canvasContainer')[0];
    menu.style.display = 'none';
    canvas.style.display = 'block';
    let audio = new Audio("./songs/ppp.mp3");
    audio.play();
    let bpm = 375;
    drawNote([]);
    for(let i = 0; i < song.length; i++) {
        let beat = song[i];
        if (beat) {
            setTimeout(() => drawNote(beat), i * bpm);
        } 
    }

});

const body = document.getElementsByTagName('body')[0];
let id;

function gameLoop() {
    id = requestAnimationFrame(gameLoop)
}
if(body) {
    body.addEventListener('click', () => {
        cancelAnimationFrame(id)
    })
}

let right_arrow = new Image();
let left_arrow = new Image();
let up_arrow = new Image();
let down_arrow = new Image();

right_arrow.src = "./sprites/arrow_right.png";
left_arrow.src = "./sprites/arrow_left.png";
up_arrow.src = "./sprites/arrow_up.png";
down_arrow.src = "./sprites/arrow_down.png";

let right_arrow_active = new Image();
let left_arrow_active = new Image();
let up_arrow_active = new Image();
let down_arrow_active = new Image();

right_arrow_active.src = "./sprites/arrow_right_active.png";
left_arrow_active.src = "./sprites/arrow_left_active.png";
up_arrow_active.src = "./sprites/arrow_up_active.png";
down_arrow_active.src = "./sprites/arrow_down_active.png";

let upPressed = false;
let downPressed = false;
let rightPressed = false;
let leftPressed = false;

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
    switch (e.key) {
        case "ArrowUp":
            upPressed = true;
            setTimeout(() => keyUpHandler(e), 100);
            break;
        case "ArrowDown":
            downPressed = true;
            setTimeout(() => keyUpHandler(e), 100);
            break;
        case "ArrowRight":
            rightPressed = true;
            setTimeout(() => keyUpHandler(e), 100);
            break;
        case "ArrowLeft":
            leftPressed = true;
            setTimeout(() => keyUpHandler(e), 100);
            break;
    }
}

function keyUpHandler(e) {
    switch (e.key) {
        case "ArrowUp":
            upPressed = false;
            break;
        case "ArrowDown":
            downPressed = false;
            break;
        case "ArrowRight":
            rightPressed = false;
            break;
        case "ArrowLeft":
            leftPressed = false;
            break;
    }
}