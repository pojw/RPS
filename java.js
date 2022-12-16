function Hey(choice){
    console.log(choice)
    const response= document.querySelector("#response")
    response.removeChild(response.lastChild)

    const texts=document.createElement('div')
    texts.classList.add("content")

    texts.textContent=`${choice}`

    response.appendChild(texts)




    let list= ["paper","rock","scisscors"]
    let computerChoice= list[Math.floor(Math.random()*3)]
    console.log(computerChoice)
    if(choice===computerChoice){
        console.log(`${choice} ties  ${computerChoice}`)
    }
    else if(choice==="paper"&& computerChoice==="rock"){
        console.log(`${choice} beats  ${computerChoice}`)
    }
    else if (choice === "rock "&& computerChoice==="scisscors"){
        console.log (`${choice} beats  ${computerChoice}`)
    }
    else if (choice==="scisscors"&& computerChoice==="paper "){
        console.log(`${choice} beats  ${computerChoice}`)
    }
    else{console.log (`${choice} loses to ${computerChoice}`)}
}