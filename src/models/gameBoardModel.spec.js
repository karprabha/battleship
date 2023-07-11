import gameBoardModel from "./gameBoardModel";

describe("gameBoardModel", () => {
    let board;

    beforeEach(() => {
        board = gameBoardModel();
    });

    test("places a ship vertically", () => {
        expect(board.placeShip([2, 4], 3, false)).toBe(true);
        expect(board.gameBoard[2][4]).toBe(1);
        expect(board.gameBoard[3][4]).toBe(1);
        expect(board.gameBoard[4][4]).toBe(1);
    });

    test("places a ship horizontally", () => {
        expect(board.placeShip([5, 2], 4, true)).toBe(true);
        expect(board.gameBoard[5][2]).toBe(1);
        expect(board.gameBoard[5][3]).toBe(1);
        expect(board.gameBoard[5][4]).toBe(1);
        expect(board.gameBoard[5][5]).toBe(1);
    });

    test("prevents overlapping ship placement", () => {
        expect(board.placeShip([2, 4], 3, false)).toBe(true);
        expect(board.placeShip([2, 3], 2, true)).toBe(false);
        expect(board.gameBoard[2][3]).toBe(0);
    });

    test("prevents out-of-bounds ship placement", () => {
        expect(board.placeShip([8, 8], 3, true)).toBe(false);
        expect(board.gameBoard[8][8]).toBe(0);
    });

    test("registers a hit on a ship", () => {
        board.placeShip([2, 4], 3, true);
        expect(board.receiveAttack([2, 4])).toEqual({
            isValidAttack: true,
            isHit: true,
            isMiss: false,
            isShipSunk: false,
            areAllShipsDestroyed: false,
        });
        expect(board.gameBoard[2][4]).toBe("X");

        expect(board.receiveAttack([2, 5])).toEqual({
            isValidAttack: true,
            isHit: true,
            isMiss: false,
            isShipSunk: false,
            areAllShipsDestroyed: false,
        });
        expect(board.gameBoard[2][5]).toBe("X");

        expect(board.receiveAttack([2, 6])).toEqual({
            isValidAttack: true,
            isHit: true,
            isMiss: false,
            isShipSunk: true,
            areAllShipsDestroyed: true,
        });
        expect(board.gameBoard[2][6]).toBe("X");
    });

    test("registers a duplicate attack", () => {
        board.gameBoard[2][4] = "X";
        board.placeShip([5, 5], 3, true);

        expect(board.receiveAttack([2, 4])).toEqual({
            isValidAttack: false,
            isHit: false,
            isMiss: false,
            isShipSunk: false,
            areAllShipsDestroyed: false,
        });
    });

    test("registers an unsuccessful hit", () => {
        board.placeShip([5, 5], 3, true);
        expect(board.receiveAttack([3, 3])).toEqual({
            isValidAttack: true,
            isHit: false,
            isMiss: true,
            isShipSunk: false,
            areAllShipsDestroyed: false,
        });
    });

    test("checks if all ships are destroyed", () => {
        board.placeShip([1, 1], 2, false);
        board.placeShip([3, 5], 3, true);

        board.receiveAttack([1, 1]);
        board.receiveAttack([2, 1]);
        board.receiveAttack([3, 5]);
        board.receiveAttack([3, 6]);
        board.receiveAttack([3, 7]);

        expect(board.areAllShipsDestroyed()).toBe(true);
    });
});
