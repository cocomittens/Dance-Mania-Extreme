// Control state
let upPressed = false;
let downPressed = false;
let rightPressed = false;
let leftPressed = false;

export const setControlState = (key, isPressed) => {
    switch (e.key) {
		case 'w':
		case 'ArrowUp':
			upPressed = isPressed ? true : false;
			break;
		case 's':
		case 'ArrowDown':
			downPressed = isPressed ? true : false;
			break;
		case 'ArrowRight':
		case 'd':
			rightPressed = isPressed ? true : false;
			break;
		case 'a':
		case 'ArrowLeft':
			leftPressed = isPressed ? true : false;
			break;
	}
};

export { upPressed, downPressed, rightPressed, leftPressed };