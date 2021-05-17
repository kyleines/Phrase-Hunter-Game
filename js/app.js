/************************************************
Treehouse FSJS Techdegree:
Project 4 - Phrase Hunter Game
************************************************/



/*
Dear Reviewer,
I appreciate you for taking the time to review my project! 
Your feedback is important to me and crucial to my growth as a developer.
With the following code I hope to earn the "Exceeds Expectations" grade, and 
I humbly request that you reject my submission if I don't meet those requirements.

Thank you again!
-Kyle
*/



// Creates new Game class when 'Start Game' button is clicked
let game = '';
document.getElementById('btn__reset').addEventListener('click', () => {
    game = new Game();
    game.startGame();
})

// Adds event listener to onscreen html keyboard
document.getElementById('qwerty').addEventListener('click', (e) => {
    if (e.target.className === 'key') {
        game.handleInteraction(e.target);
    }
})

// Adds event listener for keyup events ONLY if game has started
document.addEventListener('keyup', (e) => {
    if (game !== '') {
        game.handleInteraction(game.handleKeyup(e));
    }
})