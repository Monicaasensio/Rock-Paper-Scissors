const game = () => { 
    let userTotalScore = 0; 
    let compTotalScore = 0; 
    let drawTotalScore = 0;

const UserChoice = () => {
    const userRock = document.querySelector('#rock');
    const userPaper = document.querySelector('#paper');
    const userScissors = document.querySelector('#scissors');
    const userArray = [userRock, userPaper, userScissors];
    const compArray = ['Rock', 'Paper', 'Scissors'];

    userArray.forEach(button => { 
        button.addEventListener('click', function() {
    
            let choice = Math.floor(Math.random() * 3);
            let compChoice = compArray[choice];
            console.log(compChoice);
            document.querySelector('.computer-random').textContent = `COMPUTER: ${compChoice}`;
            //displaying randomized choice to p tag w/ .computer-random class
            document.querySelector('.user-choice').textContent = `You have chosen: ${this.innerText}`;
            //template literal displaying users choice with this.innerText
            winner(this.innerText, compChoice); //setting arguments for winner function
        }
        )}
        )}


const winner = (user, computer) => {
    let result = document.querySelector('.results');
    let userScore = document.querySelector('#user-score'); 
    let compScore = document.querySelector('#comp-score');
    let drawScore = document.querySelector('#draw-score');
    user = user.toLowerCase(); 
    computer = computer.toLowerCase(); 

    if (user === computer) {
        result.innerHTML = 'Draw!';
        drawTotalScore++;
        drawScore.textContent = `Draw:  ${drawTotalScore}`;
    } else if (user === 'rock') { 
            if (computer === 'paper') {
                result.innerHTML = 'Computer Wins!';
                compTotalScore++;
                compScore.textContent = `Computer:  ${compTotalScore}`;
            } else {
                result.innerHTML = 'You Win!';
                userTotalScore++;
                userScore.textContent = `You: ${userTotalScore}`;
            }
        } else if (user === 'scissors') { 
            if (computer === 'rock') {
                result.innerHTML = 'Computer Wins!';
                compTotalScore++;
                compScore.textContent = `Computer:  ${compTotalScore}`;
            } else {
                result.innerHTML = 'User Wins!';
                userTotalScore++;
                userScore.textContent = `You: ${userTotalScore}`;
            }
        } else if (user === 'paper') { 
            if (computer === 'scissors') {
                result.innerHTML = 'Computer Wins!';
                compTotalScore++;
                compScore.textContent = `Computer:  ${compTotalScore}`;
            } else {
                result.innerHTML = 'User Wins!';
                userTotalScore++;
                userScore.textContent = `You: ${userTotalScore}`;
            } 
} 
}

UserChoice();


}

game();

const clear = () => {
    userTotalScore.innerHTML = 0;
    compTotalScore.textContent = 0;
    drawTotalScore.textContent = 0;
}