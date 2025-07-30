let gameSeq=[]
let playerSeq=[]
let started=false
let level=0
let hs=0
h2=document.querySelector("h2")
h3=document.querySelector("h3")
  let btns=["violet","marine","beige","pink"]
document.addEventListener("keyup", function(){
    if(started==false){
    
    started=true
    levelUp()
    }
    
})
function btnFlash(btn){
  btn.classList.add("flash")
  setTimeout(function(){
    btn.classList.remove("flash")
  }
  ,500)
  }

function levelUp(){
    level++
    playerSeq=[]
    h2.innerText=`Level ${level}`
    let randInd=Math.floor(Math.random()*4)
    let randColour=btns[randInd]
    let randBtn=document.querySelector(`.${randColour}`)
    gameSeq.push(randColour)
    console.log(gameSeq)
    btnFlash(randBtn)
}

function checkbtn(index){
    
    if(gameSeq[index]==playerSeq[index])
    {
        if(gameSeq.length==playerSeq.length){
            setTimeout(levelUp,1000)
        }

    }
    else{
     h2.innerHTML=`Game over!Your score was  <b>${level}</b> <br> Press any key to start`
     if (level>hs){
        hs=level
     }
     h3.innerText=`Highest Score:${hs}`
     document.querySelector("body").style.backgroundColor="red"
     setTimeout(function(){
        document.querySelector("body").style.backgroundColor="white"
     },150)
     reset()
    }
}
function btnPress(){
//  console.log(this)
 let btn=this
 btnFlash(btn)
 playerColor=btn.getAttribute("id")
 playerSeq.push(playerColor)
 checkbtn(playerSeq.length-1)
}

    let allBtns = document.querySelectorAll(".btn");
    
    for (let btn of allBtns) {
        btn.addEventListener("click", btnPress);
    }

   function reset()
    {
        level=0
        started=false
        gameSeq=[]
        playerSeq=[]
    }
