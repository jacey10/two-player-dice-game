const diceEl = document.getElementById('dice');
const rollBtn = document.getElementById('rollBtn');
const playerScoreEl = document.getElementById('playerScore');
const computerScoreEl = document.getElementById('computerScore');
const messageEl = document.getElementById('message');
const replayBtn = document.getElementById('replayBtn');

let playerScore = 0;
let computerScore = 0;
let round = 1;
const maxRounds = 5;

function rollDIce() {
    return Math.floor(Math.random() * 6) + 1;
}

function getDiceFace(num)  {
    const faces = ['⚀','⚁','⚂','⚃','⚄','⚅'];
    return faces[num-1];
}

rollBtn.addEventListener('click', () => {
    if (round > maxRounds) return;

    const playerRoll = rollDIce();
    const computerRoll = rollDIce();

    diceEl.textContent = `${getDiceFace(playerRoll)}  ${getDiceFace(computerRoll)}`;

    if (playerRoll > computerRoll) {
        playerScore++;
        messageEl.textContent = `Round ${round}: You win this round!`;
    } else if (computerRoll > playerRoll) {
        computerScore++;
        messageEl.textContent = `Round ${round}: Computer wins this round`;
    } else {
        messageEl.textContent = `Round ${round}: It's a tie.`;
    }

    playerScoreEl.textContent = playerScore;
    computerScoreEl.textContent = computerScore;

    round++

    if (round > maxRounds) {
        rollBtn.disabled = true;   
        replayBtn.style.display = 'block';

        if (playerScore > computerScore) {
            messageEl.textContent = '🎉 You won the game!';
        }  else if (computerScore > playerScore) {
            messageEl.textContent = '💻 Computer won the game.';
        } else {
            messageEl.textContent = '🤝 The game ended in a draw.';
        }
    }
})

replayBtn.addEventListener('click', () => {
    round = 1;
    playerScore = 0;
    computerScore = 0;
    rollBtn.disabled = false;
    replayBtn.style.display = 'none';

    diceEl.textContent = '🎲';
    playerScoreEl.textContent = '0';
    computerScoreEl.textContent = '0';
    messageEl.textContent = '';
});


