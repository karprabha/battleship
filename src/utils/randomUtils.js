const getRandomCoordinates = () => {
    const x = Math.floor(Math.random() * 10);
    const y = Math.floor(Math.random() * 10);

    return [x, y];
};

const getRandomIsHorizontal = () => {
    const horizontal = Math.floor(Math.random() * 2);

    return horizontal === 1;
};

export { getRandomCoordinates, getRandomIsHorizontal };
