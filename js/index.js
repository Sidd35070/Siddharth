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

navSlide();
