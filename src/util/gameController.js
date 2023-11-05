export default class GameController {
    constructor() {
        this.id = null; // This will hold the requestAnimationFrame ID
    }

    gameLoop() {
        // Update game state and render frame
        this.id = requestAnimationFrame(this.gameLoop.bind(this));
    }

    start() {
        // Call this method to start the game
        this.gameLoop();
    }

    stop() {
        // Call this method to stop the game
        if (this.id !== null) {
            cancelAnimationFrame(this.id);
            this.id = null;
        }
    }
}

