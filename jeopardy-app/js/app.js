/*

extra question sources: https://thoughtcatalog.com/katee-fletcher/2020/04/star-wars-trivia-questions/ 
https://jeopardyquestions.com/ 

TODO:

Figure out how to remove onclick attribute from ALL question divs at Final Round - check line 107

*/

let player1Score = 0;
let player2Score = 0;

let turnPlayer = 1;

let roundNumber = 1;

// selectQuestion fires when a user clicks a question box

const selectQuestion = (question) => {

    // change color of div and text to indicate active question
    document.querySelector('#question-' + question.identifier + '-' + question.points).style.backgroundColor = '#EEA243';

    // dynamically display form content based on question param

    document.querySelector('.question-form').innerHTML = '<p>' + question.statement + '</p><br><input type="radio" id="option1" name="' + question.name + '"><label>' + question.option1 + '</label><br><input type="radio" id="option2" name="' + question.name + '"><label>' + question.option2 + '</label><br><input type="radio" id="option3" name="' + question.name + '"><label>' + question.option3 + '</label><br><input type="radio" id="option4" name="' + question.name + '"><label>' + question.option4 + '</label><br><br><button type="submit" class="submit-answer">Submit</button>';

    // clear correct/incorrect message
    document.querySelector('.message-correct').style.display = 'none';
    document.querySelector('.message-incorrect').style.display = 'none';

    // event listener on form submit to fire checkAnswer
    document.querySelector('.submit-answer').addEventListener('click', function(e) {
        e.preventDefault();
        checkAnswer(question);
    });
    
}

// checkAnswer fires when a user submits the answer form, takes a question object as an argument

const checkAnswer = (question) => {

    // if chosen answer is correct
    if (document.querySelector('input#' + question.correct).checked === true) {
        document.querySelector('.message-correct').style.display = 'block';
        addToScore(parseInt(question.points));

    // if chosen answer is incorrect
    } else if (document.querySelector('input#' + question.correct).checked === false) {
        document.querySelector('.message-incorrect').style.display = 'block';

    }

    switchPlayer();

    document.querySelector('#question-' + question.identifier + '-' + question.points).style.backgroundColor = '#808782';

    document.querySelector('#question-' + question.identifier + '-' + question.points).onclick = "";

}

// to switch rounds once turn is over
const switchPlayer = () => {

    if (turnPlayer === 1) {
        turnPlayer = 2;
        document.querySelector('#turn-player').innerHTML = 'Player 2';

    } else if (turnPlayer === 2) {
        turnPlayer = 1;
        document.querySelector('#turn-player').innerHTML = 'Player 1';
        
        if (roundNumber < 4) {
            roundNumber += 1;
            document.querySelector('#round-number').innerHTML = roundNumber;

        } else {
            finalRound();
        }
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

// final round
const finalRound = () => {
    document.querySelector('#round-number').innerHTML = 'Final Round';

    // this doesn't work!!!!
    document.querySelectorAll('div.question').onclick = '';

    // highlight final question div as active
    document.querySelector('div.final-question').style.backgroundColor = '#EEA243';

    if (turnPlayer === 1) {
        // call selectFinalQuestion on player 1's final question
        selectFinalQuestion(questionBank[25]);
    }

}

// select final question - populate question display
const selectFinalQuestion = (question) => {

    // create question form dynamically
    document.querySelector('.question-form').innerHTML = '<p>' + question.statement + '</p><br><input type="radio" id="option1" name="' + question.name + '"><label>' + question.option1 + '</label><br><input type="radio" id="option2" name="' + question.name + '"><label>' + question.option2 + '</label><br><input type="radio" id="option3" name="' + question.name + '"><label>' + question.option3 + '</label><br><input type="radio" id="option4" name="' + question.name + '"><label>' + question.option4 + '</label><br><button type="submit" class="submit-answer">Submit</button>';

    // clear correct/incorrect message
    document.querySelector('.message-correct').style.display = 'none';
    document.querySelector('.message-incorrect').style.display = 'none';

    // event listener on form submit to fire checkFinalAnswer
    document.querySelector('.submit-answer').addEventListener('click', function(e) {
        e.preventDefault();
        checkFinalAnswer(question);
    });

}

// check final answer and then switch players
const checkFinalAnswer = (question) => {

    // if answer is correct
    if (document.querySelector('input#' + question.correct).checked === true) {
        document.querySelector('.message-correct').style.display = 'block';
        addToScore(parseInt(question.points));

    // if answer is incorrect
    } else if (document.querySelector('input#' + question.correct).checked === false) {
        document.querySelector('.message-incorrect').style.display = 'block';

    }

    finalSwitchPlayer();

}

// switch from player 1's final question to player 2's final question
const finalSwitchPlayer = () => {

    // if player 1 just answered their final question
    if (turnPlayer === 1) {
        turnPlayer = 2;
        document.querySelector('#turn-player').innerHTML = 'Player 2';
        selectFinalQuestion(questionBank[26]);

    // if player 2 has already answered their final question
    } else {
        calculateWinner();
    }

}

// calculate who won and display a message
const calculateWinner = () => {

    if (player1Score > player2Score) {
        alert('Game over. Player 1 won!');
    
    } else if (player2Score > player1Score) {
        alert('Game over. Player 2 won!');

    } else if (player1Score === player2Score) {
        alert('Game over. It\'s a tie!');

    }

}