let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let msg = document.querySelector(".msg");

let turnX = true; 
let count = 0;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

const resetGame = () => {
    turnX = true;
    count = 0;
    enableBoxes();
    msg.innerText = "";
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnX) {
            box.innerText = "X";
            turnX = false;
        } else {
            box.innerText = "O";
            turnX = true;
        }
        box.disabled = true;
        count++;

        let isWinner = checkWinner();

        if (count === 9 && !isWinner) {
            gameDraw();
        };
    });
});

const gameDraw = () => {
    msg.innerText = "It's a draw";
    disableBoxes();
}

const disableBoxes = () => {
    for (let box of boxes) {
      box.disabled = true;
    }
};
  
const enableBoxes = () => {
    for (let box of boxes) {
      box.disabled = false;
      box.innerText = "";
    }
};

const showWinner =(winner) => {
    msg.innerText = `Winner: ${winner}`;
    disableBoxes();
}

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let val1 = boxes[pattern[0]].innerText;
        let val2 = boxes[pattern[1]].innerText;
        let val3 = boxes[pattern[2]].innerText;

        if (val1 != "" && val2 != "" && val3 != "") {
            if (val1 === val2 && val2 === val3) {
                showWinner(val1);
            };
        };
    };
};

resetBtn.addEventListener("click", resetGame);