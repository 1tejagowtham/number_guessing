let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// generating a random number
const generateTarget = () => Math.floor(Math.random() * 10);



//converting the negative to positive 
const getAbsoluteDistance = (a, b) => Math.abs(a - b);

//comparing which is which is near either human or computer 
const compareGuesses = (user, computer, target) => {
    if (getAbsoluteDistance(target, computer) >= getAbsoluteDistance(target, user)) {

        return true;

    } else {
        return false;
    }
}

// updating the score for both human and computer in respective wins
let updateScore = (winner) => {
    switch (winner) {
        case 'human':
            humanScore += 1;
            break;
        case 'computer':
            computerScore += 1;
            break;

    }
}

//updating the round number for the next round
let advanceRound = () => currentRoundNumber += 1;