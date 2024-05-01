let boxes = querySelectorALL('.box');
let msgcontainer = querySelector('.msg-container');
let message = document.querySelector("#msg");
let newgamebtn = querySelector('#new-btn');
let resetbtn = querySelector('reset-btn');
let turn0 = true;
const resetgame = () => {
    turn0 = true;
    enableboxes();
    msgcontainer.classList.add('hide');
}
const winpatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];
const enableboxes = () => {
    for (let box of boxes)
        box.disabled = false;
    box.innerText = "";

}
const disbaleBoxes = () => {
    for (let box of boxes)
        box.disabled = true;
}
const showwinner = (winner) => {
    msg.innerText = 'congratulation winner is &(winner)';
    msgcontainer.classList.remove("hide");
    disbaleBoxes();
};
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if (turn0) {
            box.innerText = "O";
            turn0 = false;
        }
        else {
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;
        checkwinner();
    });
});

const checkwinner = () => {
    for (let pattern of winpatterns) {
        let posval1 = boxes[pattern[0]].innerText;
        let posval2 = boxes[pattern[1]].innerText;
        let posval3 = boxes[pattern[2]].innerText;
        if (posval1 != "" && posval2 != "" && posval3 != "") {
            if (posval1 === posval2 && posval2 === posval3) {
                console.log("winner", posval1);
            }
        }
    }
}
newgamebtn.addEventListener("click", resetgame);
resetbtn.addEventListener("click", resetgame);

