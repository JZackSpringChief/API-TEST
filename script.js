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

// function update() {
//   const el = document.getElementsByClassName("color");
//   el[0].innerHTML = "pink";
//   el[0].style.color = "pink";
//   el[1].innerHTML = "thistle";
//   el[1].style.color = "thistle";
//   el[2].innerHTML = "tan";
//   el[2].style.color = "tan";
//   el[3].innerHTML = "turquoise";
//   el[3].style.color = "turquoise";
// }

// add .value
// const sendReview = () => {
//   const text = document.querySelector("#addedReviews");
//   const reviewInput = document.querySelector("#input-text").value;
//   const reviewTextarea = document.querySelector("#input-textarea").value;
//   text.innerHTML = reviewInput + " : " + reviewTextarea;

//   console.log(reviewInput);
//   console.log(reviewTextarea);
// };

// function nextLocation() {
//   const text = document.querySelector("h1");
//   text.innerHTML = "Travel to the Moon";
//   const el = document.querySelector("img");
//   el.src = "https://mimo.app/i/moon.png";
// }

// function toggleDarkMode() {
//     const el = document.querySelector("body");
//     el.classList.toggle("darkMode");
//    }

//    function colView() {
//     const el = document.querySelector("div");
//     el.classList.remove("grid");
//    }

//    function toggleMenu() {
//     const el = document.querySelector("header");
//     el.classList.toggle("hidden");
//    }

//    function galleryOn() {
//     const el = document.querySelector("div");
//     el.classList.add("border", "bg-white");
//    }

// const docBody = document.getElementById("the-body");
// console.log(docBody);
// const h1 = document.getElementById("the-heading");

// const body = document.getElementById("parent");
// const heading = document.createElement("h2");
// heading.innerHTML = "Scoop!";
// body.appendChild(heading);

// // to delete
// const bodyElement = document.getElementById("parent");
// // to access child
// const paragraph = document.getElementById("child");
// // to remove
// bodyElement.removeChild(paragraph);

// let mainChildren = document.querySelector("main").children;
// let lastChild = document.querySelector();
// lastChild.innerHTML = "Book now your ticket";

// let mainChildren = document.querySelector("main").children;
// let lastChild = mainChildren[mainChildren.length - 1];
// lastChild.innerHTML = "Book now your ticket";

//wrong
// let mainChild = document.body.children("2");
// let ptag = mainChild[mainChild.length - 1];
// ptag.innerHTML = "2";

// document.body.children[1].innerHTML = "35";
// document.body.children[3].innerHTML = "2";

// let list = document.body.children[1];
// list.firstElementChild.innerHTML = "components";

// const list = document.querySelector("ul");
// const element = document.createElement("li");
// element.innerHTML = "Wake little sis up";

// list.appendChild(element);

const parent = document.querySelector("body");
const image = document.createElement("img");
image.src = "https://mimo.app/i/market.png";
parent.appendChild(image);
