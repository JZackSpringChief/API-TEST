// const about = document.getElementById("about");

// const museum = document.getElementById("museum");
// museum.innerHTML = "MoMA";

// function save() {
//   const el = document.querySelector("span");
//   el.innerHTML = "saved";
// }

// function show() {
//   const el = document.getElementById("dessert");
//   el.setAttribute("src", "https://mimo.app/i/croissant.png");
// }

// function doneEvent() {
//   const el = document.querySelector(".done");
//   el.innerHTML = "Done";
// }

// function save() {
//   const el = document.querySelector("p.content");
//   el.innerHTML = "Saved";
// }

// function update() {
//   const el = document.querySelector(".content.more");
//   el.innerHTML = "YEAH BOI";
// }

// function info() {
//   const el = document.getElementsByTagName("li");
//   const output = document.querySelector("#output");
//   output.innerHTML = el.length;
// }

// const el = document.querySelectorAll(".news");
// const paragraph = document.getElementsByTagName("p");
// paragraph[0].innerHTML = el.length;

//add to find the index of 2
// function info() {
//   const el = document.getElementsByTagName("li");
//   const output = document.querySelector("#output");
//   output.innerHTML = el.length;
// }

function info() {
  const el = document.getElementsByClassName("task1");
  const output = document.querySelector("#output");
  output.innerHTML = "You have " + el.length + " urgent tasks";
}
