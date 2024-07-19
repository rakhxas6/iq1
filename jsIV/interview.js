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
// let a = 3;
// console.log(typeof a)
// // let b = 3;
// let b = new Number(3); // new garesi object vayo
// console.log(typeof b)

// console.log(a == b); //value match garda same
// console.log(a === b); //type pani herxa yele so false

// 11
// let name;
// nmae = {};
// console.log(name)  //undefined

//12
// function fruit() {
//     console.log("Wooof!")
// }

// fruit.name = "apple";
// fruit();

//13
// function sum(a, b) {
//     return a+b
// }
// console.log(sum(1, "2")) //12

// 14
// let number = 0
// console.log(number++) //0 it only prints 0 then increments it so now number is 1
// console.log(++number) // 1+1 is 2
// console.log(number) //2

// let number = 3
// console.log(number--) //3 -1 = 2
// console.log(--number)//2-1 =1
// console.log(number) //1

// 15
// function getAge(...args) {
//     console.log(typeof args)  // in js everything is object {}
// }

// getAge(21);

// 16
// function getAge() {
//     "use strict"; /// undefined as it doesnot allow to hoisting so age should have variable
//     age = 21;
//     console.log(age)
// }
// getAge();

// 17

// const sum = eval('10*10+5') //it takes string but performs arthimetic operation
// console.log(sum)

// 18
// How long is cool_secret accessible?  tab closehuda samma
// sessionStorage.setItem('cool_secret', 123)

// 19
// const obj = { 1: "a", 2: "b", 3: "c" } //object

// we can check property/key with either string or number but if the string is declared then "string must be used"
// console.log(obj.hasOwnProperty("1") )//true
// console.log(obj.hasOwnProperty(1)); //true

//20
// const obj = { a: "one", b: "two", a: "repeat" };
// console.log(obj) //a value will be rewrite as repeat

// 21

for (let i = 1; i < 5; i++){
    if (i === 3) continue;
    console.log(i)
}

//22
// const foo = () => console.log("first");
// const bar = () => setTimeout(() => console.log("second")); //settimeout last ma chalxa sadhai
// const baz = () => console.log("third"); //normal function jun pahila call gareo tehi 


// bar()
// foo()
// baz()
