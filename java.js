function Hey(choice){
    let scoreWins = document.querySelector(".winNumber")
    let scoreLost= document.querySelector(".lostNumber")
    let result = document.querySelector("#answer")
    

   
    
    let list= ["paper","rock","scisscors"]
    let computerChoice= list[Math.floor(Math.random()*3)]

    if(choice===computerChoice){
       result.textContent="tie good job"
   
    }
     else if(choice === "rock"&& computerChoice==="scisscors"){
       result.textContent=`${choice } beats ${computerChoice}`
       scoreWins.textContent+="I"    }

    else if (choice==="paper"&& computerChoice==="rock"){
    result.textContent=`${choice } beats ${computerChoice}`
    scoreWins.textContent+="I"
   }
    else if(choice==="scisscors"&& computerChoice==="paper"){
        result.textContent=`${choice } beats ${computerChoice}`
        scoreWins.textContent+="I"    }
    
    else{  
        scoreLost.textContent+="I"
        result.textContent=`${choice} loses to ${computerChoice}` 

}
console.log( choice )
console.log( computerChoice )

}

function startGame(){
    const wins=document.querySelector("#wins")

    if( wins.children.length > 0){
        const zeroWinNumber=document.querySelector(".winNumber")
        zeroWinNumber.textContent="I"  
        const  zeroLostNumber = document.querySelector(".lostNumber")
        zeroLostNumber.textContent="I"
    }
    else{
    const wins=document.querySelector("#wins")

    const winNumber = document.createElement("div")
    winNumber.classList.add("winNumber")
    winNumber.textContent="I"

    wins.appendChild(winNumber)

    const lost = document.querySelector("#lost")

    const lostNumber = document.createElement("div")
    lostNumber.classList.add("lostNumber")
    lostNumber.textContent="I"
    lost.appendChild(lostNumber)
    }}
