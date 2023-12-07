function acceleration(){
    state.values.gameVelocity = state.values.gameVelocity - 1
    console.log(state.values.gameVelocity)
}

function agoravai(){
    if(quadrado){
        clearInterval(quadrado)
    }
    quadrado = setInterval(randomSquare,speed) 

}

countDownAgoraVaiId: setInterval(agoravai,1000)
