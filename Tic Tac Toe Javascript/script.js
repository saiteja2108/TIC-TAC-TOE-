console.log("welcome to Tic Tac Toe")
let turn="x"
let isgameover = false
// to change the turn
const changeTurn=()=>{
    return turn ==="x"?"0":"x"
}
//to check for win
const wincheck=()=>{
    let boxtexts= document.getElementsByClassName('boxtext');
    let wins= [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    wins.forEach(e=>{
        if((boxtext[e[0]].innerText===boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxText[e[0]].innerText !== "") ){
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + "WON"
            isgameover = true;
        }
    })
}

//game
let boxes= document.getElementsByClassName("box")
Array.from(boxes).forEach(element =>{
    let boxtext= element.querySelector('.boxtext');
    element.addEventListener('click',()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText= turn;
            turn=changeTurn();
            checkwin();
            if(!isgameover){
                document.getElementsByClassName("info")[0].innertext = "Turn for"+ turn;
            }
        }
    })
}) 

//reset button
reset.addEventListener('click',()=>{
    let boxtexts= document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element =>{
        element.innerText = ""
    });
})