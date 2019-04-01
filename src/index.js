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
    [left], null, [up], null
];

let dx = 1.5;
let ctx;
let notes = [];

let CanvasXSize = 600;
let CanvasYSize = 600;
let speed = 100; // lower is faster
let y = 600; // vertical offset

let drawNote = (note) => {
    if(note) {
        let noteX;
        if (note.src.includes('left')) noteX = 100;
        if (note.src.includes('down')) noteX = 200;
        if (note.src.includes('up')) noteX = 300;
        if (note.src.includes('right')) noteX = 400;
        notes.push({ img: note, x: noteX, y: 600 });
    }

    ctx = document.getElementById('canvas').getContext('2d');
    return setInterval(() => draw(notes), speed);
}

function draw(notes) {
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
            note.y -= dx;
        });
    }
}

document.querySelectorAll('.button')[0].addEventListener('click', function (event) {
    let menu = document.getElementsByClassName('menuContainer')[0];
    let canvas = document.getElementsByClassName('canvasContainer')[0];
    menu.style.display = 'none';
    canvas.style.display = 'block';
    let audio = new Audio("./songs/ppp.mp3");
    audio.play();
    let bpm = 300;
    for(let i = 0; i < song.length; i++) {
        let note = song[i];
        if (note) {
            setTimeout(() => drawNote(note[0]), i * bpm);
        } else {
            setTimeout(() => drawNote(null), i * bpm);

        }
    }

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
            break;
        case "ArrowDown":
            downPressed = true;
            break;
        case "ArrowRight":
            rightPressed = true;
            break;
        case "ArrowLeft":
            leftPressed = true;
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