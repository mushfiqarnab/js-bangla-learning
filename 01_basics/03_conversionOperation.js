let score = "33abbc"

console.log(typeof score);
let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber); //Nan

let score1 = undefined//null
let valueInNumber2 = Number(score1)
console.log(valueInNumber2);

// "33" ==> 33
//"33abc" ==> Nan = Not a number
// true ==> 1 ; false ==>0


let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);