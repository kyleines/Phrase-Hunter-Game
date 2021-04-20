/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = this.createPhrase();
        this.activePhrase = null;
    }

    /**
     * Creates phrases for use in game
     * @return  {Array}  An array of new phrase objects
     */
    createPhrase() {
        const phrases = [
            new Phrase('Mama Bear Chelsea'),
            new Phrase('Papa Kyle'),
            new Phrase('First Born Wesley'),
            new Phrase('Middle Child Warren'),
            new Phrase('Princess of the World Addison')
        ];
        return phrases;
    }

    /**
     * Selects random phrase from phrases property
     * @returns  {Object}  Phrase object chosen to be used
     */
    getRandomPhrase() {
        let randomIndex = Math.floor(Math.random() * 4);
        return this.phrases[randomIndex];
    }

    /**
     * Begins game by selecting a random phrase and displaying it to the user
     */
    startGame() {
        const startScreen = document.getElementById('overlay');
        startScreen.style.display = 'none';
        this.activePhrase = game.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }

    /**
     * Checks for winning move
     * @return  {boolean}   True if game has been won, false if game wasn't won
     */
    checkForWin() {
        let hiddenLetters = document.getElementsByClassName('hide');
        let win = '';
        return hiddenLetters.length === 0 ? win = true : win = false;
    }

    /**
     * Increases the value of the missed property
     * Removes a life from the scoreboard
     * Checks if player has remaining lives and ends game if player is out
     */
    removeLife() {
        let lives = document.getElementsByClassName('tries');
        lives[this.missed].innerHTML = `<img src="images/lostHeart.png" alt="Heart Icon" height="35" width="30">`;
        this.missed++;
        if (this.missed === 5) {
            this.gameOver(false);
        }
    }

    /**
     * Displays game over message
     * @param   {boolean}   gameWon -   Whether or not the user won the game
     */
    gameOver(gameWon) {
        const gameOverMessage = document.getElementById('game-over-message');
        if (gameWon) {
            gameOverMessage.parentElement.style.display = '';
            gameOverMessage.parentElement.className = 'win';
            gameOverMessage.innerHTML = 'You Win! Congratulations!';
        } else {
            gameOverMessage.parentElement.style.display = '';
            gameOverMessage.parentElement.className = 'lose';
            gameOverMessage.innerHTML = 'You Lose! Better luck next time!';
        }
    }

    /**
     * Handles onscreen keyboard button clicks
     * @param   {HTMLButtonElement} button  -   The clicked button element
     */
    handleInteraction(button) {
        console.log(button);
        button.disabled = true;
        if (this.activePhrase.checkLetter(button.innerHTML)) {
            button.className = 'chosen';
            this.activePhrase.showMatchedLetter(button.innerHTML);
            if (this.checkForWin()) {
                this.gameOver(this.checkForWin());
            }
        } else {
            button.className = 'wrong';
            this.removeLife();
        }
    }

    // gameReset() {
    //     document.getElementById('phrase').firstElementChild.innerHTML = '';
    //     const keys = document.getElementsByTagName('button');
    //     for (let key of keys) {
    //         console.log(key);
    //         key.disabled = false;
    //         key.className = 'key';
    //     }
    //     const hearts = document.getElementsByClassName('tries');
    //     for (let heart of hearts) {
    //         heart.innerHTML = `<img src="images/liveHeart.png" alt="Heart Icon" height="35" width="30">`
    //     }
    // }
}