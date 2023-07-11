import gameBoardModel from "./gameBoardModel";

const playerModel = (name) => {
    const gameBoard = gameBoardModel();

    const getName = () => name;

    const receiveAttack = (coordinates) => {
        const attackResult = gameBoard.receiveAttack(coordinates);

        return {
            ...attackResult,
            playerName: getName(),
        };
    };

    return {
        gameBoard,
        getName,
        receiveAttack,
    };
};

export default playerModel;
