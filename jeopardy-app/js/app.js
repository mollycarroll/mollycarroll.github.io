/*
Problems to tackle:

Current behavior -- when HP 1 is answered, no appearance of message on submit, modal does not close, Astronomy 1 box turns blue

Player 2's turn -- need another question

Conditions for final round

*/


let player1Score = 0;
let player2Score = 0;

let turnPlayer = 1;

let roundNumber = 1;

// first astro question
const openQuestion = () => {
    document.querySelector('#question-modal-astro-10').style.display = 'block';

    document.querySelector('#question-form-astro-10').addEventListener('submit', submitAnswer);
}

const closeQuestion = () => {
    document.querySelector('#question-modal-astro-10').style.display = 'none';

    document.querySelector('#question-astro-10').style.backgroundColor = '#095CB0';

    document.querySelector('#question-astro-10').removeEventListener('click', openQuestion);
    
}

// first HP question
const openFirstHPQuestion = () => {
    document.querySelector('#question-modal-hp-10').style.display = 'block';

    document.querySelector('#question-form-hp-10').addEventListener('submit', submitFirstHPAnswer);
}

const closeFirstHPQuestion = () => {
    document.querySelector('#question-modal-hp-10').style.display = 'none';

    document.querySelector('#question-hp-10').style.backgroundColor = '#095CB0';

    document.querySelector('#question-hp-10').removeEventListener('click', openFirstHPQuestion);
}


// click event listeners for div rectangles
document.querySelector('#question-astro-10').addEventListener('click', openQuestion);

document.querySelector('#question-hp-10').addEventListener('click', openFirstHPQuestion);

// to switch rounds once turn is over
const switchPlayer = () => {
    if (turnPlayer === 1) {
        turnPlayer = 2;
        document.querySelector('#turn-player').innerHTML = 'Player 2';

    } else if (turnPlayer === 2) {
        turnPlayer = 1;
        document.querySelector('#turn-player').innerHTML = 'Player 1';
        roundNumber += 1;

        console.log('round updated to round: ' + roundNumber);
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
        document.querySelector('#update-correct-astro-10').style.display = 'block';

        addToScore(10);
        
        setTimeout(closeQuestion, 3000);

    // if incorrect answer is chosen
    } else if (!gas.checked) {

        document.querySelector('#update-incorrect-astro-10').style.display = 'block';

        setTimeout(closeQuestion, 3000);
    }

    switchPlayer();

}

const submitFirstHPAnswer = (e) => {
    e.preventDefault();

    const owl = document.querySelector('#owl');
    console.log(owl);

    if (owl.checked) {
        document.querySelector('#update-correct-hp-10').style.display = 'block';

        addToScore(10);
        
        setTimeout(closeFirstHPQuestion, 3000);

    } else if (!owl.checked) {

        document.querySelector('#update-incorrect-hp-10').style.display = 'block';

        setTimeout(closeFirstHPQuestion, 3000);
    }

    switchPlayer();

}