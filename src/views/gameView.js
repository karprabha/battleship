import boardView from "./boardView";

const gameView = () => {
    const playerBoard = document.querySelector(".player-board");
    const computerBoard = document.querySelector(".computer-board");

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

    return { playerBoard, computerBoard, renderShipCells };
};

export default gameView;
