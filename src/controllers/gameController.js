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

    const init = () => {
        player = playerModel("Player");
        computer = playerModel("Computer");

        const playerBoardCells =
            gameView.playerBoard.querySelectorAll(".board-cell");
        const computerBoardCells =
            gameView.computerBoard.querySelectorAll(".board-cell");

        placeShipsAtRandomPosition(player.gameBoard, playerBoardCells);
        placeShipsAtRandomPosition(computer.gameBoard, computerBoardCells);

        playerBoardCells.forEach((cell) => {
            cell.addEventListener("click", () => {
                console.log("clicked player");
            });
        });

        computerBoardCells.forEach((cell) => {
            cell.addEventListener("click", () => {
                console.log("clicked computer");
            });
        });
    };

    return { init };
};

export default gameController;
