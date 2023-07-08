import shipModel from "./shipModel";

describe("Ship Model", () => {
    let newShipModel;

    beforeEach(() => {
        newShipModel = shipModel(5);
    });

    test("should not be sunk with a single hit", () => {
        newShipModel.hit();
        expect(newShipModel.isSunk()).toBe(false);
    });

    test("should be sunk after 5 hits", () => {
        for (let i = 0; i < 5; i += 1) {
            newShipModel.hit();
        }
        expect(newShipModel.isSunk()).toBe(true);
    });
});
