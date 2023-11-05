// Control state
let upPressed = false;
let downPressed = false;
let rightPressed = false;
let leftPressed = false;

export const setControlState = (key, isPressed) => {
    switch (key) {
        case 'w':
        case 'ArrowUp':
            upPressed = isPressed;
            break;
        case 's':
        case 'ArrowDown':
            downPressed = isPressed;
            break;
        case 'd':
        case 'ArrowRight':
            rightPressed = isPressed;
            break;
        case 'a':
        case 'ArrowLeft':
            leftPressed = isPressed;
            break;
    }
};

export { upPressed, downPressed, rightPressed, leftPressed };