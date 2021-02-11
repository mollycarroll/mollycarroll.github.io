

// generic variables for storing info

let player1Score = 0;
let player2Score = 0;

let turnPlayer = 1;

let roundNumber = 1;

// selectQuestion fires when a user clicks a question box

const selectQuestion = (question) => {

    // change color of div and text to indicate active question
    document.querySelector('#question-' + question.identifier + '-' + question.points).style.backgroundColor = '#EEA243'; // yellow

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

    document.querySelector('#question-' + question.identifier + '-' + question.points).style.backgroundColor = '#808782'; // gray

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
            removeOnClick();
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

    // highlight final question div as active
    document.querySelector('div.final-question').style.backgroundColor = '#EEA243'; // yellow

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

// remove click event listener property from all question boxes
const removeOnClick = () => {

    document.querySelectorAll('.question').forEach(el => {
        el.onclick = '';
    })

}


// conditional to render mobile friendly HTML for small screen sizes

if (window.innerWidth < 530) {
    
    document.querySelector('div.main-display').innerHTML = '<div class="status row"><div class="turn"><h2>Turn:</h2><h2 id="turn-player">Player 1</h2></div><div class="round"><h2>Round:</h2><h2 id="round-number">1</h2></div></div><div class="row"><div class="one-category" id="astro-category"><h3>Astronomy</h3></div></div><div class="row"><div class="question astro" id="question-astro-10" onclick="selectQuestion(questionBank[0])"><h2 class="points">10</h2></div><div class="question astro" id="question-astro-20" onclick="selectQuestion(questionBank[5])"><h2 class="points">20</h2></div><div class="question astro" id="question-astro-30" onclick="selectQuestion(questionBank[10])"><h2 class="points">30</h2></div><div class="question astro" id="question-astro-40" onclick="selectQuestion(questionBank[15])"><h2 class="points">40</h2></div><div class="question astro" id="question-astro-50" onclick="selectQuestion(questionBank[20])"><h2 class="points">50</h2></div></div><div class="row"><div class="one-category" id="hp-category"><h3>Harry Potter</h3></div></div><div class="row"><div class="question harry-potter" id="question-hp-10" onclick="selectQuestion(questionBank[1])"><h2 class="points">10</h2></div><div class="question" id="question-hp-20" onclick="selectQuestion(questionBank[6])"><h2 class="points">20</h2></div><div class="question" id="question-hp-30" onclick="selectQuestion(questionBank[11])"><h2 class="points">30</h2></div><div class="question" id="question-hp-40" onclick="selectQuestion(questionBank[16])"><h2 class="points">40</h2></div><div class="question" id="question-hp-50" onclick="selectQuestion(questionBank[21])"><h2 class="points">50</h2></div></div><div class="row"><div class="one-category" id="geo-category"><h3>Geography</h3></div></div><div class="row"><div class="question geo" id="question-geo-10" onclick="selectQuestion(questionBank[2])"><h2 class="points">10</h2></div><div class="question" id="question-geo-20" onclick="selectQuestion(questionBank[7])"><h2 class="points">20</h2></div><div class="question" id="question-geo-30" onclick="selectQuestion(questionBank[12])"><h2 class="points">30</h2></div><div class="question" id="question-geo-40" onclick="selectQuestion(questionBank[17])"><h2 class="points">40</h2></div><div class="question" id="question-geo-50" onclick="selectQuestion(questionBank[22])"><h2 class="points">50</h2></div></div><div class="row"><div class="one-category" id="sw-category"><h3>Star Wars</h3></div></div><div class="row"><div class="question star-wars" id="question-sw-10" onclick="selectQuestion(questionBank[3])"><h2 class="points">10</h2></div><div class="question" id="question-sw-20" onclick="selectQuestion(questionBank[8])"><h2 class="points">20</h2></div><div class="question" id="question-sw-30" onclick="selectQuestion(questionBank[13])"><h2 class="points">30</h2></div><div class="question" id="question-sw-40" onclick="selectQuestion(questionBank[18])"><h2 class="points">40</h2></div><div class="question" id="question-sw-50" onclick="selectQuestion(questionBank[23])"><h2 class="points">50</h2></div></div><div class="row"><div class="one-category" id="history-category"><h3>History</h3></div></div><div class="row"><div class="question history" id="question-history-10" onclick="selectQuestion(questionBank[4])"><h2 class="points">10</h2></div><div class="question" id="question-history-20" onclick="selectQuestion(questionBank[9])"><h2 class="points">20</h2></div><div class="question" id="question-history-30" onclick="selectQuestion(questionBank[14])"><h2 class="points">30</h2></div><div class="question" id="question-history-40" onclick="selectQuestion(questionBank[19])"><h2 class="points">40</h2></div><div class="question" id="question-history-50" onclick="selectQuestion(questionBank[24])"><h2 class="points">50</h2></div></div><div class="final row"><div class="final-question"><h3>Final Question</h3></div></div><div class="scoreboard row"><div class="player-score"><h2 class="score-text">Player 1 Score:</h2><h2 class="score-number" id="player-1-score">0</h2></div><div class="player-score"><h2 class="score-text">Player 2 Score:</h2><h2 class="score-number" id="player-2-score">0</h2></div></div>'

}