/*
TODO:

Figure out how to persist functionality after first question is answered -- 2nd and 3rd not working in checkAnswer if statements

Figure out how to remove the event listener after question is answered -- not working, line 68

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

    // event listener on form submit to fire checkAnswer

    document.querySelector('.question-form').addEventListener('submit', function(e) {
        e.preventDefault();
        checkAnswer(question)
    });
    
}

// checkAnswer fires when a user submits the answer form, takes a question object as an argument

const checkAnswer = (question) => {
    console.log('checkAnswer fired line 74');

    if (document.querySelector('input#' + question.correct).checked === true) {

        document.querySelector('.question-form').innerHTML = 'Correct!';

        addToScore(parseInt(question.points));

    } else if (document.querySelector('input#' + question.correct).checked === false) {

        document.querySelector('.question-form').innerHTML = 'Incorrect!';

    }

    switchPlayer();

}


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
    console.log('addToScore fired and ' + num + ' points are being added');

    if (turnPlayer === 1) {
        player1Score = player1Score + num;
        document.querySelector('#player-1-score').innerHTML = player1Score;

    } else if (turnPlayer === 2) {
        player2Score += num;
        document.querySelector('#player-2-score').innerHTML = player2Score;
    }

}


/* 

document.querySelector('#question-' + question.identifier + '-' + question.points).style.backgroundColor = '#095CB0';

document.querySelector('#question-' + question.identifier + '-' + question.points).removeEventListener('click', selectQuestion);

    // check which option matches what is in the 'correct' key by looping through them
    for (let i in question) {

        if (i === question.correct) {
            // if the iterated key is the same as the value of the question's 'correct' key

            console.log(document.querySelector('input#' + i));

            if (document.querySelector('input#option3').checked) {

                document.querySelector('.question-form').innerHTML = 'Correct!';

                addToScore(parseInt(question.points));

            } else if (!document.querySelector('input#' + i).checked) {

                document.querySelector('.question-form').innerHTML = 'Incorrect!';
            
            }

        }
    }
                
*/