import shipModel from "./shipModel";

const gameBoardModel = () => {
    const ships = [];
    const gameBoard = [];

    for (let i = 0; i < 10; i += 1) {
        const row = [];
        for (let j = 0; j < 10; j += 1) {
            row.push(0);
        }
        gameBoard.push(row);
    }

    const placeShip = (coordinates, size, isHorizontal) => {
        const newShip = shipModel(size);
        ships.push(newShip);

        const [x, y] = coordinates;
        if (isHorizontal) {
            for (let i = 0; i < size; i += 1)
                gameBoard[x][y + i] = ships.length;
        } else {
            for (let i = 0; i < size; i += 1)
                gameBoard[x + i][y] = ships.length;
        }
    };
    return { placeShip, gameBoard, ships };
};

export default gameBoardModel;
