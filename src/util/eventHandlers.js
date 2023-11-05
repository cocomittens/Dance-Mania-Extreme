import { setControlState } from './controls.js';

export function keyDownHandler(e) {
    setControlState(e.key, true);
}

export function keyUpHandler(e) {
    setControlState(e.key, false);
}