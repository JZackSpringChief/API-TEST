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
