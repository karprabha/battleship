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
            if (y - 1 >= 0 && gameBoard[x][y - 1] !== 0) return false;
            if (y + size < 10 && gameBoard[x][y + size] !== 0) return false;

            for (let i = 0; i < size; i += 1) {
                if (y + i >= 10 || gameBoard[x][y + i] !== 0) return false;
                if (x - 1 >= 0 && gameBoard[x - 1][y + i] !== 0) return false;
                if (x + 1 < 10 && gameBoard[x + 1][y + i] !== 0) return false;
            }

            for (let i = 0; i < size; i += 1)
                gameBoard[x][y + i] = ships.length + 1;
        } else {
            if (x - 1 >= 0 && gameBoard[x - 1][y] !== 0) return false;
            if (x + size < 10 && gameBoard[x + size][y] !== 0) return false;
            for (let i = 0; i < size; i += 1) {
                if (x + i >= 10 || gameBoard[x + i][y] !== 0) return false;
                if (y - 1 >= 0 && gameBoard[x + i][y - 1] !== 0) return false;
                if (y + 1 < 10 && gameBoard[x + i][y + 1] !== 0) return false;
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
