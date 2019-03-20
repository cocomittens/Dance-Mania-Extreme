let upPressed = false;
let downPressed = false;
let rightPressed = false;
let leftPressed = false;

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function handleInput(key, action) {
    const canvas = document.getElementById('canvas');
    const c = canvas.getContext('2d');

    let right_arrow = new Image();
    let left_arrow = new Image();
    let up_arrow = new Image();
    let down_arrow = new Image();

    let right_arrow_active = new Image();
    let left_arrow_active = new Image();
    let up_arrow_active = new Image();
    let down_arrow_active = new Image();

    right_arrow.src = "/Users/cgripens/Desktop/AppAcademy/dmr/Sprites/arrow_right.png";
    left_arrow.src = "/Users/cgripens/Desktop/AppAcademy/dmr/Sprites/arrow_left.png";
    up_arrow.src = "/Users/cgripens/Desktop/AppAcademy/dmr/Sprites/arrow_up.png";
    down_arrow.src = "/Users/cgripens/Desktop/AppAcademy/dmr/Sprites/arrow_down.png";

    right_arrow_active.src = "/Users/cgripens/Desktop/AppAcademy/dmr/Sprites/arrow_right_active.png";
    left_arrow_active.src = "/Users/cgripens/Desktop/AppAcademy/dmr/Sprites/arrow_left_active.png";
    up_arrow_active.src = "/Users/cgripens/Desktop/AppAcademy/dmr/Sprites/arrow_up_active.png";
    down_arrow_active.src = "/Users/cgripens/Desktop/AppAcademy/dmr/Sprites/arrow_down_active.png";

    if(action === "down") {
        switch(key){
            case "ArrowUp":
                c.drawImage(up_arrow_active, 200, 0);
                break;
            case "ArrowDown":
                c.drawImage(down_arrow_active, 400, 0);
                break;
            case "ArrowRight":
                c.drawImage(right_arrow_active, 100, 0);
                break;
            case "ArrowLeft":
                c.drawImage(left_arrow_active, 300, 0);
                break;
        }
    } else {
        switch (key) {
            case "ArrowUp":
                c.drawImage(up_arrow, 200, 0);
                break;
            case "ArrowDown":
                c.drawImage(down_arrow, 400, 0);
                break;
            case "ArrowRight":
                c.drawImage(right_arrow, 100, 0);
                break;
            case "ArrowLeft":
                c.drawImage(left_arrow, 300, 0);
                break;
        }
    }
}

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

    handleInput(e.key, "down")
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

    handleInput(e.key, "up")
}
