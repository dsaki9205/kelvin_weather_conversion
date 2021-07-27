//setting kelving temprature 293
const kelvin = 293;

//setting up celcius tempreature by subtracting from kelvin
const celsius = kelvin - 273;

// seeting up farenheit temprature
let fahrenheit = celsius * (9/5) + 32;

//using math.floor to round down the fahreheit tempreature
fahrenheit = Math.floor(fahrenheit);

console.log(`The tempreture is ${fahrenheit} degrees`)
