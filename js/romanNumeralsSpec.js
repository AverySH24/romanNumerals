var rn = require("./romanNumerals");

console.log(rn.toRoman(1) === 'I');
console.log(rn.toRoman(3) === 'III');
console.log(rn.toRoman(4) === 'IV');

console.log(rn.toRoman(944) === 'CMXLIV')
console.log(rn.toRoman(150)=== 'CL')
console.log(rn.toRoman(12) === 'XII')
console.log(rn.toRoman(700) === 'DCC')
console.log(rn.toRoman(800) === 'DCCC')
console.log(rn.toRoman(900) === 'CM')
console.log(rn.toRoman(1001) === 'MI')
console.log(rn.toRoman(1004) === "MIV")
console.log(rn.toRoman(3000) === "MMM")
