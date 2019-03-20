let upPressed = false;
let downPressed = false;
let rightPressed = false;
let leftPressed = false;

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {

    switch(e.key){
        case "ArrowUp":
            upPressed = true;
        case "ArrowDown":
            downPressed = true;
        case "ArrowRight":
            rightPressed = true;
        case "ArrowLeft":
            leftPressed = true;
    }
  
}

function keyUpHandler(e) {
    switch (e.key) {
        case "ArrowUp":
            upPressed = false;
        case "ArrowDown":
            downPressed = false;
        case "ArrowRight":
            rightPressed = false;
        case "ArrowLeft":
            leftPressed = false;
    }
}
