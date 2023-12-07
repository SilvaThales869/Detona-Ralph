let speed = 1000
let quadrado = null
let squareNumber
const state = {
    view: {
        score: document.querySelector("#score") ,
        time: document.querySelector("#time"),
        square: document.querySelectorAll(".square"),
        enemy: document.querySelector(".enemy"),
        life: document.querySelector("#life"),
    },
    values:{
        initTime:60,
        initLife:3,
        initScore:0,
        hitposition:0,
        gameVelocity: 1000,
    },
    
}
const action = {
    stop:{
        countDownTimerId: setInterval(countDown, 1000),
    },
}

function randomSquare(){
    state.view.square.forEach((square) => {
        square.classList.remove("damage")})
    state.view.square.forEach((square) => {
        square.classList.remove("enemy")})
    squareNumber = Math.floor(Math.random()*9)
    state.view.square[squareNumber].classList.add('enemy')
    state.values.hitPosition = state.view.square[squareNumber].id
    console.log(speed)
}


function countDown() {
    state.values.initTime--;
    state.view.time.textContent = state.values.initTime;
    if(state.values.initTime<=0){
        clearInterval(action.stop.countDownTimerId)
        clearInterval(action.stop.countDownRandomSquareID)
        clearInterval(quadrado)
        alert("Game Over!")
    }
}

function playsound(audioname){
    let audio = new Audio(`./src/audios/${audioname}.m4a`)  
    audio.play()
    audio.volume = 0.02
}

function addListenerHitBox() {
    state.view.square.forEach((square)=>{
        square.addEventListener("mousedown",()=>{
            if(square.id === state.values.hitPosition){
                state.view.square[squareNumber].classList.add('damage')
                state.values.hitPosition = state.view.square[squareNumber].id
                state.values.initScore ++
                state.view.score.textContent = state.values.initScore
                state.values.hitPosition = null
                playsound("hit")
                speed = speed - 10
                if(quadrado){
                    clearInterval(quadrado)
                }
                quadrado = setInterval(randomSquare,speed)                
            }
            else{
                if(state.values.initLife>0){
                    state.values.initLife--
                    state.view.life.textContent = state.values.initLife
                }
                else if (state.values.initLife=0){
                    state.values.initLife--
                }

                else{
                    alert("Game Over!")
                    clearInterval(action.stop.countDownTimerId)
                    clearInterval(action.stop.countDownRandomSquareID)
                    clearInterval(quadrado)
                }
            }
        })
    })
}


addListenerHitBox()
randomSquare()
