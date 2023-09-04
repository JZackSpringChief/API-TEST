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

// function info() {
//   const el = document.getElementsByClassName("task1");
//   const output = document.querySelector("#output");
//   output.innerHTML = "You have " + el.length + " urgent tasks";
// }

// function answer() {
//   const el = document.getElementsByClassName("year");
//   const output = document.querySelector("#output");
//   output.innerHTML = el[0].innerHTML;
// }

// function answer() {
//   const el = document.getElementsByClassName("city answer");
//   const output = document.querySelector("#output");
//   output.innerHTML = el[0].innerHTML;
// }

//this one is wrong
// function update() {
//   const el = document.getElementsByClassName("color");
//   el[0].innerHTML.color.style = "pink";
//   el[0].innerHTML.style.color = "pink";
//   el[1].innerHTML.style.color = "thistle";
//   el[1].innerHTML.style.color = "thistle";
//   el[2].innerHTML.style.color = "tan";
//   el[2].innerHTML.style.color = "tan";
//   el[3].innerHTML.style.color = "turquoise";
//   el[3].innerHTML.style.color = "turquoise";
// }

function update() {
  const el = document.getElementsByClassName("color");
  el[0].innerHTML = "pink";
  el[0].style.color = "pink";
  el[1].innerHTML = "thistle";
  el[1].style.color = "thistle";
  el[2].innerHTML = "tan";
  el[2].style.color = "tan";
  el[3].innerHTML = "turquoise";
  el[3].style.color = "turquoise";
}
