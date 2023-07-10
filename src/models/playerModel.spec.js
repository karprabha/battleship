import playerModel from "./playerModel";

describe("playerModel", () => {
    let newPlayerModel;

    beforeEach(() => {
        newPlayerModel = playerModel("Prabhakar");
    });

    describe("playerName method", () => {
        test("should return Prabhakar if player name is Prabhakar", () => {
            expect(newPlayerModel.getName()).toBe("Prabhakar");
        });
    });

    describe("makeMove method", () => {
        test("should return success property true if valid move", () => {
            expect(newPlayerModel.makeMove([0, 0]).success).toBe(true);
        });

        test("should return success property false if invalid move", () => {
            newPlayerModel.makeMove([0, 0]);
            expect(newPlayerModel.makeMove([0, 0]).success).toBe(false);
        });
    });
});