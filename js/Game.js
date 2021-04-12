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
     * @return  {Array} An array of new phrase objects
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
}