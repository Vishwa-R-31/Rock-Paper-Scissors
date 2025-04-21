# Rock Paper Scissors Game

Welcome to the Rock Paper Scissors game! This classic hand game is implemented using JavaScript, HTML, and CSS. Test your luck and strategy against the computer in this digital version of the timeless game.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [How to Play](#how-to-play)
- [Game Controls](#game-controls)
- [Game Logic](#game-logic)
- [Contributing](#contributing)
- [License](#license)

## Features

🎮 **Classic Gameplay**
- Play the traditional Rock Paper Scissors against the computer
- Simple and intuitive interface with emoji buttons

📊 **Score Tracking**
- Persistent score tracking using localStorage
- Visual display of wins, losses, and ties
- Reset button to clear all scores

⚡ **Convenience Features**
- Keyboard shortcuts for quick play
- Auto-play mode to watch the computer play itself
- Responsive design works on different devices

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)
- Web Storage API (localStorage)

## Installation

To run this game locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/rock-paper-scissors.git

2. Navigate to the project directory:
   ```bash
   cd rock-paper-scissors

3. Open the file: Open the 12-dom-rock-paper-scissors.html file in your web browser.
4. Start playing!

## How to Play
Choose your move by clicking one of the emoji buttons:

- ✊ Rock
- ✋ Paper
- ✌️ Scissors

The computer will randomly select its move.
The winner is determined by standard rules:

- Rock crushes Scissors
- Scissors cut Paper
- Paper covers Rock

Your score updates automatically!

## Game Controls
Button Controls
- Click the Rock/Paper/Scissors buttons to play
Keyboard Shortcuts
- r: Select Rock
- p: Select Paper
- s: Select Scissors
Additional Controls
- Auto Play: Toggle automatic gameplay
- Reset Score: Clear all scores

## Game Logic
- The computer's move is randomly generated with weighted probabilities:
    - Rock: 30%
    - Paper: 40%
    - Scissors: 30%
- Score is stored using localStorage so it persists between sessions
- Real-time UI updates show:
    - Round result (Win/Lose/Tie)
    - Both players' moves
    - Score statistics
## Contributing
Contributions are welcome!
Please open an issue or submit a pull request for any improvements or bug fixes.
## License
MIT License – Free to use and modify.

Enjoy the game! ✊✋✌️
