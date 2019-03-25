/*
Deep in his mountain-side meteorology lab, the mad scientist Kelvin has mastered weather prediction.

Recently, Kelvin began publishing his weather forecasts on his website. However there’s a problem: All of his forecasts describe the temperature in Kelvin.

With our knowledge of JavaScript, let’s convert Kelvin to Celsius, then to Fahrenheit.

For example, 283 K converts to 10 °C which converts to 50 °F.

*/

const kelvin=0;
// declared a variable called kelvin with a value of 293
const Celsius=kelvin-273;
// celsius derived from kelvin - 273;
let Fahrenheit = Celsius * (9/5) + 32
// calculate Fahrenheit
fahrenheit = Math.floor(Fahrenheit);
// converts fahrenheit
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

let Newton=Celsius * (33/100);
newton=Math.floor(Newton);
console.log(`The newton is ${newton} newtons`);