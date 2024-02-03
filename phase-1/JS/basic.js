// console.log("am hadi raza");

// let games = ["gta", "counter strike", "abc", "xyz", "cccc"];

// console.log(games[0]);

// games[0] = "gta v2";

// console.log(games[0]);

// LOOP ?
// for (let i = 0; i < 3; i++) {
//   console.log(games[i]);
// }

// console.log(games.length);

// for (let i = 0; i < games.length; i++) {
//   console.log(games[i]);
// }

// games.push("creator");

// for (let i = 0; i < games.length; i++) {
//   console.log(games[i]);
// }

// games.pop();

// let lenght = games.length;

// for (let i = 0; i < lenght; i++) {
//   console.log(games[i]);
// }

// let a = games.pop();

// console.log(a);

// games.forEach( function(x) {
//   console.log(x)
// } )

// games.shift();

// console.log(games);

// socials app

// console.log(games.slice(0, 3));

// let limit = 4;
// console.log(games.slice(0, limit));

// let car = {
//   name: "BMW",
//   model: 2024,

//   engine: {
//     num: 234,
//     type: "abc",
//   },
// };

// console.log(person.name)
// console.log(person.age)
// console.log(person["age"]);
// let name = person["name"];

// console.log(car.engine.num);

// console.log( Object.values(car) )

// const { name, model } = car;

// console.log(name, model);

// const bike = {
//   name: "r1",
//   model: 2024,

//   engine: {
//     num: 234,
//     type: "abc",
//   },
// };

// Object.freeze(bike);

// bike.name = "125";

// console.log(bike)

// let product = [

//   {
//     title : "laptop",
//     version : "123",
//     features : [
//       {

//       }
//     ]
//   }
// ]

// let a = 1;
// let b = 2;

// console.log(a+b);

// let a1 = 10;
// let b2 = 20;

// console.log(a1+b2);

// function add(x, y) {
//   return x + y;
// }

// let a = add(10, 20);
// let a1 = add(90, 10);
// let a2 = add(100, 500);

// console.log({
//   a,
//   a1,
//   a2,
// });

// const add = (x, y) => {
//   return x + y;
// };

// console.log(add(10, 990));

// let a = 10;

// const func = () => console.log("am here");

// setTimeout(func, 1000);

// console.log(a);

// const fetchingData = () =>{
//   // req to backend
//   // vairable
// }

// const addNumbers = (x, koiBhi) => {
//   if (x > 10) {
//     koiBhi(x);
//     return "yes am here";
//   } else {
//     return "am not here";
//   }
// };

// const myNewFunc = (kuchBhi) => {
//   console.log(kuchBhi);
// };

// console.log(addNumbers(11, myNewFunc));

// const Func1 = (x) => {
//   console.log(x());
//   return x;
// };

// const func2 = () => {
//   return "hahaha";
// };

// console.log(Func1(func2));

// const perons = [
//   {
//     name: "hadi raza",
//     age: 24,
//     isGraduate: true,
//     interest: ["React", "Node", "Architecture", "Sleeping"],
//   },

//   {
//     name: "shuja haider",
//     age: 22,
//     isGraduate: true,
//     interest: ["React", "Node", "Architecture"],
//   },
// ];

// const func = () => {};
// () => {}

// let onePerson = perons.find((x) => {
//   return x.age === 22;
// });

// let onePerson = perons.findIndex((x) => {
//   return x.age === 22;
// });

// perons.map((x, index) => console.log(x.interest));

// let reactors = perons.find((x) => x.interest.includes("React"));

// console.log(reactors);

// var regex = /hello/;

// var str = "hadiraza";
// var str1 = "hello";

// var result = regex.test(str);
// console.log(result);

// if (str === str1) {
//   console.log("yes");
// } else {
//   console.log("no");
// }

// let str = "hadi raza";

// console.log(str.length);

const words = ["a", "e", "i", "o", "u"];

// hadiraza =
// func("kya hal hein?") -> 4

// function vowels(str) {
//   let count = 0;

//   let words = ["a", "e", "i", "o", "u"];

//   for (let i of str) {
//     // console.log(i);
//     if (words.includes(i)) {
//       count++;
//     }
//   }

//   return count;
// }

// let a = vowels("hadiraza");
// console.log(a);

// let a = 10;
// console.log(typeof a.toString());

let skills = "react,nodejs,java";

// console.log(skills.split(","));

let skillsArr = skills.split(",");
console.log(skillsArr.reverse().join());



//task1 : Function Str reverse
//    for example : hadi raza -> raza hadi


//task2:  Function Num rever (Math.sign)
//    for example : 100 -> 001, -51 -> -15


console.log(Math.sign(50000000000))