/*
TODO:

Figure out how to persist functionality after first question is answered -- 2nd and 3rd not working 

*/

let player1Score = 0;
let player2Score = 0;

let turnPlayer = 1;

let roundNumber = 1;

let questionBank = [
    {
        'statement': 'Jupiter is mostly made of this substance.',
        'option1': 'What is rock?',
        'option2': 'What is gas?',
        'option3': 'What is liquid?',
        'option4': 'What is metal?',
        'points': '10',
        'identifier': 'astro',
        'name': 'first-astro',
        'correct': 'option2'
    },
    {
        'statement': 'Harry Potter brought this type of pet to Hogwarts.',
        'option1': 'What is a snake?',
        'option2': 'What is a cat?',
        'option3': 'What is an owl?',
        'option4': 'What is a toad?',
        'points': '10',
        'identifier': 'hp',
        'name': 'first-hp',
        'correct': 'option3'
    },
    {
        'statement': 'It is this season in Australia in December.',
        'option1': 'What is winter?',
        'option2': 'What is spring?',
        'option3': 'What is summer?',
        'option4': 'What is fall?',
        'points': '10',
        'identifier': 'geo',
        'name': 'first-geo',
        'correct': 'option3'
    }
]

// selectQuestion fires when a user clicks a question box

const selectQuestion = (question) => {
    console.log('selectQuestion fired line 56');

    // dynamically display form content based on question param

    document.querySelector('.question-form').innerHTML = '<p>' + question.statement + '</p><br><input type="radio" id="option1" name="' + question.name + '"><label>' + question.option1 + '</label><br><input type="radio" id="option2" name="' + question.name + '"><label>' + question.option2 + '</label><br><input type="radio" id="option3" name="' + question.name + '"><label>' + question.option3 + '</label><br><input type="radio" id="option4" name="' + question.name + '"><label>' + question.option4 + '</label><br><button type="submit" id="question-' + question.identifier + '-' + question.points + '-submit">Submit</button>';

    // clear correct/incorrect message
    document.querySelector('.message-correct').style.display = 'none';
    document.querySelector('.message-incorrect').style.display = 'none';

    // event listener on form submit to fire checkAnswer

    document.querySelector('.question-form').addEventListener('submit', function(e) {
        e.preventDefault();
        checkAnswer(question)
    });
    
}

// checkAnswer fires when a user submits the answer form, takes a question object as an argument

const checkAnswer = (question) => {
    console.log('checkAnswer fired line 74');

    // console.log('question.correct = ' + question.correct)

    console.log(document.querySelector('input#' + question.correct));

    if (document.querySelector('input#' + question.correct).checked === true) {

        document.querySelector('.message-correct').style.display = 'block';

        addToScore(parseInt(question.points));

    } else if (document.querySelector('input#' + question.correct).checked === false) {

        document.querySelector('.message-incorrect').style.display = 'block';

    }

    switchPlayer();

    document.querySelector('#question-' + question.identifier + '-' + question.points).style.backgroundColor = '#095CB0';

    document.querySelector('#question-' + question.identifier + '-' + question.points).onclick = "";

}

// TODO:

// it stays on Player 2 after P2's first turn, but goes to Round 2
// the rounds progress too fast -- how to fix?

// to switch rounds once turn is over
const switchPlayer = () => {

    if (turnPlayer === 1) {
        // console.log('turn player is ' + turnPlayer)
        turnPlayer = 2;
        document.querySelector('#turn-player').innerHTML = 'Player 2';

    } else if (turnPlayer === 2) {
        // console.log('turn player is ' + turnPlayer)
        turnPlayer = 1;
        document.querySelector('#turn-player').innerHTML = 'Player 1'; 
        roundNumber += 1;

        // console.log('round updated to round: ' + roundNumber);
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


/* 


                
*/