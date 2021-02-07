/*
TODO:

Figure out how to check if correct answer is checked in form -- see PROBLEM AREA

Add points to player if they got the correct answer

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
    }
]

// selectQuestion fires when a user clicks a question box

const selectQuestion = (question) => {
    console.log('selectQuestion fired');

    // dynamically display form content based on question param

    document.querySelector('.question-form').innerHTML = '<p>' + question.statement + '</p><br><input type="radio" name="' + question.name + '"><label>' + question.option1 + '</label><br><input type="radio" name="' + question.name + '"><label>' + question.option2 + '</label><br><input type="radio" name="' + question.name + '"><label>' + question.option3 + '</label><br><input type="radio" name="' + question.name + '"><label>' + question.option4 + '</label><br><button type="submit" id="question-' + question.identifier + '-' + question.points + '-submit">Submit</button>';

    // event listener on form submit to fire checkAnswer

    document.querySelector('.question-form').addEventListener('submit', function(e) {
        e.preventDefault();
        checkAnswer(question)
    });
    
}

// checkAnswer fires when a user submits the answer form

const checkAnswer = (question) => {
    console.log('checkAnswer fired');

    // check which option matches what is in the 'correct' key
    for (let i in question) {

        if (i === question.correct) {
            // if the iterated key is the same as the value of the question's 'correct' key

            console.log('the correct answer is ' + i);


            // PROBLEM AREA:

            if (i.checked) {
                console.log('You are correct!!!')
            }

        }
    }

    switchPlayer();

}


// to switch rounds once turn is over
const switchPlayer = () => {
    console.log('switchPlayer fired')

    if (turnPlayer === 1) {
        console.log('switching from player 1 to player 2')
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
        console.log('turnPlayer is 1 so player 1 is getting points')
        player1Score = player1Score + num;
        document.querySelector('#player-1-score').innerHTML = player1Score;

    } else if (turnPlayer === 2) {
        console.log('turnPlayer is 2 so player 2 is getting points')
        player2Score += num;
        document.querySelector('#player-2-score').innerHTML = player2Score;
    }

}

document.querySelector('#question-astro-10').addEventListener('click', function() {
    selectQuestion(questionBank[0]);
});


// CLICK EVENT LISTENERS FOR BOXES

// document.querySelector('#question-astro-10').addEventListener('click', openFirstAstroQuestion);

// document.querySelector('#question-astro-20').addEventListener('click', openSecondAstroQuestion);

// document.querySelector('#question-hp-10').addEventListener('click', openFirstHPQuestion);

// document.querySelector('#question-geo-10').addEventListener('click', openFirstGeoQuestion);


// QUESTION-SPECIFIC FUNCTIONS

// first astro question
// const openFirstAstroQuestion = () => {
//     document.querySelector('#question-modal-astro-10').style.display = 'block';

//     document.querySelector('#question-form-astro-10').addEventListener('submit', submitFirstAstroAnswer);
// }

// const closeFirstAstroQuestion = () => {
//     document.querySelector('#question-modal-astro-10').style.display = 'none';

//     document.querySelector('#question-astro-10').style.backgroundColor = '#095CB0';

//     document.querySelector('#question-astro-10').removeEventListener('click', openFirstAstroQuestion);
    
// }


// const submitFirstAstroAnswer = (e) => {
//     e.preventDefault();

//     const gas = document.querySelector('#gas');

//     // if correct answer is chosen
//     if (gas.checked) {
//         document.querySelector('#update-correct-astro-10').style.display = 'block';

//         addToScore(10);
        
//         setTimeout(closeFirstAstroQuestion, 3000);

//     // if incorrect answer is chosen
//     } else if (!gas.checked) {

//         document.querySelector('#update-incorrect-astro-10').style.display = 'block';

//         setTimeout(closeFirstAstroQuestion, 3000);
//     }

//     switchPlayer();

// }

// // second astro question
// const openSecondAstroQuestion = () => {
//     document.querySelector('#question-modal-astro-20').style.display = 'block';

//     document.querySelector('#question-form-astro-20').addEventListener('submit', submitSecondAstroAnswer);
// }

// const closeSecondAstroQuestion = () => {
//     document.querySelector('#question-modal-astro-20').style.display = 'none';

//     document.querySelector('#question-astro-20').style.backgroundColor = '#095CB0';

//     document.querySelector('#question-astro-20').removeEventListener('click', openSecondAstroQuestion);
    
// }


// const submitSecondAstroAnswer = (e) => {
//     e.preventDefault();

//     const solarStorms = document.querySelector('#solar-storms');

//     // if correct answer is chosen
//     if (solarStorms.checked) {
//         document.querySelector('#update-correct-astro-20').style.display = 'block';

//         addToScore(20);
        
//         setTimeout(closeSecondAstroQuestion, 3000);

//     // if incorrect answer is chosen
//     } else if (!solarStorms.checked) {

//         document.querySelector('#update-incorrect-astro-20').style.display = 'block';

//         setTimeout(closeSecondAstroQuestion, 3000);
//     }

//     switchPlayer();

// }

// // first HP question
// const openFirstHPQuestion = () => {
//     document.querySelector('#question-modal-hp-10').style.display = 'block';

//     document.querySelector('#question-form-hp-10').addEventListener('submit', submitFirstHPAnswer);
// }

// const closeFirstHPQuestion = () => {
//     document.querySelector('#question-modal-hp-10').style.display = 'none';

//     document.querySelector('#question-hp-10').style.backgroundColor = '#095CB0';

//     document.querySelector('#question-hp-10').removeEventListener('click', openFirstHPQuestion);
// }

// const submitFirstHPAnswer = (e) => {
//     e.preventDefault();

//     const owl = document.querySelector('#owl');

//     if (owl.checked) {
//         document.querySelector('#update-correct-hp-10').style.display = 'block';

//         addToScore(10);
        
//         setTimeout(closeFirstHPQuestion, 3000);

//     } else if (!owl.checked) {

//         document.querySelector('#update-incorrect-hp-10').style.display = 'block';

//         setTimeout(closeFirstHPQuestion, 3000);
//     }

//     switchPlayer();

// }

// // first geo question
// const openFirstGeoQuestion = () => {
//     document.querySelector('#question-modal-geo-10').style.display = 'block';

//     document.querySelector('#question-form-geo-10').addEventListener('submit', submitFirstGeoAnswer);
// }

// const closeFirstGeoQuestion = () => {
//     document.querySelector('#question-modal-geo-10').style.display = 'none';

//     document.querySelector('#question-geo-10').style.backgroundColor = '#095CB0';

//     document.querySelector('#question-geo-10').removeEventListener('click', openFirstGeoQuestion);
// }

// const submitFirstGeoAnswer = (e) => {
//     e.preventDefault();

//     const summer = document.querySelector('#summer');

//     if (summer.checked) {
//         document.querySelector('#update-correct-geo-10').style.display = 'block';

//         addToScore(10);
        
//         setTimeout(closeFirstGeoQuestion, 3000);

//     } else if (!summer.checked) {

//         document.querySelector('#update-incorrect-geo-10').style.display = 'block';

//         setTimeout(closeFirstGeoQuestion, 3000);
//     }

//     switchPlayer();

// }

