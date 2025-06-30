let boxes=document.querySelectorAll(".box");
let resets=document.querySelector(".reset");
let new_button=document.querySelector(".new");
let contain=document.querySelector(".contain");
let msg=document.querySelector(".msg");
let turn=true;
const check_patter=[
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6] // Diagonals
];
const resetgame = ()=>{
    turn=true;
    boxesendisabled();
    contain.classList.add("hide");
};
boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        if(turn){
            box.innerText="O";
            turn=false;
        }else{
            box.innerText="X";
            turn=true;
        }
        box.disabled=true;
        checkwinner();
    });
});
const boxesdisabled=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};
const boxesendisabled=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};
const showwinner=(winner)=>{
    msg.innerText=`congraluations,winner is ${winner} `;
    contain.classList.remove("hide");
    boxesdisabled();
};
const checkwinner=()=>{
    let draw=true;
    for(patter of check_patter){
        let pos1=boxes[patter[0]].innerText;
        let pos2=boxes[patter[1]].innerText;
        let pos3=boxes[patter[2]].innerText;
        if(pos1 != "" && pos2 != "" && pos3 !=""){
            if(pos1===pos2 && pos2===pos3){
                showwinner(pos1);
             }
        }
    }
    boxes.forEach((box) => {
        if (box.innerText === "") {
            draw = false;
        }
});
if (draw) {
    showdraw();
}
};

const showdraw = () => {
msg.innerText = "It's a draw! next match";
contain.classList.remove("hide");
boxesdisabled();
};
resets.addEventListener("click",resetgame);
new_button.addEventListener("click",resetgame);