var prevBtn = document.getElementById("prevBtn");
var nextBtn = document.getElementById("nextBtn");

var cercles = document.querySelectorAll(".cercle");
var lines = document.querySelectorAll(".line");

var currentStep = 0;

nextBtn.addEventListener("click", function () {
  if (currentStep < cercles.length - 1) {
    currentStep++;
    updateProgress();
  }
});

prevBtn.addEventListener("click", function () {
  if (currentStep > 0) {
    currentStep--;
    updateProgress();
  }
});

function updateProgress() {
  cercles.forEach((c, index) => {
    // Add active-border class up to the current step
    c.classList.toggle("active-border", index <= currentStep);
  });

  lines.forEach((l, index) => {
    // Add active-line class up to the current step
    l.classList.toggle("active-line", index < currentStep);
  });

  prevBtn.classList.toggle("disabled", currentStep === 0);
  nextBtn.classList.toggle("disabled", currentStep === cercles.length - 1);
}
