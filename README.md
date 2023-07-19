# Battleship Game

Live Demo: [Battleship Game](https://fantastic-florentine-7819d4.netlify.app/)

## Description

Welcome to the Battleship Game! This web-based application brings the classic naval strategy game to your browser, offering an engaging and thrilling gaming experience. The objective of the game is to strategically deploy your fleet of ships on the board and take turns firing at your opponent's grid to sink their ships before they sink yours.

## Features

-   Classic Battleship Gameplay: Experience the traditional Battleship game where you strategically place your ships on the board and take turns firing at your opponent's grid to sink their ships.

-   Player vs. Computer Mode: Play against an intelligent computer opponent that makes tactical decisions to challenge your skills.

-   Clean and Intuitive User Interface: Enjoy a user-friendly interface that makes it easy to navigate, place ships, and make moves.

## Technical Details

-   Test Driven Development (TDD) Approach: The project has been developed following the Test Driven Development (TDD) methodology, ensuring reliability and maintainability of the codebase.

-   Model-View-Controller (MVC) Architecture: The project is structured using the Model-View-Controller (MVC) pattern, promoting separation of concerns and code organization.

-   Webpack Bundling: The application is bundled using Webpack, optimizing the performance and loading speed of the game.

-   Jest Testing: Comprehensive unit tests have been written using Jest to validate the functionality of different components.

## Technologies

-   "JavaScript"
-   "Webpack"
-   "Jest (for testing)"
-   "HTML/CSS"

## Installation

Follow these steps to get the Battleship Game up and running on your local machine:

### Clone the repository:

```bash
git clone https://github.com/karprabha/battleship
cd battleship
```

### Install dependencies:

```bash
npm install
```

### Start the development server:

```bash
npm start
```

The Battleship Game will be accessible at `http://localhost:8080` in your web browser.

### Run Tests

Execute the following command to run the Jest tests

```bash
npm run jest-watch
```

### Building for Production

To build the Battleship Game for production, use the following command:

```bash
npm run build
```

This will create an optimized and minified version of the application in the dist or build directory, which you can deploy to a web server or hosting platform.

## Usage

### Start the Game

-   Play game online using [link](https://fantastic-florentine-7819d4.netlify.app/) or on local host by following above installation instructions

### Taking Turns

-   The game follows a turn-based format, where you and the computer opponent take alternate shots.

-   When it's your turn, click on a cell in your opponent's grid to fire a missile and try to hit their ships.

### Hit or Miss

-   Upon firing, you'll receive real-time feedback on whether your shot hit or missed your opponent's ship.

-   A yellow marker indicates a "hit," while a blue marker indicates a "miss."

### Sinking Ships

-   Continue taking turns until all ships of one player are entirely sunk.

### Winning the Game

-   The game ends when either you or the computer opponent successfully sink all the opponent's ships.

-   The player who sinks all the opponent's ships first is declared the winner!

### Restarting the Game

-   To play again or reset the game, you can tap on result screen again

## Contributing

This project is open and all contributions are welcome!
