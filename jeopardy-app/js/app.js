/*

extra question sources: https://thoughtcatalog.com/katee-fletcher/2020/04/star-wars-trivia-questions/ 
https://jeopardyquestions.com/ 

TODO:

Figure out how to remove onclick attribute from ALL question divs at Final Round

*/

let player1Score = 0;
let player2Score = 0;

let turnPlayer = 1;

let roundNumber = 1;

// selectQuestion fires when a user clicks a question box

const selectQuestion = (question) => {
    console.log('selectQuestion fired line 56');

    document.querySelector('#question-' + question.identifier + '-' + question.points).style.backgroundColor = '#f8e350';

    // dynamically display form content based on question param

    document.querySelector('.question-form').innerHTML = '<p>' + question.statement + '</p><br><input type="radio" id="option1" name="' + question.name + '"><label>' + question.option1 + '</label><br><input type="radio" id="option2" name="' + question.name + '"><label>' + question.option2 + '</label><br><input type="radio" id="option3" name="' + question.name + '"><label>' + question.option3 + '</label><br><input type="radio" id="option4" name="' + question.name + '"><label>' + question.option4 + '</label><br><button type="submit" class="submit-answer">Submit</button>';

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
    console.log('checkAnswer fired line 74');

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
    console.log('finalRound called');

    document.querySelectorAll('div.question').onclick = '';

    // highlight final question div yellow
    document.querySelector('div.final-question').style.backgroundColor = '#f8e350';

    if (turnPlayer === 1) {
        // call selectFinalQuestion on player 1's final question
        selectFinalQuestion(questionBank[25]);
    }

}

// select final question - populate left display
const selectFinalQuestion = (question) => {
    console.log('selectFinalQuestion fired line 131');

    // create question form
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


const checkFinalAnswer = (question) => {

    if (document.querySelector('input#' + question.correct).checked === true) {

        document.querySelector('.message-correct').style.display = 'block';

        addToScore(parseInt(question.points));

    } else if (document.querySelector('input#' + question.correct).checked === false) {

        document.querySelector('.message-incorrect').style.display = 'block';

    }

    finalSwitchPlayer();

}

// switch from player 1's final question to player 2's final question
const finalSwitchPlayer = () => {

    if (turnPlayer === 1) {
        turnPlayer = 2;
        document.querySelector('#turn-player').innerHTML = 'Player 2';
        selectFinalQuestion(questionBank[26]);

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