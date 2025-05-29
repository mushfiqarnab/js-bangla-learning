// console.log(2>1);

// console.log(2>=1);
// console.log(2 < 1);
// console.log(2==1);
// console.log(2!=1);


console.log("2">1); //2 is automatically converted to number
console.log("02">1);

console.log(null > 0); //here converts null to zero but its not greater than zero
console.log(null == 0);// doesnt convert null to zero
console.log(null >=0);//equality check doesn't convert null to number 0. But comparison converts null to 0
console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);
console.log(undefined <= 0); //better to avoid these to make the code clean


// ===

console.log("2" == 2);// gives true
console.log("2"===2); //checks more strictly as it compares the datatypes also.













