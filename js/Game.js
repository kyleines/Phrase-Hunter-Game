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
}