import playerModel from "../models/playerModel";

const gameController = (gameView) => {
    const SHIP_COUNT = 5;
    const SHIP_SIZES = [5, 4, 3, 3, 2];

    let player;
    let computer;

    const getRandomCoordinates = () => {
        const x = Math.floor(Math.random() * 10);
        const y = Math.floor(Math.random() * 10);

        return [x, y];
    };

    const getRandomIsHorizontal = () => {
        const horizontal = Math.floor(Math.random() * 2);

        return horizontal === 1;
    };

    const placeShipsAtRandomPosition = (board, boardCells) => {
        let placedShipCount = 0;

        while (placedShipCount !== SHIP_COUNT) {
            const coordinates = getRandomCoordinates();
            const isHorizontal = getRandomIsHorizontal();
            const shipSize = SHIP_SIZES[placedShipCount];

            if (board.placeShip(coordinates, shipSize, isHorizontal)) {
                console.log(coordinates, isHorizontal, shipSize);

                gameView.renderShipCells(
                    coordinates,
                    shipSize,
                    isHorizontal,
                    boardCells
                );

                placedShipCount += 1;
            }
        }
    };

    const handleClick = (cell) => {
        const cellData = cell.getAttribute("data-cell-number");
        const x = Math.floor(cellData / 10);
        const y = cellData % 10;

        const playerMove = player.makeMove([x, y]);
        if (playerMove.success) {
            console.log(playerMove.message);
        }
    };

    const init = () => {
        player = playerModel("Player");
        computer = playerModel("Computer");

        const playerBoardCells =
            gameView.playerBoard.querySelectorAll(".board-cell");
        const computerBoardCells =
            gameView.computerBoard.querySelectorAll(".board-cell");

        placeShipsAtRandomPosition(player.gameBoard, playerBoardCells);
        placeShipsAtRandomPosition(computer.gameBoard, computerBoardCells);

        computerBoardCells.forEach((cell) => {
            cell.addEventListener("click", () => {
                handleClick(cell);
            });
        });
    };

    return { init };
};

export default gameController;
