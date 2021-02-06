/*
Problems to tackle:

Player 2's turn -- need another question

Conditions for final round

*/


let player1Score = 0;
let player2Score = 0;

let turnPlayer = 1;

let roundNumber = 1;


const openQuestion = () => {
    document.querySelector('#question-modal-astro-10').style.display = 'block';
    document.querySelector('form').addEventListener('submit', submitAnswer);
}

const closeQuestion = () => {
    document.querySelector('#question-modal-astro-10').style.display = 'none';

    document.querySelector('#question-astro-10').style.backgroundColor = '#095CB0';

    document.querySelector('#question-astro-10').removeEventListener('click', openQuestion);
    
}

// click event listener(s) for div rectangle(s)
document.querySelector('#question-astro-10').addEventListener('click', openQuestion);

// to switch rounds once turn is over
const switchPlayer = () => {
    if (turnPlayer === 1) {
        turnPlayer = 2;
        document.querySelector('#turn-player').innerHTML = 'Player 2';

    } else if (turnPlayer === 2) {
        turnPlayer = 1;
        document.querySelector('#turn-player').innerHTML = 'Player 1';
        roundNumber += 1;
    }
}

// to add the specified score amount to the player's score
const addToScore = (num) => {
    if (turnPlayer === 1) {
        player1Score = player1Score + num;
        document.querySelector('#player-1-score').innerHTML = player1Score;

    } else if (turnPlayer === 2) {
        player2Score += num;
        document.querySelector('#player-2-score').innerHTML = player2Score;
    }

}



const submitAnswer = (e) => {
    e.preventDefault();

    const gas = document.querySelector('#gas');

    // if correct answer is chosen
    if (gas.checked) {
        document.querySelector('.update-correct').style.display = 'block';

        addToScore(10);
        
        setTimeout(closeQuestion, 3000);

    // if incorrect answer is chosen
    } else if (!gas.checked) {

        document.querySelector('.update-incorrect').style.display = 'block';

        setTimeout(closeQuestion, 3000);
    }

    switchPlayer();

}
