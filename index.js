window.addEventListener("load", siteShows);

function siteShows() {
  console.log("siteShows");
  document.querySelector("#burgerbutton").addEventListener("click", toggleMenu);
}

function toggleMenu() {
  console.log("toggleMenu");
  document.querySelector("#menu").classList.toggle("hidden");

  let isHidden = document.querySelector("#menu").classList.contains("hidden");

  if (isHidden == true) {
    document.querySelector("#burgerbutton").textContent = "≡";
  } else {
    document.querySelector("#burgerbutton").textContent = "x";
  }
}
