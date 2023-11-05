import { songsMenu } from './utils.js';
import GameController from './gameController.js';

const gameController = new GameController();
gameController.start(); // To start the game loop

// Event listener to stop the game on a body click
document.body.addEventListener('click', () => gameController.stop());

songsMenu();