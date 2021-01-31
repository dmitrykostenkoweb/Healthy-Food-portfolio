const burger = document.querySelector(".burger"),
      nav = document.querySelector(".header__links");

burger.addEventListener("click", (e) => {
  if (nav.classList.contains("nav-active")) {
    closeBurger();
  } else {
    showBurger();
  }
});

function showBurger() {
  nav.classList.add("nav-active");
  burger.classList.add("toggle");
}

function closeBurger() {
  nav.classList.remove("nav-active");
  burger.classList.remove("toggle");
}



document.addEventListener("keydown", (e) => {
  if (e.code === "Escape" && nav.classList.contains("nav-active")) {
    closeBurger();
  }
});

export default showBurger;
