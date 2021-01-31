function slider({ container, content, nextArrow, prevArrow }) {
  // slider

  const carousel = document.querySelector(container),
    images = document.querySelectorAll(content),
    arrowPrev = document.querySelector(prevArrow),
    arrowNext = document.querySelector(nextArrow),
    indicators = document.createElement("ol"),
    dots = [];

  let currentStart = 0;

  indicators.classList.add("carousel-indicators");

  carousel.style.position = "relative";
  carousel.append(indicators);

  for (let i = 0; i < images.length; i++) {
    const dot = document.createElement("li");
    dot.setAttribute("data-slide-to", i + 1);
    dot.classList.add("dot");
    if (i == 0) {
      dot.style.opacity = 1;
    }
    indicators.append(dot);
    dots.push(dot);
  }

  function dotsOpacity() {
    dots.forEach((dot) => (dot.style.opacity = "0.5"));
    dots[currentStart].style.opacity = 1;
  }

  function prev() {
    if (currentStart - 1 == -1) {
      currentStart = images.length - 1;
    } else {
      currentStart--;
    }
    slider();
  }

  function next() {
    if (currentStart + 1 == images.length) {
      currentStart = 0;
    } else {
      currentStart++;
    }
    slider();
  }

  arrowPrev.addEventListener("click", () => {
    prev();
    dotsOpacity();
  });

  arrowNext.addEventListener("click", () => {
    next();
    dotsOpacity();
  });

  function slider() {
    for (let i = 0; i < images.length; i++) {
      images[i].classList.add("hide");
    }
    images[currentStart].classList.remove("hide");

    if (images.length > 10) {
      document.querySelector(
        "#total"
      ).innerHTML = `<span id="total">${images.length}</span>`;
      document.querySelector("#current").innerHTML = `<span id="current">${
        currentStart + 1
      }</span>`;
    } else {
      document.querySelector(
        "#total"
      ).innerHTML = `<span id="total"> 0${images.length}</span>`;
      document.querySelector("#current").innerHTML = `<span id="current"> 0${
        currentStart + 1
      }</span>`;
    }
  }
  slider();

  dots.forEach((dot) => {
    dot.addEventListener("click", (e) => {
      const slideTo = e.target.getAttribute("data-slide-to");

      currentStart = slideTo;

      images.forEach((im) => im.classList.add("hide"));
      images[currentStart - 1].classList.remove("hide");

      if (images.length > 10) {
        document.querySelector(
          "#current"
        ).innerHTML = `<span id="current">${currentStart}</span>`;
      } else {
        document.querySelector(
          "#current"
        ).innerHTML = `<span id="current"> 0${currentStart}</span>`;
      }

      dots.forEach((dot) => (dot.style.opacity = "0.5"));
      dots[currentStart - 1].style.opacity = 1;
    });
  });
}

export default slider;
