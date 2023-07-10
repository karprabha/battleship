import gameBoardModel from "./gameBoardModel";

describe("gameBoard Model", () => {
    let newGameBoardModel;

    beforeEach(() => {
        newGameBoardModel = gameBoardModel();
    });

    describe("placeShip method", () => {
        test("should return true for valid placement on game board", () => {
            expect(newGameBoardModel.placeShip([0, 0], 4, true)).toBe(true);
        });
        test("should return false for overlapping ship placement on game board", () => {
            newGameBoardModel.placeShip([0, 0], 2, false);
            expect(newGameBoardModel.placeShip([0, 0], 4, true)).toBe(false);
        });

        test("should return false for out of bounds ship placement on game board", () => {
            expect(newGameBoardModel.placeShip([7, 7], 4, true)).toBe(false);
        });

        test("should return false ship placement on boundary of another ship on game board", () => {
            newGameBoardModel.placeShip([0, 0], 4, false);
            expect(newGameBoardModel.placeShip([1, 0], 4, false)).toBe(false);
        });

        test("should place a ship horizontally on the game board", () => {
            newGameBoardModel.placeShip([0, 0], 4, true);

            expect(newGameBoardModel.gameBoard).toEqual([
                [1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            ]);

            expect(newGameBoardModel.ships.length).toBe(1);
        });

        test("should place a ship vertically on the game board", () => {
            newGameBoardModel.placeShip([0, 0], 4, false);

            expect(newGameBoardModel.gameBoard).toEqual([
                [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            ]);

            expect(newGameBoardModel.ships.length).toBe(1);
        });

        test("should place multiple ships on the game board", () => {
            newGameBoardModel.placeShip([0, 0], 4, true);
            newGameBoardModel.placeShip([5, 5], 3, false);

            expect(newGameBoardModel.gameBoard).toEqual([
                [1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 2, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 2, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 2, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            ]);
            expect(newGameBoardModel.ships.length).toBe(2);
        });
    });

    describe("receiveAttack method", () => {
        test("should mark attack on game board", () => {
            newGameBoardModel.receiveAttack([0, 1]);

            expect(newGameBoardModel.gameBoard).toEqual([
                [0, "X", 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            ]);
        });

        test('should return "duplicate attack" when attacking the same cell twice', () => {
            newGameBoardModel.receiveAttack([0, 1]);
            expect(newGameBoardModel.receiveAttack([0, 1])).toBe(
                "duplicate attack"
            );

            expect(newGameBoardModel.gameBoard).toEqual([
                [0, "X", 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            ]);
        });

        test('should return "ship has been hit" when attacking a cell containing a ship', () => {
            newGameBoardModel.placeShip([0, 0], 4, true);
            expect(newGameBoardModel.receiveAttack([0, 1])).toBe(
                "ship has been hit"
            );

            expect(newGameBoardModel.gameBoard).toEqual([
                [1, "X", 1, 1, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            ]);
        });

        test('should return "ship sunk" when attacking a cell that sinks a ship', () => {
            newGameBoardModel.placeShip([0, 0], 3, true);
            newGameBoardModel.receiveAttack([0, 0]);
            newGameBoardModel.receiveAttack([0, 1]);
            expect(newGameBoardModel.receiveAttack([0, 2])).toBe("ship sunk");

            expect(newGameBoardModel.gameBoard).toEqual([
                ["X", "X", "X", 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            ]);
        });
    });

    describe("areAllShipsDestroyed method", () => {
        test("should return true when all ships have been destroyed", () => {
            newGameBoardModel.placeShip([0, 0], 2, true);
            newGameBoardModel.receiveAttack([0, 0]);
            newGameBoardModel.receiveAttack([0, 1]);

            expect(newGameBoardModel.areAllShipsDestroyed()).toBe(true);
        });

        test("should return false when there are remaining ships", () => {
            newGameBoardModel.placeShip([0, 0], 2, true);

            expect(newGameBoardModel.areAllShipsDestroyed()).toBe(false);
        });
    });
});
