let score=JSON.parse(localStorage.getItem('score')) ||
    {
    win:0,
    loss:0,
    tie:0
}

function computerMove(){
    let computerMove = Math.random();
    
    if(computerMove>=0 && computerMove<=1/3){
        computerMove='rock';
    }
    else if(computerMove>=1/3 && computerMove<=2/3){
        computerMove='paper';
    }else if (computerMove>=2/3 && computerMove<=1){
        computerMove='scissor';
    }

    return computerMove;


}

function updateScoreElement(){
    document.querySelector('.js-score')
    .innerHTML = `Wins: ${score.win}, Loss: ${score.loss}, Ties: ${score.tie}`;
}



function playerMove(move){
    const compMove=computerMove();
    let result='';
    if(move==='rock'){
        if(compMove==='rock'){
            score.tie++;
            result='Tie';
        }else if(compMove==='paper'){
            score.loss++;
            result='Computer Win';
        }else if(compMove==='scissor'){
            score.win++;
            result='You Win';
        }
    }else if(move==='paper'){
        if(compMove==='rock'){
            score.win++;
            result='You Win';
        }else if(compMove==='paper'){
            score.tie++;
            result='Tie';
        }else if(compMove==='scissor'){
            score.loss++;
            result='Computer Win';
        }
    }else if(move==='scissor'){
        if(compMove==='rock'){
            score.loss++;
            result='Computer Win';
        }else if(compMove==='paper'){
            score.win++;
            result='You Win';
        }else if(compMove==='scissor'){
            score.tie++;
            result='Tie';
        }
    }
    document.querySelector('.js-result').innerHTML = `${result}`;

    localStorage.setItem('score',JSON.stringify(score));

    document.querySelector('.js-move')
        .innerHTML = `You: 
        <img src="images/${move}.png" class="move-img">
        <img src="images/${compMove}.png" class="move-img"> Computer`;
    updateScoreElement();

    return result;

}

updateScoreElement();

function resetBtn(){
    score.loss=0;
    score.tie=0;
    score.win=0;
    document.querySelector('.js-score')
        .innerHTML = `Wins: ${score.win}, Loss: ${score.loss}, Ties: ${score.tie}`;
}