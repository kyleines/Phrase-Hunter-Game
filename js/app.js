/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

// ********************
let game = '';
document.getElementById('btn__reset').addEventListener('click', () => {
    game = new Game();
    game.startGame();
})

document.getElementById('qwerty').addEventListener('click', (e) => {
    if (e.target.className === 'key') {
        game.handleInteraction(e.target);
    }
})
// ********************



// const game = new Game();
// game.startGame();
// console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);

// game.getRandomPhrase().addPhraseToDisplay();

// game.phrases.forEach((phrase, index) => {
//     console.log(`Phrase ${index} - phrase: ${phrase.phrase}`);
// })

// const logPhrase = (phrase) => {
//     console.log(`Phrase - phrase: `, phrase.phrase);
// }

// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());