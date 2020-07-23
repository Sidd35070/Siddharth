function height() {
  var main = document.querySelector(".page-five");
  // console.log(main.getBoundingClientRect().y);
  // console.log(window.innerHeight);
  setTimeout(height, 3000);
}

function show(data) {
  var i = "cert" + data;
  console.log(i);
  var url = document.getElementById(i).src;
  document.getElementById("show").src = url;
  document.getElementById("main-captain").innerHTML = document.getElementById(
    "title" + data
  ).innerHTML;
  document.getElementById(
    "secondary-captain"
  ).innerHTML = document.getElementById("company" + data).innerHTML;
  document.getElementById("model").classList.remove("hidden");
  document.getElementById("model").classList.add("show");

  var model = document.querySelector(".model");
  model.addEventListener("click", (e) => {
    if (e.target.classList.contains("model")) {
      model.classList.remove("show");
    }
  });
  var cross = document.querySelector("#cross");
  model.addEventListener("click", () => {
    model.classList.remove("show");
  });
}

function navSlide() {
  //using "".list li" here coz font awesome also has class link.
  const links = document.querySelectorAll(".list li");
  const burger = document.querySelector(".burger");
  const linkContainer = document.querySelector(".links-container");

  burger.addEventListener("click", () => {
    //container slide
    linkContainer.classList.toggle("links-active");

    //Links animation
    links.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = "navfade 1.5s ease forwards " + index / 7 + "s";
      }
    });
    //burger animation
    burger.classList.toggle("toggle");
  });
  //Animation
}

console.log("yes");
const texts = ["Developer", "Designer", "Blogger", "Public Speaker"];
var count = 0;
var index = 0;
var currentText = "";
var letters = "";
function type() {
  if (index === texts.length) {
    index = 0;
  }
  currentText = texts[index];
  letters = currentText.slice(0, count++);
  document.querySelector(".type").textContent = letters;

  if (count - 1 === currentText.length) {
    count = 0;
    index++;

    setTimeout(type, 1000);
  } else setTimeout(type, 250);
}

function hiddd() {
  var elements;
  var windowHeight;

  function init() {
    elements = document.querySelectorAll(".hidd");
    windowHeight = window.innerHeight;
  }

  function checkPosition() {
    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];
      var positionFromTop = elements[i].getBoundingClientRect().y;
      console.log(positionFromTop);

      if (positionFromTop <= windowHeight / 1.3) {
        console.log(element.classList);
        if (element.classList.contains("aleft")) {
          element.classList.add("fade-in-left");
        } else if (element.classList.contains("aright")) {
          element.classList.add("fade-in-right");
        } else if (element.classList.contains("abottom")) {
          element.classList.add("fade-in-bottom");
        } else element.classList.add("fade-in-element");
        element.classList.remove("hidd");
      }
    }
  }

  window.addEventListener("scroll", checkPosition);
  window.addEventListener("resize", init);

  init();
  checkPosition();
}
hiddd();
height();
type();
navSlide();
