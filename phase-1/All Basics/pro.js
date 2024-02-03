// Declaration and initialization of an array
let fruits = ["Apple", "Banana", "Orange", "Mango"];

// Accessing elements of an array
console.log(fruits[0]); // Output: 'Apple'
console.log(fruits[1]); // Output: 'Banana'

// Modifying elements of an array
fruits[2] = "Grapes";
console.log(fruits); // Output: ['Apple', 'Banana', 'Grapes', 'Mango']

// Array length
console.log(fruits.length); // Output: 4

// Adding elements to the end of an array
fruits.push("Pineapple");
console.log(fruits); // Output: ['Apple', 'Banana', 'Grapes', 'Mango', 'Pineapple']

// Removing the last element from an array
let removedFruit = fruits.pop();
console.log(removedFruit); // Output: 'Pineapple'
console.log(fruits); // Output: ['Apple', 'Banana', 'Grapes', 'Mango']

// Iterating over an array
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// Using forEach for iteration
fruits.forEach(function (fruit) {
  console.log(fruit);
});

// // Declaration and initialization of an object
// let person = {
//   firstName: 'John',
//   lastName: 'Doe',
//   age: 30,
//   address: {
//     street: '123 Main St',
//     city: 'Anytown',
//     country: 'USA'
//   }
// };

// // Accessing properties of an object
// console.log(person.firstName); // Output: 'John'
// console.log(person['lastName']); // Output: 'Doe'
// console.log(person.address.city); // Output: 'Anytown'

// // Modifying properties of an object
// person.age = 31;
// console.log(person); // Output: { firstName: 'John', lastName: 'Doe', age: 31, address: { street: '123 Main St', city: 'Anytown', country: 'USA' } }

// Object Values
// let person = { firstName: 'John', lastName: 'Doe', age: 30 };
// let keys = Object.keys(person);
// console.log(keys); // Output: ['firstName', 'lastName', 'age']

// Object Enteries
// let person = { firstName: "John", lastName: "Doe", age: 30 };
// let entries = Object.entries(person);
// console.log(entries); // Output: [['firstName', 'John'], ['lastName', 'Doe'], ['age', 30]]

// Object Assign
// let person = { firstName: 'John', lastName: 'Doe' };
// let details = { age: 30, country: 'USA' };
// let mergedObject = Object.assign({}, person, details);
// console.log(mergedObject);
// // Output: { firstName: 'John', lastName: 'Doe', age: 30, country: 'USA' }

// Destructuring
// let person = { firstName: 'John', lastName: 'Doe', age: 30 };

// // Destructuring assignment for objects
// let { firstName, lastName, age } = person;
// console.log(firstName); // Output: 'John'
// console.log(lastName);  // Output: 'Doe'
// console.log(age);       // Output: 30

// Object shorthands
// let firstName = 'John';
// let lastName = 'Doe';

// // Object shorthand
// let person = { firstName, lastName };
// console.log(person); // Output: { firstName: 'John', lastName: 'Doe' }

// Object Methods
// let person = {
//   firstName: 'John',
//   lastName: 'Doe',
//   getFullName: function () {
//     return this.firstName + ' ' + this.lastName;
//   }
// };

// console.log(person.getFullName()); // Output: 'John Doe'

// Object Spread Operator
// let person = { firstName: 'John', lastName: 'Doe' };
// let details = { age: 30, country: 'USA' };

// // Object spread operator for merging objects
// let mergedObject = { ...person, ...details };
// console.log(mergedObject);

// Object Freez
// let person = { firstName: "John", lastName: "Doe" };
// Object.freeze(person);

// // Trying to modify a frozen object will result in an error in strict mode
// // person.age = 30; // Error in strict mode

// console.log(person); // Output: { firstName: 'John', lastName: 'Doe' }
