import playerModel from "../models/playerModel";
import getAttackMessage from "../utils/attackUtils";
import {
    getRandomCoordinates,
    getRandomIsHorizontal,
} from "../utils/randomUtils";

const gameController = (gameView) => {
    const SHIP_COUNT = 5;
    const SHIP_SIZES = [5, 4, 3, 3, 2];

    let player;
    let computer;

    const placeShipsAtRandomPosition = (board, boardCells) => {
        let placedShipCount = 0;

        while (placedShipCount !== SHIP_COUNT) {
            const coordinates = getRandomCoordinates();
            const isHorizontal = getRandomIsHorizontal();
            const shipSize = SHIP_SIZES[placedShipCount];

            if (board.placeShip(coordinates, shipSize, isHorizontal)) {
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

    const updateGameStatus = (name, message, isGameOver, cell) => {
        gameView.updateGameMessage(message);
        gameView.renderAttackedCell(cell);

        if (isGameOver) {
            gameView.renderGameOver(name);
        }
    };

    const computerTurn = () => {
        let coordinates = getRandomCoordinates();
        let computerMove = player.receiveAttack(coordinates);

        while (!computerMove.isValidAttack) {
            coordinates = getRandomCoordinates();
            computerMove = player.receiveAttack(coordinates);
        }

        const message = getAttackMessage(computerMove);
        const { areAllShipsDestroyed } = computerMove;

        const isGameOver = areAllShipsDestroyed;

        const [x, y] = coordinates;
        const cell = gameView.playerBoard.querySelector(
            `[data-cell-number="${x * 10 + y}"]`
        );
        updateGameStatus(computer.getName(), message, isGameOver, cell);
    };

    const handleClick = (cell) => {
        const cellData = cell.getAttribute("data-cell-number");
        const x = Math.floor(cellData / 10);
        const y = cellData % 10;

        const playerMove = computer.receiveAttack([x, y]);
        if (playerMove.isValidAttack) {
            const message = getAttackMessage(playerMove);
            const { areAllShipsDestroyed } = playerMove;

            const isGameOver = areAllShipsDestroyed;
            updateGameStatus(player.getName(), message, isGameOver, cell);
            if (!isGameOver) computerTurn();
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
