/*
Problems to tackle:

Adding functions for each question?

Can select if element attribute CONTAINS something https://stackoverflow.com/questions/31773599/can-i-use-an-attribute-selector-for-contains-in-queryselector 

https://drafts.csswg.org/selectors/#overview

TODO: 

Add question and answer content in HTML
Style each question/answer in CSS

*/

// GENERIC VARIABLES AND FUNCTIONS

let player1Score = 0;
let player2Score = 0;

let turnPlayer = 1;

let roundNumber = 1;

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
        document.querySelector('#round-number').innerHTML = roundNumber;
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

// QUESTION-SPECIFIC FUNCTIONS

// first astro question
const openFirstAstroQuestion = () => {
    document.querySelector('#question-modal-astro-10').style.display = 'block';

    document.querySelector('#question-form-astro-10').addEventListener('submit', submitFirstAstroAnswer);
}

const closeFirstAstroQuestion = () => {
    document.querySelector('#question-modal-astro-10').style.display = 'none';

    document.querySelector('#question-astro-10').style.backgroundColor = '#095CB0';

    document.querySelector('#question-astro-10').removeEventListener('click', openFirstAstroQuestion);
    
}


const submitFirstAstroAnswer = (e) => {
    e.preventDefault();

    const gas = document.querySelector('#gas');

    // if correct answer is chosen
    if (gas.checked) {
        document.querySelector('#update-correct-astro-10').style.display = 'block';

        addToScore(10);
        
        setTimeout(closeFirstAstroQuestion, 3000);

    // if incorrect answer is chosen
    } else if (!gas.checked) {

        document.querySelector('#update-incorrect-astro-10').style.display = 'block';

        setTimeout(closeFirstAstroQuestion, 3000);
    }

    switchPlayer();

}

// second astro question
const openSecondAstroQuestion = () => {
    document.querySelector('#question-modal-astro-20').style.display = 'block';

    document.querySelector('#question-form-astro-20').addEventListener('submit', submitSecondAstroAnswer);
}

const closeSecondAstroQuestion = () => {
    document.querySelector('#question-modal-astro-20').style.display = 'none';

    document.querySelector('#question-astro-20').style.backgroundColor = '#095CB0';

    document.querySelector('#question-astro-20').removeEventListener('click', openSecondAstroQuestion);
    
}


const submitSecondAstroAnswer = (e) => {
    e.preventDefault();

    const solarStorms = document.querySelector('#solar-storms');

    // if correct answer is chosen
    if (solarStorms.checked) {
        document.querySelector('#update-correct-astro-20').style.display = 'block';

        addToScore(20);
        
        setTimeout(closeSecondAstroQuestion, 3000);

    // if incorrect answer is chosen
    } else if (!solarStorms.checked) {

        document.querySelector('#update-incorrect-astro-20').style.display = 'block';

        setTimeout(closeSecondAstroQuestion, 3000);
    }

    switchPlayer();

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

const submitFirstHPAnswer = (e) => {
    e.preventDefault();

    const owl = document.querySelector('#owl');

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

// first geo question
const openFirstGeoQuestion = () => {
    document.querySelector('#question-modal-geo-10').style.display = 'block';

    document.querySelector('#question-form-geo-10').addEventListener('submit', submitFirstGeoAnswer);
}

const closeFirstGeoQuestion = () => {
    document.querySelector('#question-modal-geo-10').style.display = 'none';

    document.querySelector('#question-geo-10').style.backgroundColor = '#095CB0';

    document.querySelector('#question-geo-10').removeEventListener('click', openFirstGeoQuestion);
}

const submitFirstGeoAnswer = (e) => {
    e.preventDefault();

    const summer = document.querySelector('#summer');

    if (summer.checked) {
        document.querySelector('#update-correct-geo-10').style.display = 'block';

        addToScore(10);
        
        setTimeout(closeFirstGeoQuestion, 3000);

    } else if (!summer.checked) {

        document.querySelector('#update-incorrect-geo-10').style.display = 'block';

        setTimeout(closeFirstGeoQuestion, 3000);
    }

    switchPlayer();

}

// CLICK EVENT LISTENERS FOR BOXES

document.querySelector('#question-astro-10').addEventListener('click', openFirstAstroQuestion);

document.querySelector('#question-astro-20').addEventListener('click', openSecondAstroQuestion);

document.querySelector('#question-hp-10').addEventListener('click', openFirstHPQuestion);

document.querySelector('#question-geo-10').addEventListener('click', openFirstGeoQuestion);