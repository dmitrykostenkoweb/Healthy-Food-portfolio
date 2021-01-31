const parallaxItem1 = document.querySelectorAll(".parallax1");
const parallaxItem2 = document.querySelectorAll(".parallax2");
const parallaxItem3 = document.querySelectorAll(".parallax3");
const parallaxItem4 = document.querySelectorAll(".parallax4");
document.addEventListener("mousemove", parallax);
document.addEventListener("touchmove", parallax);

function parallax(event) {
  parallaxItem1.forEach((item) => {
    item.style.transform = `translate(${event.clientX / 100}px, ${
      event.clientY / 50
    }px)`;
  });
  parallaxItem2.forEach((item) => {
    item.style.transform = `translate(${event.clientX / 50}px, ${
      event.clientY / 100
    }px)`;
  });

  parallaxItem3.forEach((item) => {
    item.style.transform = `translate(${event.clientX / 30}px, ${
      event.clientY / 70
    }px)`;
  });
  parallaxItem4.forEach((item) => {
    item.style.transform = `translate(${event.clientX / 80}px, ${
      event.clientY / 20
    }px)`;
  });
}

export default parallax;
