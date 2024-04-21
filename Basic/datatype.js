//data types are categorsied by means of storing and accessing the data by which we can difference them in primitive and non primitive

//primitive datatypes: call by value 

//7 types: when we access the primitive datatypes we get the copy of the datatypes and any changes done only in the copy
// string, number, boolean, null(pura khali), undefined( under value nhi h), symbol, BigInt

// Dynamically-typed languages are those (like JavaScript) where the interpreter assigns variables a type at runtime based on the variable's value at the time.
// refernce type(non primitive)

//Arrays, objects, (to master js then master the object in js and web events in js), functions

const id= Symbol('123')
const anotherid= Symbol('123')
console.log(id=== anotherid);


// ***********************
// MEMORY
//stack(primitive) and we get the copy of the memory _____, Heap(Non-primitve) we get refernce of oroginal value

let test1= "suraj"
let test2= test1

test2= "kumar"
console.log(test1);
console.log(test2);

let user={
    email:"sooraj@gmail.com",
    upi:"1234"
}
let user2= user
user2.email="sk@sj"
console.log(user.email);
console.log(user2.email);
