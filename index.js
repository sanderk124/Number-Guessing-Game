import promptSync from "prompt-sync"

const prompt = promptSync();

console.log(`Welcome to the Number Guessing Game!
I'm thinking of a number between 1 and 100.
You have 5 chances to guess the correct number.`);

const randomNumber = Math.floor(Math.random()* 100) + 1;


function getLevel() {
    console.log(`Please select the difficulty level:
1. Easy (10 chances)
2. Medium (5 chances)
3. Hard (3 chances)`);

    var chosenLevel = parseInt(prompt("Enter your choice: "));

    switch (chosenLevel) {
        case 1:
            console.log("starting level Easy");
            playGame(10, randomNumber, 10);
            break;
        case 2:
            console.log("Great! You have selected the Medium difficulty level. Let's start the game!");
            playGame(5, randomNumber, 5);
            break;
        case 3:
            console.log("starting level Hard");
            playGame(3, randomNumber, 3);
            break;

        default:
            console.log("thats not a level!")
            break;
    }
}

getLevel();



function playGame(guesses, randomNumber, maxpogingen) {
    let amountOfGuesses = guesses;
    var answerGuess = parseInt(prompt("Enter your guess: "));
    if (amountOfGuesses == 0) {
        console.log(`you lost the correct number was ${randomNumber}`);
        return; 
    } else {
        if (answerGuess == randomNumber) {
            console.log(`Congratulations! You guessed the correct number in ${maxpogingen - amountOfGuesses} attempts.`);
        } else if (answerGuess < randomNumber) {
            console.log(`Incorrect! The number is more than ${answerGuess}.`);
            amountOfGuesses = amountOfGuesses - 1;
            console.log(`${amountOfGuesses}` + " guesses left");
            playGame(amountOfGuesses, randomNumber, maxpogingen);
        } else if (answerGuess > randomNumber) {
            console.log(`Incorrect! The number is less than ${answerGuess}.`);
            amountOfGuesses = amountOfGuesses - 1;
            console.log(`${amountOfGuesses}` + " guesses left");
            playGame(amountOfGuesses, randomNumber, maxpogingen);
        }
    }
}