import boardView from "./boardView";

const gameView = () => {
    const playerBoard = document.querySelector(".player-board");
    const computerBoard = document.querySelector(".computer-board");
    const gameMessage = document.querySelector(".game-message");
    const overlayContainer = document.querySelector(".overlay-container");
    const gameResult = document.querySelector(".game-result");

    playerBoard.appendChild(boardView().boardContainer);
    computerBoard.appendChild(boardView().boardContainer);

    const renderShipCells = (
        coordinates,
        shipSize,
        isHorizontal,
        boardCells
    ) => {
        const [x, y] = coordinates;
        if (isHorizontal) {
            for (let i = 0; i < shipSize; i += 1) {
                boardCells[x * 10 + y + i].classList.add("ship-cell");
            }
        } else {
            for (let i = 0; i < shipSize; i += 1)
                boardCells[(x + i) * 10 + y].classList.add("ship-cell");
        }
    };

    const updateGameMessage = (message) => {
        gameMessage.textContent = message;
    };

    const renderAttackedCell = (cell) => {
        cell.classList.add("attacked-cell");
    };

    const renderGameOver = (name) => {
        overlayContainer.classList.toggle("hidden");
        gameResult.textContent = `${name} won the game !!`;
    };

    return {
        playerBoard,
        computerBoard,
        renderShipCells,
        updateGameMessage,
        renderAttackedCell,
        renderGameOver,
        overlayContainer,
    };
};

export default gameView;
