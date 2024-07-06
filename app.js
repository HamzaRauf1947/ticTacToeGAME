// let btn1 = document.querySelector(".btn1");
// let body = document.querySelector("body");
// let currMode = "light";

// btn1.addEventListener(("click"),()=>{
//     if(currMode == "light"){
//         currMode = "dark";
//         body.style.backgroundColor = "white";
//         body.style.color = "black";
//         btn1.innerText = "Dark Mode";

//     }else{
//         currMode = "light";
//         body.style.backgroundColor = "black";
//         body.style.color = "white";
//         btn1.innerText = "Light Mode";
//     }
// })




//todo Tic Tac Toe Game
// let box = document.querySelectorAll(".box")
// let resetBTN = document.querySelector(".resetBTN");
// let msgContainer = document.querySelector(".msg-container")
// let msg = document.querySelector(".msg")
// let newBtn = document.querySelector(".new-btn")
// let ticTacToe = document.querySelector(".ticTacToe")

// let turnO = "x";

// const winPattern = [
//     [0,1,2],
//     [0,3,6],
//     [0,4,8],
//     [1,4,7],
//     [2,5,8],
//     [2,4,6],
//     [3,4,5],
//     [6,7,8],
// ];



// let count = 0;
// box.forEach((box)=>{
//     box.addEventListener(("click"),()=>{
//         if(box.innerHTML === ""){
//             count++;
//         if(turnO == "x"){
//             turnO = "o"
//             box.innerHTML = '<i class="fa-regular fa-x"></i>';
//             box.querySelector('.fa-x').style.color = "white";

//         }else{
//             turnO = "x"
//             box.innerHTML = '<i class="fa-regular fa-circle"></i>';
//             box.querySelector('.fa-circle').style.color = "yellow";

//         }
//         box.disabled = true; 

//         checkWinner();

//     }
// })
// })

// const showDraw = () => {
//     msg.innerText = "It's a draw!";
//     msgContainer.classList.remove("hidden");
//     ticTacToe.classList.add("hidden");
// };

// const showWinner = (winnerIcon)=>{
//     let winner = (winnerIcon.includes('fa-x')) ? "X" : "O";
//     msg.innerText = `Winner is ${winner}`
//     msgContainer.classList.remove("hidden")
//     ticTacToe.classList.add("hidden")
// }

// resetBTN.addEventListener(("click"),()=>{
//     box.forEach((box)=>{
//         box.innerHTML="";
//         box.disabled=false
//     })
// })

// newBtn.addEventListener(("click"),()=>{
//     msgContainer.classList.add("hidden")
//     ticTacToe.classList.remove("hidden")
//     box.forEach((box)=>{
//         box.innerHTML="";
//         box.disabled=false
//     })
// })


// const checkWinner = ()=>{
//     for(ptrn of winPattern){
//         let pos1 = box[ptrn[0]].innerHTML
//         let pos2 = box[ptrn[1]].innerHTML
//         let pos3 = box[ptrn[2]].innerHTML
//        if(pos1!="" && pos2!="" && pos3!=""){
//         if(pos1 == pos2 && pos2 == pos3){
//             showWinner(pos1);
//             break;
//         }
//        }
//        if(count ==9){
//         showDraw();
//        }
//     }
// }






























let boxes = document.querySelectorAll(".box");
let resetBTN = document.querySelector(".resetBTN");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector(".msg");
let newBtn = document.querySelector(".new-btn");
let ticTacToe = document.querySelector(".ticTacToe");

let turn = "x";

const winPattern = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
    [0, 4, 8], [2, 4, 6] // diagonals
];

let moveCount = 0;

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (box.innerHTML === "") {
            moveCount++;
            if (turn === "x") {
                turn = "o";
                box.innerHTML = '<i class="fa-regular fa-x"></i>';
                box.querySelector('.fa-x').style.color = "white";
            } else {
                turn = "x";
                box.innerHTML = '<i class="fa-regular fa-circle"></i>';
                box.querySelector('.fa-circle').style.color = "yellow";
            }
            box.disabled = true;
            checkWinner();
        }
    });
});

const showDraw = () => {
    msg.innerText = "It's a draw!";
    msgContainer.classList.remove("hidden");
    ticTacToe.classList.add("hidden");
};

const showWinner = (winnerIcon) => {
    let winner = (winnerIcon.includes('fa-x')) ? "X" : "O";
    msg.innerText = `Winner is ${winner}`;
    msgContainer.classList.remove("hidden");
    ticTacToe.classList.add("hidden");
};

resetBTN.addEventListener("click", () => {
    resetGame();
});

newBtn.addEventListener("click", () => {
    resetGame();
    msgContainer.classList.add("hidden");
    ticTacToe.classList.remove("hidden");
});

const resetGame = () => {
    boxes.forEach(box => {
        box.innerHTML = "";
        box.disabled = false;
    });
    turn = "x";
    moveCount = 0;
};

const checkWinner = () => {
    for (let ptrn of winPattern) {
        let pos1 = boxes[ptrn[0]].innerHTML
        let pos2 = boxes[ptrn[1]].innerHTML
        let pos3 = boxes[ptrn[2]].innerHTML

        if (pos1 !== "" && pos1 === pos2 && pos2 === pos3) {
            showWinner(pos1);
            
        }
    }

    if (moveCount === 9) {
        showDraw();
    }
};
