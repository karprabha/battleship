const shipModel = (shipLength) => {
    let hitCount = 0;

    const hit = () => {
        hitCount += 1;
    };
    const isSunk = () => hitCount === shipLength;

    return { isSunk, hit };
};

export default shipModel;
