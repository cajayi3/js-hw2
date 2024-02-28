//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

for(let key in person3) {
  if (Array.isArray(person3[key])) {
      console.log(`${key}: ${person3[key].join(", ")}`);
  }else if (typeof person3[key] === "object") {
    for (let subKey in person3[key][0]) {
        console.log(`${subKey}: ${person3[key][0][subKey]}`);
    }
  } else {
      console.log(`${key}: ${person3[key]}`);
  }
}

console.log(value)
//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype
function Person(firstname, lastname, age) {
  this.firstname = firstname;
  this.lastname = lastname;
  this.age = age;
}

Person.prototype.printInfo = () => {
  return `Name: ${this.firstname} ${this.lastname}, Age: ${this.age}`;
}

Person.prototype.incrementAge = () => {
  this.age++;
}

const person1 = new Person('Sandra', 'Hernandez', 23);
const person2 = new Person('Aaron', 'Diaz', 25);

console.log(person1.printInfo());
console.log(person2.printInfo());

person1.incrementAge();
console.log(person1.printInfo());

// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/
function checkStringLength(string) {
  return new Promise((resolve, reject) => {
      if (string.length > 10) {
          resolve("Big word");
      } else {
          reject("Small Number");
      }
  });
}

checkStringLength("Hello World!")
  .then((result) => {
      console.log(result);
  })
  .catch((error) => {
      console.log(error);
  });

//-------------------

//Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
// Function to determine even or odd
function evenOrOdd(num) {
  return num % 2 === 0 ? 'Even' : 'Odd';
}


//In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
function makeNegative(num) {
  return num > 0 ? -num : num;
}