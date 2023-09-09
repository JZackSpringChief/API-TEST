// console.log("hello world");

// const topSpeeds = [100, 130, 200];
// topSpeeds[2] = 240;
// topSpeeds.push(340);
// topSpeeds[3] = 380;
// console.log(topSpeeds[3]);

// const scientists = ["Ada Lovelace", "Margaret Hamilton", "Grace Hopper"];

// console.log(scientists[2]);

// const genres = ["comedy", "fantasy"];
// genres.push("horror");

// console.log(genres);

// const pace = [4.5, 4, 5, 5.2];

// const best = pace.pop(3);

// console.log(best);

// const lockCombination = [9, 4, 7];
// lockCombination.pop();

// console.log(lockCombination);

// const vehicles = ["car", "truck", "motorcycle", "bicycle"];

// console.log(vehicles.length);

// const friends = ["Jane", "Jim", "Jeri"];

// for (let i = 0; i < friends.length; i++) {
//   console.log(friends[i]);
// }

// const classes = ["math", "physics", "geography"];
// const arrayLength = classes.length;
// console.log(arrayLength);

// const counter = [1, 2, 3, 4, 5, 6];
// counter.pop();
// console.log(counter.length);

// const weather = ["sunny", "rainy", "cloudy"];
// for (let i = 0; i < weather.length; i++) {
//   console.log(weather[i]);
// }

// const siblings = ["Jon", "Jess", "Jen", "Jarod"];
// const add = siblings.push("Jacob");
// const middleChild = siblings[2];
// console.log(`The middle child is ${middleChild}.`);

// // Let's create an array that holds a bunch of to-do items.
// // 1. Code an array that contains a list of these to-do's:  "⁠s⁠t⁠u⁠d⁠y⁠"⁠ ,  "⁠c⁠h⁠o⁠r⁠e⁠s⁠"⁠ , and  "⁠m⁠e⁠d⁠i⁠t⁠a⁠t⁠e⁠"⁠ . Store the array in the  t⁠o⁠d⁠o⁠s⁠  variable.
// // 2. Use  p⁠o⁠p⁠  to remove the final to-do from the array and store this in the  r⁠e⁠m⁠o⁠v⁠e⁠  variable.
// // 3. Create a  c⁠o⁠n⁠s⁠t⁠  variable  l⁠e⁠f⁠t⁠T⁠o⁠D⁠o⁠  that stores the number of items left in the  t⁠o⁠d⁠o⁠s⁠  array. Use an array property to code this step.
// // Output:

// const todos = ["study", "chores", "meditate"];
// const remove = todos.pop();
// const leftToDo = todos.length;
// console.log(`You have ${leftToDo} items left to do.`);

// function userAge(number) {
//   const age = "User Age: " + number;
//   return age;
// }
// console.log(userAge(22));

// function userAge2(number) {
//   const age = "User age: " + number;
//   return age;
// }
// const result = userAge2(29);
// console.log(result);

// function userAge3(number) {
//   const age = "User age: " + number;
//   // return age; without return value we get back "undefined"
// }
// const result2 = userAge3(29);
// console.log(result2);

// function lessThanFive(number) {
//   const lessThan = number < 5;
//   return lessThan;
// }

// const result3 = lessThanFive(10);
// console.log(result3);

// function myFunc() {
//   console.log("this is a func");
// }
// myFunc();

// function dayRoutine() {
//   console.log("one display statement");
// }
// dayRoutine();

// function checkPoints() {
//   const points = 7;
//   const required = 10;
//   console.log("Requirement reached");
//   console.log(points > required);
// }
// checkPoints();

// // function doorBellCamera(enabled) {
// //   enabled = "Monitoring: ";
// //   console.log(enabled);
// // }
// // doorBellCamera(true);

// //above is wrong

// // should be

// function doorBellCamera(enabled) {
//   console.log("Monitoring: " + enabled);
// }
// doorBellCamera(true);

// function accomType(type) {
//   const rating = "5 star";
//   console.log(rating + " " + type);
// }
// accomType();

// function displayTheNumber(number) {
//   return "The number is " + number;
// }
// console.log(displayTheNumber(50));

// function addGreeting(user) {
//   const greeting = "Greetings " + user;
//   return greeting;
// }
// const result5 = addGreeting("Alex");
// console.log(result5);

// function lessThanFive(number) {
//   const lessThan = number < 5;
//   return lessThan;
// }
// console.log(lessThanFive(4));

// function displayCash(amount) {
//   return amount + " Rubles";
// }
// console.log(displayCash(500));

// // const author = "J<D";

// // displayAuthor(author);

// function displayNames(names) {
//   console.log(names);
// }

// const students = ["Laurel", "Yanni"];
// displayNames(students);

// function getBMI(height, weight) {
//   return weight / (height * height);
// }
// const bmi = getBMI(1.7, 70);
// console.log(bmi);

// function printMsg(first, second, third) {
//   console.log(first + " " + second + " " + third);
// }
// const result6 = printMsg("Hello", "World", "!");

// function calculateDifference(a, b) {
//   return a - b;
// }

// function calculateSum(a, b) {
//   return a + b;
// }
// console.log(calculateSum(30, 11));

// function hasTheSameColor(colorsArray, color) {
//   let isTheSameColor = false;
//   for (let i = 0; i < colorsArray.length; i++) {
//     if (colorsArray[i] === color) {
//       isTheSameColor = true;
//     }
//   }
//   return isTheSameColor;
// }
// console.log(hasTheSameColor(["green", "red", "black"], "black"));

// function getArrayLength(inputArr) {
//   return inputArr.length;
// }
// console.log("Length of array: " + getArrayLength([1, 25, 3, 5]));

// function firstValue(array) {
//   return array[0];
// }
// console.log("The first value is: " + firstValue([1, 2, 3, 4]));

// function toSeconds(hours, minutes) {
//   return (hours * 60 + minutes) * 60;
// }
// console.log(toSeconds(5, 2));

// // Code a function that returns  t⁠r⁠u⁠e⁠  if the  n⁠u⁠m⁠b⁠e⁠r⁠  parameter is less than or equal to 0. Otherwise, return  f⁠a⁠l⁠s⁠e⁠ .
// // Examples:
// //  l⁠e⁠s⁠s⁠T⁠h⁠a⁠n⁠O⁠r⁠E⁠q⁠u⁠a⁠l⁠T⁠o⁠Z⁠e⁠r⁠o⁠(⁠7⁠)⁠  returns  f⁠a⁠l⁠s⁠e⁠ .
// //  l⁠e⁠s⁠s⁠T⁠h⁠a⁠n⁠O⁠r⁠E⁠q⁠u⁠a⁠l⁠T⁠o⁠Z⁠e⁠r⁠o⁠(⁠-⁠5⁠)⁠  returns  t⁠r⁠u⁠e⁠ .

// function lessThanOrEqualToZero(number) {
//   if (number <= 0) {
//     return true;
//   }
//   return false;
// }
// console.log(lessThanOrEqualToZero(3));

// const microwave = {
//   brand: "samsung",
//   heat: function () {},
// };

// const oven = {
//   brand: "micro",
//   on: true,
//   isOn: function () {
//     return this.on;
//   },
// };

// const flower = '{"name": "tulip", "petals": 30, "city": "Amsterdam"}';
// const flowerConversion = JSON.parse(flower);
// console.log(flowerConversion.name);

// const order = {
//   itemName: "Candy",
//   itemPrice: 2,
//   itemQuantity: 10,
//   available: true,
// };

// console.log(order.available);

// const car = {
//   make: "Toyota",
//   model: "Camry",
// };
// console.log(car);

// const coffee = {
//   origin: "Nicaragua",
//   bean: "Arabica",
//   roast: "Dark",
//   price: 2.99,
// };
// coffee.price = 3.99;
// console.log("Coffee Price: " + coffee.price);

// // const employee = {
// //   name: "Jim Halpert",
// //   title: "Salesman",
// //   sellPaper: function () {
// //     return "Would you like to buy some paper?";
// //   },
// // };

// // const employee = {
// //   name: "Jim Halpert",
// //   title: "Salesman",
// //   sellPaper: function () {
// //     console.log("Would you like to buy some paper?");
// //   },
// // };
// // employee.sellPaper();

// const employee = {
//   name: "Jim Halpert",
//   title: "Salesman",
//   displayName: function () {
//     console.log(this.name);
//   },
// };
// employee.displayName();

// const employee2 = {
//   name: "Jim Halpert",
//   title: "Salesman",
//   displayTitle: function () {
//     console.log(this.title);
//   },
// };
// employee2.displayTitle();
// const dog = {
//   name: "Ralph",
//   age: 7,
//   breed: "Golden Retriever",
//   ageUp: function () {
//     dog.age = 8;
//     console.log(this.age);
//   },
// };
// dog.ageUp();

// const apartment = {
//   number: 404,
//   location: "unknown",
//   display: function () {
//     console.log("Display");
//   },
// };

// apartment.display();

// const apartment1 = {
//   number: 404,
//   location: "unknown",
//   display: function () {
//     apartment1.number = 200;
//     console.log(this.number);
//   },
// };
// apartment1.display();
// console.log("apartment location: " + apartment1.location);

// const apartment2 = {
//   number: 404,
//   location: "unknown",
//   display: function () {
//     console.log(this.number);
//   },
// };
// apartment2.display();

// const jsonString = '{"sport": "basketball", "players": 5, "duration": 48}';
// const obj = JSON.parse('{"sport": "basketball", "players": 5, "duration": 48}');
// console.log(obj.sport.toUpperCase());

// const book = {
//   title: "Wild Life",
//   author: "Vera Storm",
//   pages: 289,
// };

// const stringBook = JSON.stringify(book);
// console.log(stringBook);

// let toy1 = {
//   name: "Blocks",
//   price: 19.99,
//   age_range: "6-12",
// };
// let toy2 = {
//   name: "Stuffed Bear",
//   price: 29.99,
//   age_range: "0-3",
// };
// let stringToy1 = JSON.stringify(toy1);
// let stringToy2 = JSON.stringify(toy2);

// console.log(stringToy1);
// console.log(stringToy2);

// const flower1 =
//   '{"name": "Rose", "color": "blue", "price": 2.5, "season": "spring"}';
// let flowerObject = JSON.parse(flower1);
// flowerObject.color = "red";
// console.log(flower1);
// let fixedFlowerJson = JSON.stringify(flowerObject);
// console.log("fixed!");

// // const tajMahalJSON = '{ "cuisine": "Indian", "takeout": false}';
// // let tajMahal = JSON.parse(tajMahalJSON);
// // console.log(tajMahal.takeout);

// // const tajMahal = {
// //   cuisine: "Indian",
// //   takeout: false,
// //   starRating: 4.5,
// // };
// // this.takeout = true;
// // console.log(this.takeout);

// // const tajMahal = {
// //   cuisine: "Indian",
// //   takeout: false,
// //   starRating: 4.5,
// // };
// // tajMahal.takeout = true;
// // console.log(tajMahal);
// // const stringTajMahal = JSON.stringify(tajMahal);
// // console.log(stringTajMahal);

// const tajMahalJSON =
//   '{ "cuisine": "Indian", "takeout": false, "starRating": 4.5}';

// const tajMahal = JSON.parse(tajMahalJSON);

// const tenRating = tajMahal.starRating * 2;

// console.log(tenRating);

// function checkSeniorDiscount(age) {
//   if (age >= 65) {
//     console.log(age + " years old recieves 50% off");
//   }
// }
// checkSeniorDiscount(65);

// function checkGreater(a, b) {
//   if (a >= b) {
//     console.log(a + " is greater than or equal to " + b);
//   }
// }
// checkGreater(13, 13);

// function guessNum(a, b) {
//   if (a <= 9) {
//     console.log("lucky guess");
//   } else {
//     b >= 10;
//     console.log("WRONG");
//   }
// }
// guessNum(11);

// function makeBigger() {
//   let word = word.toString();
// }

// function multiplyByTen(numb) {
//   return numb * 10;
// }
// const noon = multiplyByTen(23);
// console.log(noon);

// function hasPassed(score) {
//   if (score >= 50) {
//     console.log("Passed");
//   }
// }
// hasPassed(80);

// function totalPrice(cost) {
//   if (cost <= 49) {
//     cost = cost * 1.1;
//     console.log(cost);
//     return cost;
//   }
//   console.log(cost);
// }

// totalPrice(50); //bad function

// function getNetIncome(salary) {
//   console.log("Your salary is:");
//   if (salary >= 2000) {
//     salary = salary * 0.8;
//     return salary + ", after tax and benefits";
//   }
//   return salary;
// }
// const income = getNetIncome(1999);
// console.log(income);

// function checkPassword(secret) {
//   if (secret === "12345") {
//     return "Loggin in";
//   } else {
//     return "Try again";
//   }
// }
// checkPassword("party1999");

// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }

// function displayNumbers(message) {
//   for (let i = 0; i < 10; i++) {
//     console.log(i + message);
//   }
// }
// displayNumbers(" say this ten times from 0");

// const num = [91, 66, 77, 84, 66];
// const search = 66;

// function searchGrade(num, search) {
//   for (let i = 0; i < num.length; i++) {
//     if (num[i] === search) {
//       const superSecretMessage = "You're a lil bitch!";
//       console.log(superSecretMessage);
//       break;
//     }
//   }
// }
// searchGrade(num, search);

// function displayNumbers() {
//   for (let i = 3; i <= 9; i++) {
//     console.log(i);
//   }
// }

// displayNumbers();
// function displayAlert(message) {
//   for (let i = 0; i < 5; i++) {
//     console.log(message);
//   }
// }

// displayAlert("I will practice Javascript");

// function countGingerBeers(message) {
//   for (let i = 10; i > 0; i--) {
//     console.log(i + message);
//   }
// }

// countGingerBeers(" bottles of ginger beer on the wall");

// function printNumbers(numbers) {
//   console.log(numbers);
// }
// printNumbers([1, 2, 3]);

// const names = ["John", "Adam", "Sarah"];

// function printEachName(names) {
//   for (let i = 0; i < names.length; i++) {
//     console.log(names[i]);
//   }
// }
// printEachName(names);

// const languages = ["JavaScript", "C++", "Python"];

// function findLanguage(languages, language) {
//   for (let i = 0; i < languages.length; i++) {
//     if (language == "JavaScript") {
//       console.log(language + " found!");
//       break;
//     } else {
//       console.log(language + " does not exist or has not been found yet!.");
//     }
//   }
// }
// findLanguage(languages, "JavaScript");

// const prices = [100, 150, 200];
// const discounts = [0.1, 0.2, 0.25];

// function getValues(prices, discounts) {
//   let values = [];
//   for (let i = 0; i < prices.length; i++) {
//     //code here ZACK!!! multiply prices array in discounts and store in values
//   }
//   console.log(values);
// }
// getValues(prices, discounts);

// function milesToKm(miles) {
//   const km = (miles / 5) * 8;
//   return km;
// }

// milesToKm(70);

// const group = 4;
// const total = 500;
// const minimum = 150;

// function stockCheck(groupSize, totalAvailable, minPerUser) {
//   if (minPerUser > totalAvailable) {
//     return "Insufficient for one user";
//   } else if (groupSize * minPerUser > totalAvailable) {
//     return "Insufficient for all users";
//   } else {
//     return "Sufficient for all users";
//   }
// }
// console.log(stockCheck(group, total, minimum));

// const decloration = () => "im the best";
// console.log(decloration());

// const winningNumber = Math.floor(Math.random());

// function drawWinningNumber() {
//   return winningNumber * 3;
// }

// function drawWinner() {
//   const players = ["Amanda", "Sheila", "Rob"];
//   const winner = players[winningNumber];
//   console.log("The winner is " + winner);
// }
// drawWinner();

// const toDoList = ["sweeping", "washing", "mopping"];

// function cleanUp() {
//   for (let i = 0; i < toDoList.length; i++) {
//     toDoList.pop(toDoList[i]);
//   }
//   console.log("I still have some " + toDoList + " to do");
// }
// cleanUp();

// const favoriteIceCream = `vanilla`;
// const bestDessert = `${favoriteIceCream}`;
// console.log(bestDessert);

// const elementarySchool = 90;
// const middleSchool = 70;
// const highSchool = 100;
// const students = `# of Students: ${
//   elementarySchool + middleSchool + highSchool
// }`;

// console.log(students);

// //this func uses back tick
// const bestColor = (color) => {
//   const name = `Jerry`;
//   return `${name} always wears ${color} shirts.`;
// };
// console.log(bestColor`blue`);

// // before
// // const [, , , ] = ["Baseball top", "kilt", "Blazer", "Boots"];
// // console.log();
// // console.log();
// // console.log();
// // console.log();

// //after
// const [top, bottom, outerwear, footwear] = [
//   "Baseball top",
//   "kilt",
//   "Blazer",
//   "Boots",
// ];
// console.log(top);
// console.log(bottom);
// console.log(outerwear);
// console.log(footwear);

// const [, , , italianBread] = [
//   "Sourdough",
//   "Baguette",
//   "Brioche",
//   "Focaccia",
//   "Multigrain",
// ];
// console.log(
//   `${italianBread} is leavened bread than produces a fluffy appearance.`
// );

// //time to destructure
// const aircrafts = {
//   brand: "Boeing",
//   nose: "Pointed nose",
//   windshield: "V-shaped windshield",
//   tail: "Sloped Tail",
// };
// const { brand, nose, windshield, tail } = aircrafts;
// console.log(`The ${brand} Company was founded on July 15, 1916.`);
// console.log(`This aircraft has a ${nose}, and a ${windshield}`);
// console.log(`And at least but not last a ${tail}`);

// const smartTV = {
//   type: "QLED",
//   shape: "Flat",
//   ports: "HDMI",
//   connectivity: "Wi-Fi",
// };
// const { type: screenType, shape: screenShape } = smartTV;
// console.log(screenType);
// console.log(screenShape);

// const oldShows = {
//   fifties: "Maverick",
//   sixties: "The Saint",
//   seventies: "The Love Boat",
//   eighties: "Manimal",
//   nineties: "Dawson's Creek",
// };
// const { eighties, ...otherOldShows } = oldShows;
// console.log(`The best tv show in the 80s was ${eighties}`);
// console.log(otherOldShows);

// const beer = {
//   name: "	Blue Moon White",
//   alcoholPercentage: 5.4,
//   calories: 171,
//   carbs: 12.9,
// };
// const { brand = "N/A" } = beer;
// console.log(brand);

// const mountains = [
//   "Swiss Alps",
//   "Mount Logan",
//   "Mount Fuji",
//   "Mauna Kea",
//   "Jotunheimen Mountains",
// ];

// function getMountainsNickname([alps, logan]) {
//   console.log(`The ${alps} are The Magical Mountains.`);
//   console.log(`The ${logan} is The Snowy Paradise.`);
// }
// getMountainsNickname(mountains);

// const challengeGreeting = () => {
//   const generalMessage = `Hello! Welcome to Terrace Inn & Suites!`;
//   const seasonalMessage = `Need to cool off? Visit one of our three resort pools!`;
//   return `${generalMessage} ${seasonalMessage}`;
// };
// console.log(challengeGreeting());

// const challengeGreeting = (name) => {
//   const generalMessage = `Welcome ${name} to Terrace Inn & Suites!`;
//   const seasonalMessage =
//     "Need to cool off? Visit one of our three resort pools!";
//   return generalMessage + " " + seasonalMessage;
// };
// console.log(challengeGreeting("Sarah"));

// const flavors = ["chocolate", "vanilla", "strawberry"];
// const options = flavors.map(function () {});

// const lcStates = ["md", "va", "wv"];
// const ucStates = lcStates.map((ele) => ele.toUpperCase());
// console.log(ucStates);

//add element to the correct params
// const gallons = [1.2, 4.5, 3.2];
// const liters = gallons.map(function () {
//   return element * 3.8;
// });

// const ratios = [0.79, 0.88, 0.68, 0.95];
// const percentages = ratios.map(function (element) {
//   return element * 100 + "%";
// });

// console.log(percentages);

// const states = ["Alaska", "Maryland", "Pennsylvania", "Alabama", "Arkansas"];
// const A = states.filter(function (ele) {
//   return ele[0] == "A";
// });
// console.log(A);

// //add two params to get result of last quater of the year
// const months = [
//   "Jan",
//   "Feb",
//   "Mar",
//   "Apr",
//   "May",
//   "Jun",
//   "Jul",
//   "Aug",
//   "Sep",
//   "Oct",
//   "Nov",
//   "Dec",
// ];
// const q4 = months.filter(function (ele) {
//   return ele[0] > 8;
// });
// console.log(q4);

// const heights = [66, 75, 73, 56, 62];
// const tall = heights.filter((index) => {
//   return index > 72;
// });
// console.log(tall);

// const names = ["Tony", "Tania", "Vince", "Terry"];
// const list = names.reduce(function (prev, curr) {
//   return prev + ", " + curr;
// });
// console.log(list);

// const values = [5, 4, 3, 2, 1];
// const product = values.reduce((element, index) => {
//   return element * index;
// });
// console.log(product);

// const prices = [20.5, 22.25, 21.75];
// const taxRates = [1.15, 1.2, 1.1];

// const total = prices.reduce((price, element, index) => {
//   return price * index;
// });
// console.log(total);

//top is wrong and bottom is right
// const prices = [20.5, 22.25, 21.75];
// const taxRates = [1.15, 1.2, 1.1];

// const total = prices.reduce(function (prev, curr, index) {
//   return prev + curr * taxRates[index];
// });
// console.log(total);

// const sumOfEvenNumbers = (a) => {
//   if (a <= 0 || !Number.isInteger(a)) {
//     return "enter positive integer";
//   }

//   let sum = 0;
//   for (let i = 2; i <= a; i += 2) {
//     sum += i;
//   }
//   return sum;
// };

// const userNum = 10;
// const result = sumOfEvenNumbers(userNum);
// console.log(`The sum of even numbers between 1 and ${userNum} is: ${result}`);

// const word = "enola";

// function reverseCallBack() {
//   const result = word.split("").reverse().join("");
//   console.log(`The string reversed is: "${result}"`);
//   console.log("this executes last as this is asyncronous");
// }
// setTimeout(reverseCallBack, 1500);
// console.log("FIRST AHHAHA");

// const reverseString = () => {
//   const result = word.split("").reverse("").join("");
//   console.log(
//     `this string is the same and also reversed using arrow func: "${result}"`
//   );
//   console.log("still async");
// };

// setTimeout(reverseString, 2000);
// console.log("second");

// const dessertStock = {
//   cheeseCake: 10,
//   moltenCake: 7,
//   spongeCake: 0,
// };

// function orderCheeseCake() {
//   return new Promise((resolve, reject) => {
//     if (dessertStock.cheeseCake > 0) {
//       resolve("Cheesecake is available in the stock. Order has been processed");
//     } else {
//       reject("Sponge cake is sold out");
//     }
//   });
// }

// const makeOrder = orderCheeseCake();
// makeOrder.then(function (onResolved) {
//   console.log(onResolved);
// });

// async function asyncFunc() {
//   console.log("this is an async function");
// }
// asyncFunc();

// const stock = {
//   sunglasses: { quantity: 0, price: 29.99 },
//   bags: { quantity: 2, price: 109.99 },
// };

// const purchacePromise = new Promise(function (resolve, reject) {
//   if (stock.sunglasses.quantity > 0) {
//     resolve("Sunglasses are available. Proceed with order now.");
//   } else {
//     reject("Sunglasses are out of stock. Canceling Order");
//   }
// });

// async function orderSunglasses() {
//   try {
//     let result = await purchacePromise;
//     console.log(result);
//   } catch (error) {
//     console.log(error);
//   }
// }

// orderSunglasses();

// const sayHello = (name, callback) => {
//   console.log(`Hello, ${name}!`);
//   callback();
// };

// const sayGoodbye = () => console.log("Goodbye!");

// sayHello("Sam", sayGoodbye);

// const ourCallBack = () => console.log("Loading...");
// const intervalID = setInterval(ourCallBack, 200);
// setTimeout(() => {
//   clearInterval(intervalID);
//   console.log("Updates stopped after 1.2 seconds.");
// }, 1200);

// const fruitArray = ["apples", "coconuts", "bananas", "strawberries", "oranges"];

// function fruitsList(fruit) {
//   return "buy 2 " + fruit;
// }
// const newArrayOfStrings = fruitArray.map(fruitsList);
// console.log(newArrayOfStrings);

// setTimeout(() => {
//   console.log("dessert", 1000);
// });
// console.log("starters");

// function callback() {
//   console.log("New Message");
// }
// const intervalID = setInterval(callback, 500);
// setTimeout(() => {
//   clearInterval(intervalID);
//   console.log("Muted chat");
// }, 1500);

// let count = 0;
// let intervalID = null;

// function makeBet() {
//   if (count < 2) {
//     count++;
//     console.log("New Bet");
//   } else {
//     clearInterval(intervalID);
//     console.log("The interval was cleared after 2 bets");
//   }
// }

// function start() {
//   intervalID = setInterval(makeBet, 500);
// }
// start();

// const checkOffer = () => console.log("New Offer");
// const intervalID = setInterval(checkOffer, 400);
// setTimeout(() => {
//   clearInterval(intervalID);
//   console.log("Stop offers after 1300 ms.");
// }, 1300);

// let count = 0;
// let intervalID = null;

// function checkLocation() {
//   if (count < 2) {
//     count++;
//     console.log("Track Lions");
//   } else {
//     clearInterval(intervalID);
//     console.log("Turn off tracking");
//   }
// }

// function start() {
//   intervalID = setInterval(checkLocation, 500);
// }
// start();

// const mathGrades = [5.0, 4.8, 3.5, 3.0];
// const callbackConditional = (num) => num > 4;

// function bestMathGrades() {
//   const bestGrades = mathGrades.filter(callbackConditional);
//   console.log(bestGrades);
//   return bestGrades;
// }
// bestMathGrades();
// console.log("The best two grades in Maths");

// let promise = new Promise(resolve, reject);

// const burgerSandwich = {
//   pattySource: "chicken",
//   tomato: true,
//   lettuce: true,
//   onion: true,
//   cheese: true,
// };

// function customizeOrder() {
//   return new Promise(function (resolve) {
//     if (burgerSandwich.onion) {
//       burgerSandwich.onion = false;
//       resolve(burgerSandwich.onion);
//     }
//   });
// }
// customizeOrder();

// const data = ["Hello", "foo", "bar", 7, "smith"];
// const intruder = data.find((i) => typeof i !== "string");

// function checkIfIntruderFound() {
//   return new Promise(function (resolve, reject) {
//     if (intruder) {
//       resolve(`Intruder has been found. It is item ${intruder}`);
//     } else {
//       reject("Intruder not found..");
//     }
//   });
// }

// function callOutTheIntruder() {
//   checkIfIntruderFound()
//     .then(function (result) {
//       console.log(result);
//     })
//     .catch(function (error) {
//       console.log(error);
//     });
// }
// callOutTheIntruder();

// let cleanDishes = [false, false];
// let allClean = false;

// function loadDishwasher() {
//   return new Promise(function (resolve) {
//     for (let i = 0; i < cleanDishes.length; i++) {
//       if (!cleanDishes[i]) {
//         cleanDishes[i] = true;
//       }
//     }
//     setTimeout(function () {
//       allClean = true;
//       console.log(`All ${cleanDishes.length} dishes are now clean...`);
//       resolve(allClean);
//     }, 1000);
//   });
// }

// function putDishesAway(areAllDishesClean) {
//   return new Promise(function (resolve, reject) {
//     if (areAllDishesClean) {
//       setTimeout(function () {
//         resolve("No more dishes to wash.");
//       }, 1000);
//     } else {
//       setTimeout(function () {
//         reject("Some dishes are not clean yet.");
//       }, 1000);
//     }
//   });
// }

// function startDishWashingProcess() {
//   return loadDishwasher().then(function (allDishesClean) {
//     return putDishesAway(allDishesClean)
//       .then(function (result) {
//         console.log(result);
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//   });
// }
// startDishWashingProcess();

// async function prepareDinner() {
//   setTimeout(function () {
//     console.log("Dinner is prepared...");
//   }, 1000);
// }
// prepareDinner();

// const calculator = (number1, number2, callback) => {
//   console.log(
//     `The calculator gets the addition of the numbers ${number1} and ${number2}.`
//   );
//   const result = number1 + number2;
//   callback(result);
// };
// const resultCalculator = (result) => console.log(`The result is ${result}`);

// calculator(5, 7, resultCalculator);

// class Book {
//   constructor(author, title) {
//     this.author = author;
//     this.title = title;
//   }
// }

// const book1 = new Book("Leo Tolstoy", "War and Peace");
// const book2 = new Book("Dr. Seuss", "Oh, the Places You'll Go!");
// console.log(book1);
// console.log(book2);

// class VirtualPet {
//   constructor(name) {
//     this.name = name;
//   }
//   eat(food) {
//     if (food === "treats") {
//       console.log("nom nom");
//     } else {
//       console.log("discard");
//     }
//   }
// }
// const pet = new VirtualPet("Tom");
// pet.eat("treats");

// class Playlist {
//   constructor() {
//     this.songs = [];
//   }
//   addSong(song) {
//     this.songs.push(song);
//   }
//   play() {
//     for (let i = 0; i < this.song.length; i++) {
//       console.log(this.song[i]);
//     }
//   }
//   remove() {
//     this.songs.pop();
//   }
// }

// const myPlaylist = new Playlist();

// myPlaylist.addSong("Alright");

// myPlaylist.play();

// class Customer {
//   constructor(name) {
//     this.name = name;
//   }
// }
// const cust1 = new Customer("Sally");
// console.log(cust1);

// class Email {
//   constructor(address) {
//     this.address = address;
//   }
// }
// const email1 = new Email("joe@test.com");
// const email2 = new Email("sally@mail.com");
// console.log(email1);
// console.log(email2);

// class Phone {
//   constructor(number) {
//     this.number = number;
//     this.doNotCall = false;
//   }
// }
// const phone1 = new Phone("3455556632");
// const phone2 = new Phone("4685559441");
// phone1.doNotCall = true;
// console.log(phone1);
// console.log(phone2);

// class Plane {
//   constructor(model, mph) {
//     this.model = model;
//     this.mph = mph;
//   }
// }
// const plane1 = new Plane("747", 543);
// const plane2 = new Plane("737", 500);
// const plane3 = new Plane("515", 567);

// class Account {
//   constructor(name, number) {
//     this.name = name;
//     this.number = number;
//     this.active = true;
//   }
// }
// const account1 = new Account("Bob's Supplies", 1);
// const account2 = new Account("Tara Consulting", 2);

// class Dog {
//   constructor(name, breed) {
//     this.name = name;
//     this.breed = breed;
//   }
// }
// const dog1 = new Dog("Bruce", "Golden");
// const dog2 = new Dog("Toby", "Poodle");
// console.log(dog1);
// console.log(dog2);

// class Elevator {
//   constructor() {
//     this.floor = 0;
//   }
//   goToFloor(floor) {
//     this.floor = floor;
//     console.log(this.floor);
//   }
// }
// const elevator1 = new Elevator();
// const elevator2 = new Elevator();
// // elevator1.floor = 3;
// // elevator3.floor = 1;
// elevator1.goToFloor(3);
// elevator2.goToFloor(5);

// class Song {
//   constructor() {
//     this.title = "";
//   }
//   play() {
//     console.log("playing " + this.title);
//   }
// }
// const song1 = new Song();
// song1.title = "Remember";
// song1.play();

// class Animal {
//   constructor(name) {
//     this.name = name;
//   }
// }
// class Dog extends Animal {}
// const dog = new Dog("Pug");
// console.log(dog);

class Human {
  constructor(weapon) {
    this.weapon = weapon;
    this.health = 100;
  }
  receiveDamage() {
    this.health = this.health - 10;
  }
}
class Wizard extends Human {
  receiveDamage() {
    this.health = this.health - 5;
  }
}
const wizard = new Wizard("staff");
console.log(wizard.health);
wizard.receiveDamage();
console.log(wizard.health);
