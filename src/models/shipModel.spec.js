import shipModel from "./shipModel";

describe("shipModel", () => {
    test("registers a hit and checks if the ship is sunk", () => {
        const ship = shipModel(3);
        expect(ship.isSunk()).toBe(false);

        ship.registerHit();
        expect(ship.isSunk()).toBe(false);

        ship.registerHit();
        expect(ship.isSunk()).toBe(false);

        ship.registerHit();
        expect(ship.isSunk()).toBe(true);
    });

    test("registers hits for different ship lengths", () => {
        const ship1 = shipModel(4);
        expect(ship1.isSunk()).toBe(false);

        ship1.registerHit();
        ship1.registerHit();
        ship1.registerHit();
        ship1.registerHit();
        expect(ship1.isSunk()).toBe(true);

        const ship2 = shipModel(2);
        expect(ship2.isSunk()).toBe(false);

        ship2.registerHit();
        expect(ship2.isSunk()).toBe(false);

        ship2.registerHit();
        expect(ship2.isSunk()).toBe(true);
    });
});
