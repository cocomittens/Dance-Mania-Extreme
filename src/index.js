
document.querySelectorAll('.button')[0].addEventListener('click', function (event) {
    let menu = document.getElementsByClassName('menuContainer')[0];
    let canvas = document.getElementsByClassName('canvasContainer')[0];
    menu.style.display = 'none';
    canvas.style.display = 'block';
    let audio = new Audio("./songs/ppp.mp3");
    audio.play();

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


var img = new Image();

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

// User Variables - customize these to change the image being scrolled, its
// direction, and the speed.

img.src = './sprites/song_template.png';
var CanvasXSize = 600;
var CanvasYSize = 600;
var speed = 10; // lower is faster
var scale = 1.05;
var y = 600; // vertical offset

// Main program

var dx = 1.5;
var imgW;
var imgH;
var x = 0;
var clearX;
var clearY;
var ctx;

let upPressed = false;
let downPressed = false;
let rightPressed = false;
let leftPressed = false;

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

img.onload = function () {
    imgW = img.width * scale;
    imgH = img.height * scale;

    if (imgW > CanvasXSize) {
        // image larger than canvas
        x = CanvasXSize - imgW;
    }
    if (imgW > CanvasXSize) {
        // image width larger than canvas
        clearX = imgW;
    } else {
        clearX = CanvasXSize;
    }

    if (imgH > CanvasYSize) {
        // image height larger than canvas
        clearY = imgH;
    } else {
        clearY = CanvasYSize;
    }

    // get canvas context
    ctx = document.getElementById('canvas').getContext('2d');

    // set refresh rate
    return setInterval(draw, speed);
}


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


function draw() {
    ctx.clearRect(0, 0, clearX, clearY); // clear the canvas
    
    // reset, start from beginning
    if (x > CanvasXSize) {
        x = -imgW + x;
    }
    // draw additional image1
    if (x > 0) {
        ctx.drawImage(img, -imgW + x, y, imgW, imgH);
    }
    // draw additional image2
    if (x - imgW > 0) {
        ctx.drawImage(img, -imgW * 2 + x, y, imgW, imgH);
    }
    
    // draw image
    
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
    
    ctx.drawImage(img, x, y, imgW, imgH);
    



    // amount to move
    y -= dx;
}
