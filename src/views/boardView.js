const boardView = () => {
    const boardContainer = document.createElement("div");
    boardContainer.classList.add("board-container");

    for (let i = 0; i < 10; i += 1) {
        for (let j = 0; j < 10; j += 1) {
            const boardCell = document.createElement("div");
            boardCell.classList.add("board-cell");
            boardCell.setAttribute("data-cell-number", 10 * i + j);
            boardContainer.appendChild(boardCell);
        }
    }

    return { boardContainer };
};

export default boardView;
