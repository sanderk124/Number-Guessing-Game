# 🎯 Number Guessing Game

A simple **Number Guessing Game** built with Node.js, where the player has to guess a randomly chosen number between 1 and 100 within a limited number of attempts. The game offers three difficulty levels: **Easy (10 attempts), Medium (5 attempts), and Hard (3 attempts).**

## 🚀 Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/yourusername/number-guessing-game.git
cd number-guessing-game
```

### 2️⃣ Install dependencies
This game uses **prompt-sync** for user input. Install it with:
```bash
npm install prompt-sync
```

### 3️⃣ Start the game
Run the following command to launch the game:
```bash
node game.js
```

## 🎮 How to Play?
1. Run the game using `node game.js`.
2. Choose a difficulty level:
   - **1**: Easy (10 attempts)
   - **2**: Medium (5 attempts)
   - **3**: Hard (3 attempts)
3. Enter your guess and get hints whether the number is **higher or lower**.
4. Keep guessing until you find the correct number or run out of attempts.
5. If you guess correctly, you win! Otherwise, the correct number is revealed at the end.

## 🛠 Requirements
- **Node.js** (Version 14 or higher)
- **npm** (Needed to install `prompt-sync`)

## 🖥 Example Gameplay
```
Welcome to the Number Guessing Game!
I'm thinking of a number between 1 and 100.
You have 5 chances to guess the correct number.

Please select the difficulty level:
1. Easy (10 chances)
2. Medium (5 chances)
3. Hard (3 chances)

Enter your choice: 2
Great! You have selected the Medium difficulty level. Let's start the game!
Enter your guess: 50
Incorrect! The number is less than 50.
4 guesses left.
Enter your guess: 25
Incorrect! The number is more than 25.
3 guesses left.
...
Congratulations! You guessed the correct number in 4 attempts!
```

## 📜 License
This project is open-source and available under the **MIT License**. Feel free to use, modify, and distribute it as you like.

🎲 **Have fun and good luck!**

## project page url

My roadmap.sh project link: https://roadmap.sh/projects/number-guessing-game
