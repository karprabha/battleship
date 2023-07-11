import "./styles/style.css";
import gameView from "./views/gameView";
import gameController from "./controllers/gameController";

const clearPreviousGameSession = () => {
    const playerBoard = document.querySelector(".player-board");
    const computerBoard = document.querySelector(".computer-board");

    const playerBoardContainer = playerBoard.querySelector(".board-container");
    const computerBoardContainer =
        computerBoard.querySelector(".board-container");

    if (playerBoardContainer !== null)
        playerBoard.removeChild(playerBoardContainer);
    if (computerBoardContainer !== null)
        computerBoard.removeChild(computerBoardContainer);
};

const newGame = () => {
    const overlayContainer = document.querySelector(".overlay-container");
    overlayContainer.addEventListener("click", () => {
        overlayContainer.classList.toggle("hidden");

        clearPreviousGameSession();

        const newGameController = gameController(gameView());
        newGameController.init();
    });
};

newGame();
