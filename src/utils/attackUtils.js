const getAttackMessage = (attackResult) => {
    if (!attackResult.isValidAttack) {
        return "Invalid attack!";
    }

    if (attackResult.isHit) {
        if (attackResult.isShipSunk) {
            return "Ship hit and sunk!";
        }
        return "Ship hit!";
    }

    if (attackResult.isMiss) {
        return "Missed the target!";
    }

    return "Unknown attack result.";
};

export default getAttackMessage;
