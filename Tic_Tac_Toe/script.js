let boxs=document.querySelectorAll(".box");
let resetbtn=document.querySelector(".reset-button");

let turnX=true;

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
        console.log("Box is clicked")
        if(turnX){
            box.innerText="O"
            turnX=false;
        }else {
            box.innerText="X";
            turnX=true;
        }
        box.disabled=true;

        checkWinner();
    })
});

const checkWinner=()=>{
    for(let pattern of winPattern){
        console.log(pattern[0],pattern[1],pattern[2])
        console.log(boxs[pattern[0]],boxs[pattern[1]],boxs[pattern[2]])
    }
}