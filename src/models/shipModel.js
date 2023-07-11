const shipModel = (shipLength) => {
    let hitCount = 0;

    const registerHit = () => {
        hitCount += 1;
    };

    const isSunk = () => hitCount === shipLength;

    return { isSunk, registerHit };
};

export default shipModel;
