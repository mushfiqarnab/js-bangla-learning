// let score = "33abbc"

// console.log(typeof score);
// let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber); //Nan

// let score1 = undefined//null
// let valueInNumber2 = Number(score1)
// console.log(valueInNumber2);

// "33" ==> 33
//"33abc" ==> Nan = Not a number
// true ==> 1 ; false ==>0


// let isLoggedIn = 1

// let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

let str1 = "hello "
let str2 = "Arnab"
let str3 = str1 + str2
console.log(str3);

console.log("1"+ 2 + 2);
console.log( 1 + 2 +"2");


let gameCounter = 100
gameCounter++;
console.log(gameCounter);
++gameCounter;
console.log(gameCounter);

let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`); // returns the value before incrementing
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`); // returns the value after incrementing
// Expected output: "a:4, b:4"
