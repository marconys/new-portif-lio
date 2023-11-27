// scroll-animation elementsLeft
const observerLeft = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("left-show");
    } else {
      entry.target.classList.remove("left-show");
    }
  });
});

const elementsLeft = document.querySelectorAll(".left-hidden");

elementsLeft.forEach((elementLeft) => observerLeft.observe(elementLeft));

// scroll-animation elementsRight
const observerRight = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("right-show");
    } else {
      entry.target.classList.remove("right-show");
    }
  });
});

const elementsRight = document.querySelectorAll(".right-hidden");

elementsRight.forEach((elementRight) => observerRight.observe(elementRight));

// scroll-animation elementsBottom
const observerBottom = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("bottom-show");
    } else {
      entry.target.classList.remove("bottom-show");
    }
  });
});

const elementsBottom = document.querySelectorAll(".bottom-hidden");

elementsBottom.forEach((elementBottom) => observerBottom.observe(elementBottom)
);

// scroll-animation elementsTop
const observerTop = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("top-show");
    } else {
      entry.target.classList.remove("top-show");
    }
  });
});

const elementsTop = document.querySelectorAll(".top-hidden");

elementsTop.forEach((elementTop) => observerTop.observe(elementTop));
