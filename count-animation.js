// Function to check if an element is in the viewport
function isInViewport(element) {
  var rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to start the progress bar animation
function animateProgressBar(progressBar) {
  const targetPercent = parseInt(progressBar.getAttribute("data-target"));
  let currentCount = 0;
  let animationId;

  function frame() {
    if (currentCount >= targetPercent) {
      clearInterval(animationId);
    } else {
      currentCount++;
      progressBar.textContent = currentCount + '+';
    }
  }

  if (isInViewport(progressBar)) {
    animationId = setInterval(frame, 10);
  }

  function startAnimationOnScroll() {
    if (isInViewport(progressBar)) {
      animationId = setInterval(frame, 10);
      window.removeEventListener("scroll", startAnimationOnScroll);
    }
  }

  window.addEventListener("scroll", startAnimationOnScroll);
}

// Function to initialize progress bar animations
function initializeProgressBars() {
  const progressBars = document.querySelectorAll(".progress-bar");
  progressBars.forEach(animateProgressBar);
}

// Call the initializeProgressBars() function initially
initializeProgressBars();
