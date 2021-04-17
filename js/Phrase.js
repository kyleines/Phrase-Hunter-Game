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

    /**
    * Checks if passed letter is in phrase
    * @param    {string}    letter - Letter to check
    * @returns  {boolean}   
    */
    checkLetter(letter) {
        return this.phrase.includes(letter);
    }

    /**
    * Displays passed letter on screen after a match is found
    * @param    {string}    letter  -   Letter to display
    */
    showMatchedLetter(letter) {
        let matched = document.getElementsByClassName(`hide letter ${letter}`);
        while (matched.length > 0) {
            matched[0].className = `show letter ${letter}`;
        }
    }
}