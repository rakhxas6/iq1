//
// 1 hoisting rule - it allows us to use variables before declaring
//let declare garesi matrai access garna paiyo
// variable chai pailai access garinca tara undefined aauxa

// function fruit() {
//   console.log(name);
//   console.log(price);

//   let price = 20;
//   var name = "apple";
// }
// fruit();

// for loop pahilai sakinxa chalera ani setTimeout chalne ho teti bela chai i = 3
//2 output 3 times 3 variable has global scope. so it will print the last value it store as in this case it is three.

// for (var i = 0; i < 3; i++){
//     setTimeout(()=> console.log(i),1)
// }

//let has block scope and thats why it will print different values each time it runs
//3

// for (let i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 1);
// }

//  const string = "hello"
//4

//whenever we put plus sign infront of string and boolean values it changes itself to number
// console.log(+false) //0
// console.log(+true)  //1
// console.log( typeof +true)  //number

// negation ahead of "string"
//5
// console.log(console.log(!"anil")) //false
// console.log(console.log(typeof("anil")))  //string

// 6

// let data = "size"
// const bird = {
//     size: "small",
// };
// console.log(bird[data]) //small
// console.log(bird["size"]) // small
// console.log(bird.size)       //small
// console.log(bird.data) //undefined

// 7
//when the memory reference in one object i.e  c is changed and d also changes as they share the memory
// let c = { name: "ram" };
// let d;

// d = c;
// c.name = "shyam"
// console.log(d.name)  //shyam

// 8
//we can declare as many as we want as it has global scope
// var x;
// var x = 10;
// console.log(x) //10

//9
// var x;
// let x = 10;
// console.log(x); //error

//10
let a = 3;
let b = new Number(3);
console.log(typeof b);

console.log(a == b); //true
console.log(a === b); //false
