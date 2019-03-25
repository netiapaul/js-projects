/* Whale Talk
Take a phrase like ‘turpentine and turtles’ and translate it into its “whale talk” equivalent: ‘UUEEIEEAUUEE’.

There are a few simple rules for translating text to whale language:

There are no consonants. Only vowels excluding “y”.
The u‘s and e‘s are extra long, so we must double them in our program.
Once we have converted text to the whale language, the result is sung slowly, as is a custom in the ocean.

To accomplish this translation, we can use our knowledge of loops. Let’s get started!

If you get stuck during this project, check out the project walkthrough video which can be found at the bottom of the page after the final step of the project.

*/

let input='A whale of a deal!';
const vowels=['a', 'e', 'i', 'o', 'u'];
let resultArray=[];

for (let i=0; i < input.length; i++){
  for (let j=0; j < vowels.length; j++){
    if (input[i] === vowels[j] ){
      console.log(resultArray.push(input[i]));
      if (input[i] === 'e' ){
      console.log(resultArray.push('ee'));
    }else if(input[i] === 'u'){
       console.log(resultArray.push('uu'));
    }
      else{
      console.log(resultArray.push(input[i]));
    }
    }
  } 
}

console.log(resultArray)