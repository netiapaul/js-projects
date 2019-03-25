/*
Magic Eight Ball
You’ve learned a powerful tool in JavaScript: control flow! It’s so powerful, in fact, that it can be used to tell someone’s fortune.

In this project we will build the Magic Eight Ball using control flow in JavaScript.

The user will be able to input a question, then our program will output a random fortune.

If you get stuck during this project, check out the project walkthrough video which can be found at the bottom of the page after the final step of the project.

*/










let userName='jane';
userName==='jane'? console.log('Hello, Jane!'):console.log('Hello');
let userQuestion='what do you want to ask the magic ball';
console.log(`the user asked:${userQuestion}`);
let randomNumber=Math.floor(Math.random() * 8);
if (randomNumber===1){
  console.log('your 1 predicition')
}else if(randomNumber===2){
  console.log('your 2 predicition')
}else if(randomNumber===3){
  console.log('your 3 predicition')
}else if(randomNumber===4){
  console.log('your 4 predicition')
}else if(randomNumber===5){
  console.log('your 5 predicition')
}else if(randomNumber===6){
  console.log('your 6 predicition')
}else if(randomNumber===7){
  console.log('your 7 predicition')
}else if(randomNumber===8){
  console.log('your 8 predicition')
}else(
  console.log('you never predicited')
)