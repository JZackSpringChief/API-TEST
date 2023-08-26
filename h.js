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
