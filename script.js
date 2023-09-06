// // const about = document.getElementById("about");

// // const museum = document.getElementById("museum");
// // museum.innerHTML = "MoMA";

// // function save() {
// //   const el = document.querySelector("span");
// //   el.innerHTML = "saved";
// // }

// // function show() {
// //   const el = document.getElementById("dessert");
// //   el.setAttribute("src", "https://mimo.app/i/croissant.png");
// // }

// // function doneEvent() {
// //   const el = document.querySelector(".done");
// //   el.innerHTML = "Done";
// // }

// // function save() {
// //   const el = document.querySelector("p.content");
// //   el.innerHTML = "Saved";
// // }

// // function update() {
// //   const el = document.querySelector(".content.more");
// //   el.innerHTML = "YEAH BOI";
// // }

// // function info() {
// //   const el = document.getElementsByTagName("li");
// //   const output = document.querySelector("#output");
// //   output.innerHTML = el.length;
// // }

// // const el = document.querySelectorAll(".news");
// // const paragraph = document.getElementsByTagName("p");
// // paragraph[0].innerHTML = el.length;

// //add to find the index of 2
// // function info() {
// //   const el = document.getElementsByTagName("li");
// //   const output = document.querySelector("#output");
// //   output.innerHTML = el.length;
// // }

// // function info() {
// //   const el = document.getElementsByClassName("task1");
// //   const output = document.querySelector("#output");
// //   output.innerHTML = "You have " + el.length + " urgent tasks";
// // }

// // function answer() {
// //   const el = document.getElementsByClassName("year");
// //   const output = document.querySelector("#output");
// //   output.innerHTML = el[0].innerHTML;
// // }

// // function answer() {
// //   const el = document.getElementsByClassName("city answer");
// //   const output = document.querySelector("#output");
// //   output.innerHTML = el[0].innerHTML;
// // }

// //this one is wrong
// // function update() {
// //   const el = document.getElementsByClassName("color");
// //   el[0].innerHTML.color.style = "pink";
// //   el[0].innerHTML.style.color = "pink";
// //   el[1].innerHTML.style.color = "thistle";
// //   el[1].innerHTML.style.color = "thistle";
// //   el[2].innerHTML.style.color = "tan";
// //   el[2].innerHTML.style.color = "tan";
// //   el[3].innerHTML.style.color = "turquoise";
// //   el[3].innerHTML.style.color = "turquoise";
// // }

// // function update() {
// //   const el = document.getElementsByClassName("color");
// //   el[0].innerHTML = "pink";
// //   el[0].style.color = "pink";
// //   el[1].innerHTML = "thistle";
// //   el[1].style.color = "thistle";
// //   el[2].innerHTML = "tan";
// //   el[2].style.color = "tan";
// //   el[3].innerHTML = "turquoise";
// //   el[3].style.color = "turquoise";
// // }

// // add .value
// // const sendReview = () => {
// //   const text = document.querySelector("#addedReviews");
// //   const reviewInput = document.querySelector("#input-text").value;
// //   const reviewTextarea = document.querySelector("#input-textarea").value;
// //   text.innerHTML = reviewInput + " : " + reviewTextarea;

// //   console.log(reviewInput);
// //   console.log(reviewTextarea);
// // };

// // function nextLocation() {
// //   const text = document.querySelector("h1");
// //   text.innerHTML = "Travel to the Moon";
// //   const el = document.querySelector("img");
// //   el.src = "https://mimo.app/i/moon.png";
// // }

// // function toggleDarkMode() {
// //     const el = document.querySelector("body");
// //     el.classList.toggle("darkMode");
// //    }

// //    function colView() {
// //     const el = document.querySelector("div");
// //     el.classList.remove("grid");
// //    }

// //    function toggleMenu() {
// //     const el = document.querySelector("header");
// //     el.classList.toggle("hidden");
// //    }

// //    function galleryOn() {
// //     const el = document.querySelector("div");
// //     el.classList.add("border", "bg-white");
// //    }

// // const docBody = document.getElementById("the-body");
// // console.log(docBody);
// // const h1 = document.getElementById("the-heading");

// // const body = document.getElementById("parent");
// // const heading = document.createElement("h2");
// // heading.innerHTML = "Scoop!";
// // body.appendChild(heading);

// //document.body.firstElementChild.textContent = "Employee Profile";

// // // to delete
// // const bodyElement = document.getElementById("parent");
// // // to access child
// // const paragraph = document.getElementById("child");
// // // to remove
// // bodyElement.removeChild(paragraph);

// // let mainChildren = document.querySelector("main").children;
// // let lastChild = document.querySelector();
// // lastChild.innerHTML = "Book now your ticket";

// // let mainChildren = document.querySelector("main").children;
// // let lastChild = mainChildren[mainChildren.length - 1];
// // lastChild.innerHTML = "Book now your ticket";

// //wrong
// // let mainChild = document.body.children("2");
// // let ptag = mainChild[mainChild.length - 1];
// // ptag.innerHTML = "2";

// // document.body.children[1].innerHTML = "35";
// // document.body.children[3].innerHTML = "2";

// // let list = document.body.children[1];
// // list.firstElementChild.innerHTML = "components";

// // const list = document.querySelector("ul");
// // const element = document.createElement("li");
// // element.innerHTML = "Wake little sis up";

// // list.appendChild(element);

// const parent = document.querySelector("body");
// const image = document.createElement("img");
// image.src = "https://mimo.app/i/market.png";
// parent.appendChild(image);

// const body = document.getElementById("parent");
// const magazine = document.createElement("h3");
// magazine.innerHTML = "Wired";

// //body.appendChild(magazine);

// //js events

// function displayMessage() {
//   document.getElementById("message").innerHTML = "Whoff!";
// }
// document.getElementById("dog").addEventListener("touchstart", displayMessage);
// document.getElementById("dog").addEventListener("touchmove", displayMessage);
// document.getElementById("dog").addEventListener("touchend", displayMessage);

// function cancelMessage() {
//   document.getElementById("message").innerHTML = "Whoff!";
// }
// document.getElementById("dog").addEventListener("touchcancel", cancelMessage);

// const sentence = document.querySelector("#sentence");
// const button = document.querySelector("button");

// function login() {
//   sentence.innerText = "User logged in!";
// }
// button.onclick = login;

// // const element = document.querySelector("button");
// // const paragraph = document.querySelector("p");

// // function makeRed() {
// //   paragraph.style.color = "red";
// // }
// // element.onclick = makeRed;

// const button = document.querySelector("button");
// const paragraph = document.querySelector("p");

// function makeChanges() {
//   button.style.opacity = 0.5;
//   paragraph.innerText = "Button Clicked";
// }
// button.onclick = makeChanges;

// // not understanding. need to come back to this
// const textArea = document.querySelector("textarea"); //this is making a variable

// function changeFontColor() {
//   textArea.style.color = "green"; //textArea.style.color is refering to the nodes
// }
// textArea.onscroll = changeFontColor; //this one is using the variable and calling the function on event

// //fix code on bottom

// let taps = 0;

// function middleBoxMessage() {
//   const message = document.querySelector("h3");
//   taps += 1;
//   if (taps) {
//     message.innerHTML = `Tap Counter: ${taps}`;
//   } else {
//     middleBox.removeEventListener("touchstart", middleBoxMessage);
//     message.innerHTML = "Maximum taps reached";
//   }
// }
// const middleBox = document.querySelector(".middle-box");
// middleBox.addEventListener("touchstart", middleBoxMessage);

const input = function qtyChanged() {
  document.querySelector("p").innerHTML =
    "Total Price: $" + Number(input.value) * 1.99;
};

// const input = document.querySelector("input");

// function qtyChanged() {
//   document.querySelector("p").innerHTML = "Total Price: $" + (Number(input.value) * 1.99);
// }
// input.onchange = qtyChanged;

const terms = document.getElementsByTagName("textarea")[0];

function checkReading() {
  const read =
    terms.scrollHeight - Math.round(terms.scrollTop) === terms.clientHeight;
  if (read) {
    document.getElementsByTagName("p")[0].innerHTML = "Thank You";
  }
}
terms.onscroll = checkReading;
