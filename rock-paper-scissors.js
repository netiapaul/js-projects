const getUserChoice=userInput => {
 userInput = userInput.toLowerCase();
  if (userInput==='rock' || userInput==='paper' || userInput==='scissors' || userInput==='bomb'){
    return userInput;
  }else{
    console.log('there was an error')
  }
}

console.log(getUserChoice('paper'));

const getComputerChoice=()=>{
  let randomnumber=Math.floor(Math.random() * 3);
  switch (randomnumber) {
  case 1:
    return 'rock';
     break;
  case 2:
    return 'paper';
     break;
  case 3:
    return 'scissors';
    break;
  default:
     return 'wrong pick'
     break;
	}
}
console.log(getComputerChoice());

let determineWinner =(userChoice,computerChoice)=>{
   if (userChoice === 'bomb') {
  return 'you destroyed the game';
}
  
  if (userChoice === computerChoice) {
  return 'The game is a tie!';
}
  if(userChoice==='rock'){
    if (computerChoice==='paper'){
      return 'computer won';
    }else{
      return 'user choice won';
    }
     
     }
  if(userChoice==='paper'){
    if(computerChoice==='rock' || computerChoice==='scissors'){
      return 'the computer won';
    }else
      return 'you worn';
  }
  
  if(userChoice==='scissors'){
    if(computerChoice==='rock' || computerChoice==='paper'){
      return 'the computer won';
    }else
      return 'you worn';
  }
}

console.log(determineWinner('paper','rock'));
console.log(determineWinner('rock','scissors'));
console.log(determineWinner('rock','paper'));

const playGame = () => {
   const userChoice = getUserChoice('bo');
   const computerChoice = getComputerChoice();
   console.log('You threw: ' + userChoice);
   console.log('The computer threw:' + computerChoice);
   console.log(determineWinner(userChoice, computerChoice));
};

playGame();



