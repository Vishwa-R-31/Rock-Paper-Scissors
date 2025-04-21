let score= JSON.parse(localStorage.getItem('score')) || {
    wins:0,
    losses:0,
    ties:0
};

updateScoresElement();

//auto play
let autoPlaying=false;
let intervalId;
function autoPlay(){
 if(!autoPlaying){
    intervalId= setInterval(()=>{
        playGame(pickComputerMove());
        autoPlaying=true;
    },1000)
    autoPlaying=true;
 } else {
    clearInterval(intervalId);
    autoPlaying=false;
 }
}

function autoPlaySelected(){
    const buttonElement=document.querySelector('.js-auto-play-button');

    if(buttonElement.innerText === 'Auto Play'){
        buttonElement.innerHTML='Stop Play';
    }
    else{
        buttonElement.innerHTML='Auto Play';
    }
}
//rock button
document.querySelector('.js-rock-button').addEventListener('click',()=>{
    playGame('Rock');
});
//scissors button
document.querySelector('.js-scissors-button').addEventListener('click',()=>{
    playGame('Scissors');
});
//paper button
document.querySelector('.js-paper-button').addEventListener('click',()=>{
    playGame('Paper');
});
//reset button
document.querySelector('.js-reset-score-button').addEventListener('click',()=>{
    score.wins=0;score.losses=0;score.ties=0; localStorage.removeItem('score'); updateScoresElement();
});
//auto play button
document.querySelector('.js-auto-play-button').addEventListener('click',()=>{
    autoPlay(); 
    autoPlaySelected();
});

//play game
function playGame(playerMove)
{
const computerMove= pickComputerMove();
let result='';
if(playerMove === 'Scissors'){
if(computerMove === 'Rock')
result='You Lose';
else if(computerMove === 'Scissors')
result='You Tied';
else if(computerMove === 'Paper')
result='You Win';
}
else if(playerMove === 'Paper')
{
    if(computerMove === 'Rock')
    result='You Win';
    else if(computerMove === 'Scissors')
    result='You Lose';
    else if(computerMove === 'Paper')
    result='You Tie';
}
else if(playerMove === 'Rock')
{
    if(computerMove === 'Rock')
    result='You Tie';
    else if(computerMove === 'Scissors')
    result='You Win';
    else if(computerMove === 'Paper')
    result='You Lose';
}
if(result === 'You Win')
score.wins +=1;
else if(result === 'You Lose')
score.losses +=1;
else if(result === 'You Tie')
score.ties +=1;

localStorage.setItem('score',JSON.stringify(score));
updateScoresElement();

document.querySelector('.js-result').innerHTML =result;
document.querySelector('.js-moves').innerHTML =`You<img src="images/${playerMove}-emoji.png" class="move-icon"><img src="images/${computerMove}-emoji.png" class="move-icon">Computer.`;
}
//update scores
function updateScoresElement()
{
document.querySelector('.js-scores').innerHTML =`Wins :${score.wins},Losses :${score.losses},Ties :${score.ties}`;
}
//keydown
document.body.addEventListener('keydown',(event)=>{
 if(event.key === 'r'){
    playGame('Rock');
 } else if(event.key === 's'){
    playGame('Scissors');
 } else if(event.key === 'p'){
    playGame('Paper');
 }
});
//computer move
function pickComputerMove() {
let computerMove = "";
const randomNumber = Math.floor(Math.random()*10+1);
if (randomNumber >= 0 && randomNumber <=3) computerMove = "Rock";
else if (randomNumber>3 && randomNumber <=7)
computerMove = "Paper";
else if (randomNumber >7 && randomNumber <= 10)
computerMove = "Scissors";

return computerMove;
}