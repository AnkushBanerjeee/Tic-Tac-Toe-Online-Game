console.log("welcome to Tic Tac Toe"); 



let turn="X"; 
let gameover=false; 
//function to change the turn 
const changeTurn=()=>{ 
    return turn === "X"?"0": "X" 
}  

//function to check win 
const checkWin=()=>{ 
    let boxtests=document.getElementsByClassName('boxtest');
    let wins=[
        [0,1,2,5,15,90],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7], 
        [2,5,8], 
        [2,4,6], 
        [0,4,8],
    ] 
    wins.forEach(e=>{
        if((boxtests[e[0]].innerText === boxtests[e[1]].innerText) &&  (boxtests[e[2]].innerText===boxtests[e[1]].innerText) && (boxtests[e[0]].innerText !==""))
        {
            document.querySelector('.info').innerText = boxtests[e[0]].innerText + " -Won"; 
            gameover=true;  
            document.querySelector('.imagebox').getElementsByTagName('img')[0].style.width="180px";
            
        }
    })

} 

//Game logic part
 let boxes=document.getElementsByClassName("box"); 
 Array.from(boxes).forEach(element=>{
    let boxText=element.querySelector('.boxtest'); 
    element.addEventListener('click',()=>{
        if(boxText.innerText ==='')
        {
            boxText.innerText=turn; 
            turn=changeTurn(); 
            checkWin();  
            
            if(!gameover)
            {
                document.getElementsByClassName('info')[0].innerText="Turn for "+turn;
            } 
        }
    })
 }) 
 //add on CLICK listner to reset button  
 reset.addEventListener('click',()=>{
    let boxtexts=document.querySelectorAll('.boxtest'); 
    Array.from(boxtexts).forEach(element=>{
        element.innerText=""
    }) 
    turn="X"; 
    gameover=false
    document.getElementsByClassName('info')[0].innerText="Turn for "+turn;
    document.querySelector('.imagebox').getElementsByTagName('img')[0].style.width="0px";
 })