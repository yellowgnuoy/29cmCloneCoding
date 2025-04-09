const parallaxElement = document.querySelector("#scroll01");
const parallaxElement2 = document.querySelector("#scroll02");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  if (scrollY > 1000) {
    parallaxElement.style.transform = `translate3d(0, ${
      (scrollY - 1000) * 0.3
    }px, 0)`;
    parallaxElement2.style.transform = `translate3d(0, ${
      (scrollY - 1000) * 0.6
    }px, 0)`;
  }
});
