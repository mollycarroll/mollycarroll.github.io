

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

const selectQuestion = (question) => {
    console.log('selectQuestion fired');

    // dynamically display form content based on question param

    document.querySelector('.question-form').innerHTML = '<p>' + question.statement + '</p><br><input type="radio" name="' + question.name + '"><label>' + question.option1 + '</label><br><input type="radio" name="' + question.name + '"><label>' + question.option2 + '</label><br><input type="radio" name="' + question.name + '"><label>' + question.option3 + '</label><br><input type="radio" name="' + question.name + '"><label>' + question.option4 + '</label><br><button type="submit" id="question-' + question.identifier + '-' + question.points + '-submit">Submit</button>';

    // event listener on form submit to fire checkAnswer

    document.querySelector('.question-form').addEventListener('submit', checkAnswer(question));
    
}

const checkAnswer = (e, question) => {
    console.log('checkAnswer fired');

    // check which options matches what is in the 'correct' key
    for (let i in question) {
        if (i == question.correct) {
            console.log('it worked! ' + i);
            addToScore(question.points);
        }
    }

}

const starWars10Question = document.querySelector('#question-sw-10');


starWars10Question.addEventListener('click', selectQuestion(questionBank[0]));
