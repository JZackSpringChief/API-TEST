console.log("hello world");

const topSpeeds = [100, 130, 200];
topSpeeds[2] = 240;
topSpeeds.push(340);
topSpeeds[3] = 380;
console.log(topSpeeds[3]);

const scientists = ["Ada Lovelace", "Margaret Hamilton", "Grace Hopper"];

console.log(scientists[2]);

const genres = ["comedy", "fantasy"];
genres.push("horror");

console.log(genres);

const pace = [4.5, 4, 5, 5.2];

const best = pace.pop(3);

console.log(best);

const lockCombination = [9, 4, 7];
lockCombination.pop();

console.log(lockCombination);

const vehicles = ["car", "truck", "motorcycle", "bicycle"];

console.log(vehicles.length);

const friends = ["Jane", "Jim", "Jeri"];

for (let i = 0; i < friends.length; i++) {
  console.log(friends[i]);
}

const classes = ["math", "physics", "geography"];
const arrayLength = classes.length;
console.log(arrayLength);

const counter = [1, 2, 3, 4, 5, 6];
counter.pop();
console.log(counter.length);

const weather = ["sunny", "rainy", "cloudy"];
for (let i = 0; i < weather.length; i++) {
  console.log(weather[i]);
}

const siblings = ["Jon", "Jess", "Jen", "Jarod"];
const add = siblings.push("Jacob");
const middleChild = siblings[2];
console.log(`The middle child is ${middleChild}.`);

// Let's create an array that holds a bunch of to-do items.
// 1. Code an array that contains a list of these to-do's:  "⁠s⁠t⁠u⁠d⁠y⁠"⁠ ,  "⁠c⁠h⁠o⁠r⁠e⁠s⁠"⁠ , and  "⁠m⁠e⁠d⁠i⁠t⁠a⁠t⁠e⁠"⁠ . Store the array in the  t⁠o⁠d⁠o⁠s⁠  variable.
// 2. Use  p⁠o⁠p⁠  to remove the final to-do from the array and store this in the  r⁠e⁠m⁠o⁠v⁠e⁠  variable.
// 3. Create a  c⁠o⁠n⁠s⁠t⁠  variable  l⁠e⁠f⁠t⁠T⁠o⁠D⁠o⁠  that stores the number of items left in the  t⁠o⁠d⁠o⁠s⁠  array. Use an array property to code this step.
// Output:

const todos = ["study", "chores", "meditate"];
const remove = todos.pop();
const leftToDo = todos.length;
console.log(`You have ${leftToDo} items left to do.`);

function userAge(number) {
  const age = "User Age: " + number;
  return age;
}
console.log(userAge(22));

function userAge2(number) {
  const age = "User age: " + number;
  return age;
}
const result = userAge2(29);
console.log(result);

function userAge3(number) {
  const age = "User age: " + number;
  // return age; without return value we get back "undefined"
}
const result2 = userAge3(29);
console.log(result2);

function lessThanFive(number) {
  const lessThan = number < 5;
  return lessThan;
}

const result3 = lessThanFive(10);
console.log(result3);

function myFunc() {
  console.log("this is a func");
}
myFunc();

function dayRoutine() {
  console.log("one display statement");
}
dayRoutine();

function checkPoints() {
  const points = 7;
  const required = 10;
  console.log("Requirement reached");
  console.log(points > required);
}
checkPoints();

// function doorBellCamera(enabled) {
//   enabled = "Monitoring: ";
//   console.log(enabled);
// }
// doorBellCamera(true);

//above is wrong

// should be

function doorBellCamera(enabled) {
  console.log("Monitoring: " + enabled);
}
doorBellCamera(true);

function accomType(type) {
  const rating = "5 star";
  console.log(rating + " " + type);
}
accomType();

function displayTheNumber(number) {
  return "The number is " + number;
}
console.log(displayTheNumber(50));

function addGreeting(user) {
  const greeting = "Greetings " + user;
  return greeting;
}
const result5 = addGreeting("Alex");
console.log(result5);

function lessThanFive(number) {
  const lessThan = number < 5;
  return lessThan;
}
console.log(lessThanFive(4));

function displayCash(amount) {
  return amount + " Rubles";
}
console.log(displayCash(500));

// const author = "J<D";

// displayAuthor(author);

function displayNames(names) {
  console.log(names);
}

const students = ["Laurel", "Yanni"];
displayNames(students);

function getBMI(height, weight) {
  return weight / (height * height);
}
const bmi = getBMI(1.7, 70);
console.log(bmi);

function printMsg(first, second, third) {
  console.log(first + " " + second + " " + third);
}
const result6 = printMsg("Hello", "World", "!");

function calculateDifference(a, b) {
  return a - b;
}

function calculateSum(a, b) {
  return a + b;
}
console.log(calculateSum(30, 11));

function hasTheSameColor(colorsArray, color) {
  let isTheSameColor = false;
  for (let i = 0; i < colorsArray.length; i++) {
    if (colorsArray[i] === color) {
      isTheSameColor = true;
    }
  }
  return isTheSameColor;
}
console.log(hasTheSameColor(["green", "red", "black"], "black"));

function getArrayLength(inputArr) {
  return inputArr.length;
}
console.log("Length of array: " + getArrayLength([1, 25, 3, 5]));

function firstValue(array) {
  return array[0];
}
console.log("The first value is: " + firstValue([1, 2, 3, 4]));

function toSeconds(hours, minutes) {
  return (hours * 60 + minutes) * 60;
}
console.log(toSeconds(5, 2));

// Code a function that returns  t⁠r⁠u⁠e⁠  if the  n⁠u⁠m⁠b⁠e⁠r⁠  parameter is less than or equal to 0. Otherwise, return  f⁠a⁠l⁠s⁠e⁠ .
// Examples:
//  l⁠e⁠s⁠s⁠T⁠h⁠a⁠n⁠O⁠r⁠E⁠q⁠u⁠a⁠l⁠T⁠o⁠Z⁠e⁠r⁠o⁠(⁠7⁠)⁠  returns  f⁠a⁠l⁠s⁠e⁠ .
//  l⁠e⁠s⁠s⁠T⁠h⁠a⁠n⁠O⁠r⁠E⁠q⁠u⁠a⁠l⁠T⁠o⁠Z⁠e⁠r⁠o⁠(⁠-⁠5⁠)⁠  returns  t⁠r⁠u⁠e⁠ .

function lessThanOrEqualToZero(number) {
  if (number <= 0) {
    return true;
  }
  return false;
}
console.log(lessThanOrEqualToZero(3));

const microwave = {
  brand: "samsung",
  heat: function () {},
};

const oven = {
  brand: "micro",
  on: true,
  isOn: function () {
    return this.on;
  },
};

const flower = '{"name": "tulip", "petals": 30, "city": "Amsterdam"}';
const flowerConversion = JSON.parse(flower);
console.log(flowerConversion.name);

const order = {
  itemName: "Candy",
  itemPrice: 2,
  itemQuantity: 10,
  available: true,
};

console.log(order.available);

const car = {
  make: "Toyota",
  model: "Camry",
};
console.log(car);

const coffee = {
  origin: "Nicaragua",
  bean: "Arabica",
  roast: "Dark",
  price: 2.99,
};
coffee.price = 3.99;
console.log("Coffee Price: " + coffee.price);

// const employee = {
//   name: "Jim Halpert",
//   title: "Salesman",
//   sellPaper: function () {
//     return "Would you like to buy some paper?";
//   },
// };

// const employee = {
//   name: "Jim Halpert",
//   title: "Salesman",
//   sellPaper: function () {
//     console.log("Would you like to buy some paper?");
//   },
// };
// employee.sellPaper();

const employee = {
  name: "Jim Halpert",
  title: "Salesman",
  displayName: function () {
    console.log(this.name);
  },
};
employee.displayName();

const employee2 = {
  name: "Jim Halpert",
  title: "Salesman",
  displayTitle: function () {
    console.log(this.title);
  },
};
employee2.displayTitle();
const dog = {
  name: "Ralph",
  age: 7,
  breed: "Golden Retriever",
  ageUp: function () {
    dog.age = 8;
    console.log(this.age);
  },
};
dog.ageUp();

const apartment = {
  number: 404,
  location: "unknown",
  display: function () {
    console.log("Display");
  },
};

apartment.display();

const apartment1 = {
  number: 404,
  location: "unknown",
  display: function () {
    apartment1.number = 200;
    console.log(this.number);
  },
};
apartment1.display();
console.log("apartment location: " + apartment1.location);

const apartment2 = {
  number: 404,
  location: "unknown",
  display: function () {
    console.log(this.number);
  },
};
apartment2.display();

const jsonString = '{"sport": "basketball", "players": 5, "duration": 48}';
const obj = JSON.parse('{"sport": "basketball", "players": 5, "duration": 48}');
console.log(obj.sport.toUpperCase());

const book = {
  title: "Wild Life",
  author: "Vera Storm",
  pages: 289,
};

const stringBook = JSON.stringify(book);
console.log(stringBook);

let toy1 = {
  name: "Blocks",
  price: 19.99,
  age_range: "6-12",
};
let toy2 = {
  name: "Stuffed Bear",
  price: 29.99,
  age_range: "0-3",
};
let stringToy1 = JSON.stringify(toy1);
let stringToy2 = JSON.stringify(toy2);

console.log(stringToy1);
console.log(stringToy2);

const flower1 =
  '{"name": "Rose", "color": "blue", "price": 2.5, "season": "spring"}';
let flowerObject = JSON.parse(flower1);
flowerObject.color = "red";
console.log(flower1);
let fixedFlowerJson = JSON.stringify(flowerObject);
console.log("fixed!");

// const tajMahalJSON = '{ "cuisine": "Indian", "takeout": false}';
// let tajMahal = JSON.parse(tajMahalJSON);
// console.log(tajMahal.takeout);

// const tajMahal = {
//   cuisine: "Indian",
//   takeout: false,
//   starRating: 4.5,
// };
// this.takeout = true;
// console.log(this.takeout);

// const tajMahal = {
//   cuisine: "Indian",
//   takeout: false,
//   starRating: 4.5,
// };
// tajMahal.takeout = true;
// console.log(tajMahal);
// const stringTajMahal = JSON.stringify(tajMahal);
// console.log(stringTajMahal);

const tajMahalJSON =
  '{ "cuisine": "Indian", "takeout": false, "starRating": 4.5}';

const tajMahal = JSON.parse(tajMahalJSON);

const tenRating = tajMahal.starRating * 2;

console.log(tenRating);
