import playerModel from "./playerModel";

describe("playerModel", () => {
    let player;

    beforeEach(() => {
        player = playerModel("Player");
    });

    test("returns the player name", () => {
        expect(player.getName()).toBe("Player");
    });
});
