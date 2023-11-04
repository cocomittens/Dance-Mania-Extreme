import { upPressed, downPressed, rightPressed, leftPressed, setControlState } from './controls.js';

export function keyDownHandler(e) {
	setTimeout(() => keyUpHandler(e), 150);
	setControlState(e.key, true);
}

export function keyUpHandler(e) {
	setControlState(e.key, false);
}
