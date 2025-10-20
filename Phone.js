const display = document.getElementById("display");

function myfunc(input){
display.value += input;
}

function cleardisplay(){
display.value = "";
}

function game(){
    const player = prompt("Chose rock, paper or scissors").toLowerCase().trim();
  const number = Math.ceil(3*Math.random());

  let computer;

  switch(number){
    case 1:
        computer = 'rock';
        break;
        case 2:
            computer = 'paper';
            break;
            case 3:
                computer = 'scissors';
  }

  if (player === computer){
    alert(`You both win! ${player}`);
  }else if(player === 'rock' && computer === 'scissors'
    ||
    player === 'paper' && computer === 'rock'
    ||
    player === 'scissors' && computer === 'paper'){
        alert(`You win! ${player} always beats ${computer}!`);
    }
  else{
    alert(`You lose! ${player} will never beats ${computer}!`)
  }
}

const content = () => "Hello "; {

}

function compact(){
for(num = 1; num < 13; num++){

    for(num1 = 1; num1 < 13; num1++){
        alert(`${num} multiply by ${num1} is ${num * num1}`);
    }
}
}

function result(){
    try{
display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }
}