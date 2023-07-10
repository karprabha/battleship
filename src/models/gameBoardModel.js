import shipModel from "./shipModel";

const gameBoardModel = () => {
    const ships = [];
    const gameBoard = [];
    let destroyedShips = 0;

    for (let i = 0; i < 10; i += 1) {
        const row = [];
        for (let j = 0; j < 10; j += 1) {
            row.push(0);
        }
        gameBoard.push(row);
    }

    const placeShip = (coordinates, size, isHorizontal) => {
        const [x, y] = coordinates;
        if (isHorizontal) {
            if (y + size - 1 >= 10) return false;

            for (let i = -1; i <= 1; i += 1) {
                for (let j = -1; j <= size; j += 1) {
                    const u = x + i;
                    const v = y + j;

                    if (
                        u >= 0 &&
                        u < 10 &&
                        v >= 0 &&
                        v < 10 &&
                        gameBoard[u][v] !== 0
                    )
                        return false;
                }
            }

            for (let i = 0; i < size; i += 1)
                gameBoard[x][y + i] = ships.length + 1;
        } else {
            if (x + size - 1 >= 10) return false;

            for (let i = -1; i <= size; i += 1) {
                for (let j = -1; j <= 1; j += 1) {
                    const u = x + i;
                    const v = y + j;

                    if (
                        u >= 0 &&
                        u < 10 &&
                        v >= 0 &&
                        v < 10 &&
                        gameBoard[u][v] !== 0
                    )
                        return false;
                }
            }

            for (let i = 0; i < size; i += 1)
                gameBoard[x + i][y] = ships.length + 1;
        }

        const newShip = shipModel(size);
        ships.push(newShip);

        return true;
    };

    const receiveAttack = (coordinates) => {
        const [x, y] = coordinates;

        const cellValue = gameBoard[x][y];
        if (cellValue === "X") return "duplicate attack";

        gameBoard[x][y] = "X";
        if (cellValue !== 0) {
            ships[cellValue - 1].hit();
            if (ships[cellValue - 1].isSunk()) {
                destroyedShips += 1;
                return "ship sunk";
            }
            return "ship has been hit";
        }

        return "unsuccessfull hit";
    };

    const areAllShipsDestroyed = () => destroyedShips === ships.length;

    return {
        placeShip,
        gameBoard,
        ships,
        receiveAttack,
        areAllShipsDestroyed,
    };
};

export default gameBoardModel;
