import gameBoardModel from "./gameBoardModel";

const playerModel = (name) => {
    const gameBoard = gameBoardModel();

    const getName = () => name;
    const makeMove = (coordinates) => {
        const result = gameBoard.receiveAttack(coordinates);
        if (result === "duplicate attack")
            return { success: false, message: result };

        return { success: true, message: result };
    };

    return { gameBoard, getName, makeMove };
};

export default playerModel;
