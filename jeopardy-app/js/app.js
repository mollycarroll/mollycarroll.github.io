
let player1Score = parseInt(document.querySelector('#player-1-score').textContent);
let player2Score = parseInt(document.querySelector('#player-1-score').textContent);
// will this update in the DOM?

let turnPlayer = document.querySelector('#turn-player').textContent;


// will be question specific
const openQuestion = () => {
    document.querySelector('#question-modal-cats-10').style.display = 'block';
    document.querySelector('form').addEventListener('submit', submitAnswer)
}

document.querySelector('#question-cats-10').addEventListener('click', openQuestion);

// will be question specific
const submitAnswer = (e) => {
    console.log('submit answer function')
    e.preventDefault();

    const starfire = document.querySelector('#starfire');

    if (starfire.checked) {
        alert('Correct!');
        
        if (turnPlayer === 'Player 1') {
            player1Score += 10;
        } else if (turnPlayer === 'Player 2') {
            player2Score += 10;
        }

    }

}