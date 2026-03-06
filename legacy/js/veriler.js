const numElements = document.querySelectorAll(".num");
let hasStarted = false;

function startCounting() {
  numElements.forEach((numElement) => {
    let startValue = 0;
    let endValue = parseInt(numElement.getAttribute("data-target"));
    let duration = 2000; // 2 seconds
    let startTime = null;

    function animate(currentTime) {
      if (!startTime) startTime = currentTime;
      let progress = currentTime - startTime;
      let currentVal = Math.min(
        Math.floor((progress / duration) * endValue),
        endValue
      );
      
      numElement.innerText = currentVal + "+";

      if (progress < duration) {
        requestAnimationFrame(animate);
      } else {
        numElement.innerText = endValue + "+";
      }
    }

    requestAnimationFrame(animate);
  });
}

// Use IntersectionObserver to start the animation when .veriler is in viewport
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.5
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !hasStarted) {
      hasStarted = true;
      startCounting();
    }
  });
}, observerOptions);

const verilerSection = document.querySelector(".veriler");
if (verilerSection) {
  observer.observe(verilerSection);
}
