/************************************************
Treehouse FSJS Techdegree:
Project 4 - Phrase Hunter Game
************************************************/

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
            new Phrase('Every Moment is a Fresh Beginning'),
            new Phrase('Die with Memories Not Dreams'),
            new Phrase('Ask Believe Recieve'),
            new Phrase('What You Think You Become'),
            new Phrase('The Ancestor of Every Action is Thought'),
            new Phrase('Thoughts Become Things'),
            new Phrase('Aspire to Inspire Before We Expire'),
            new Phrase('Let the Beauty of What You Love Be What You Do'),
            new Phrase('A Happy Soul is the Best Shield for a Cruel World'),
            new Phrase('Hakuna Matata')
        ];
        return phrases;
    }

    /**
     * Selects random phrase from phrases property
     * @returns  {Object}  Phrase object chosen to be used
     */
    getRandomPhrase() {
        let randomIndex = Math.floor(Math.random() * 10);
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
        const phraseReveal = `<br><br>Phrase:<br>"${game.activePhrase.phrase}"`;
        if (gameWon) {
            gameOverMessage.parentElement.style.display = '';
            gameOverMessage.parentElement.className = 'win';
            gameOverMessage.innerHTML = `You Win! Congratulations! ${phraseReveal}`;
            this.gameReset();
        } else {
            gameOverMessage.parentElement.style.display = '';
            gameOverMessage.parentElement.className = 'lose';
            gameOverMessage.innerHTML = `You Lose! Better luck next time! ${phraseReveal}`;
            this.gameReset();
        }
    }

    /**
     * Handles onscreen keyboard button clicks
     * @param   {HTMLButtonElement} button  -   The clicked button element
     */
    handleInteraction(button) {
        if (button !== undefined) {
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
    }

    /**
     * Resets phrase, keys, and hearts once game is over
     */
    gameReset() {
        document.getElementById('phrase').firstElementChild.innerHTML = '';
        const keys = document.getElementsByTagName('button');
        for (let key of keys) {
            if (key.className === 'wrong' || key.className === 'chosen') {
            key.disabled = false;
            key.className = 'key';
            }
        }
        const hearts = document.getElementsByClassName('tries');
        for (let heart of hearts) {
            heart.innerHTML = `<img src="images/liveHeart.png" alt="Heart Icon" height="35" width="30">`
        }
    }

    /**
     * Handles keyup events ONLY if game has started
     */
    handleKeyup(e) {
        const keys = document.getElementsByClassName('key');
        const gameOverMessage = document.getElementById('game-over-message');
        if (gameOverMessage.parentElement.style.display !== '') {
            for (let key of keys) {
                if (e.key.toLowerCase() === key.innerHTML) {
                    return key;
                }
            }
        }
    }
}