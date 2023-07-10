import gameBoardModel from "./gameBoardModel";

const playerModel = (name) => {
    const newGameBoardModel = gameBoardModel();

    const getName = () => name;
    const makeMove = (coordinates) => {
        const result = newGameBoardModel.receiveAttack(coordinates);
        if (result === "duplicate attack")
            return { success: false, message: result };

        return { success: true, message: result };
    };

    return { newGameBoardModel, getName, makeMove };
};

export default playerModel;
