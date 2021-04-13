/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }

    /**
     * Display phrase on game board
     */
    addPhraseToDisplay() {
        const ul = document.getElementById('phrase').firstElementChild;
        for (let item of this.phrase) {
            if (item !== ' ') {
                ul.innerHTML += `<li class="hide letter ${item}">${item}</li>`;
            } else {
                ul.innerHTML += `<li class="space"> </li>`;
            }
        }
    }
}