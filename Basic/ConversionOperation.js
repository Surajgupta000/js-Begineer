let score="33aab" //NaN not-a- number
// console.log(typeof score);
// console.log(typeof (score)); //as a mrthod we can also check its datatype by keeping it in small brackets
let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber);


//"33"=>33
//"33abc"=> NaN
// true=>1
//false=>0

let isLoggedIn= 1
let booleanisLoggedIn= Boolean(isLoggedIn)
console.log(booleanisLoggedIn);

//1=>true; 0=> false
//""=>false
//"suraj"=>true

// let somenum=33
// let stringnmu= String(somenum)
// console.log( typeof stringnmu);

//*********************************Operations **********************************/

let value=3
let negvalue= -value
console.log(negvalue);

let str1= "suraj"
let str2= " fortnight"
let str3= str1 - str2 // it gives NaN output, but if we + them it will simply add them as a string
console.log(str3);

