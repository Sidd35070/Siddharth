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
