import shipModel from "./shipModel";

const gameBoardModel = () => {
    const ships = [];
    const gameBoard = [];
    let destroyedShips = 0;

    const initializeGameBoard = () => {
        for (let i = 0; i < 10; i += 1) {
            const row = [];
            for (let j = 0; j < 10; j += 1) {
                row.push(0);
            }
            gameBoard.push(row);
        }
    };

    const isWithinBounds = (x, y) => x >= 0 && x < 10 && y >= 0 && y < 10;

    const isCellEmpty = (x, y) => gameBoard[x][y] === 0;

    const hasOverlap = (x, y, size, isHorizontal) => {
        const offset = isHorizontal ? size : 1;
        const limit = isHorizontal ? 1 : size;

        for (let i = -1; i <= limit; i += 1) {
            for (let j = -1; j <= offset; j += 1) {
                const u = x + i;
                const v = y + j;

                if (isWithinBounds(u, v) && !isCellEmpty(u, v)) {
                    return true;
                }
            }
        }

        return false;
    };

    const placeShip = (coordinates, size, isHorizontal) => {
        const [x, y] = coordinates;

        if (isHorizontal) {
            if (y + size - 1 >= 10) return false;

            if (hasOverlap(x, y, size, isHorizontal)) return false;

            for (let i = 0; i < size; i += 1) {
                gameBoard[x][y + i] = ships.length + 1;
            }
        } else {
            if (x + size - 1 >= 10) return false;

            if (hasOverlap(x, y, size, isHorizontal)) return false;

            for (let i = 0; i < size; i += 1) {
                gameBoard[x + i][y] = ships.length + 1;
            }
        }

        const newShip = shipModel(size);
        ships.push(newShip);

        return true;
    };

    const areAllShipsDestroyed = () => destroyedShips === ships.length;

    const receiveAttack = (coordinates) => {
        const [x, y] = coordinates;

        const cellValue = gameBoard[x][y];

        if (cellValue === "X") {
            return {
                isValidAttack: false,
                isHit: false,
                isMiss: false,
                isShipSunk: false,
                areAllShipsDestroyed: areAllShipsDestroyed(),
            };
        }

        gameBoard[x][y] = "X";
        if (cellValue !== 0) {
            const ship = ships[cellValue - 1];
            ship.registerHit();

            if (ship.isSunk()) {
                destroyedShips += 1;

                return {
                    isValidAttack: true,
                    isHit: true,
                    isMiss: false,
                    isShipSunk: true,
                    areAllShipsDestroyed: areAllShipsDestroyed(),
                };
            }

            return {
                isValidAttack: true,
                isHit: true,
                isMiss: false,
                isShipSunk: false,
                areAllShipsDestroyed: areAllShipsDestroyed(),
            };
        }

        return {
            isValidAttack: true,
            isHit: false,
            isMiss: true,
            isShipSunk: false,
            areAllShipsDestroyed: areAllShipsDestroyed(),
        };
    };

    initializeGameBoard();

    return {
        placeShip,
        gameBoard,
        ships,
        receiveAttack,
        areAllShipsDestroyed,
    };
};

export default gameBoardModel;
