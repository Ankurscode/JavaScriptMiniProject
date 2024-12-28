let boxs=document.querySelectorAll(".box");
let resetbtn=document.querySelector(".reset-button");
let newGamebtn=document.querySelector(".new-game");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turnX=true;
let count=0;

const winPattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

boxs.forEach((box)=> {
    box.addEventListener("click",()=>{
      
        if(turnX){
            box.innerText="O"
            turnX=false;
        }else {
            box.innerText="X";
            turnX=true;
        }
        box.disabled=true;
        count++;

        let isWinner=checkWinner();
       
    if (count === 9 && !isWinner) {
        drawGame();
      }
    });
});

const disableBoxes = () => {
    for (let box of boxs) {
      box.disabled = true;
    }
  };


const enableBoxes = () =>{
    for(let box of boxs){
        box.disabled=false;
        box.innerText="";
    }
}
  

const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const drawGame =()=>{
    msg.innerText="Game is draw";
    msgContainer.classList.remove("hide");
    disableBoxes();
}



const checkWinner = () => {
    for (let pattern of winPattern) {
      let pos1Val = boxs[pattern[0]].innerText;
      let pos2Val = boxs[pattern[1]].innerText;
      let pos3Val = boxs[pattern[2]].innerText;
  
      if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
        if (pos1Val === pos2Val && pos2Val === pos3Val) {
          showWinner(pos1Val);
          return true;
        }
      }
    }
  };

  const resetGame = () =>{
    turnX=true;
    count=0;    
    enableBoxes();
    msgContainer.classList.add("hide");
  }

  newGamebtn.addEventListener("click",resetGame);
  resetbtn.addEventListener("click",resetGame);