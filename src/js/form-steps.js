export function initFormSteps() {
  const steps =
    document.querySelectorAll(".c-step");
    if (!steps.length) return;

  const progressItems =
    document.querySelectorAll(
      ".c-progress-steps__item"
    );

  const progressBar =
    document.querySelector(".c-progress__bar");

  const nextBtn =
    document.querySelector(".next-btn");

  const prevBtn =
    document.querySelector(".prev-btn");

  let currentStep = 0;

  updateUI();

  nextBtn.addEventListener("click", () => {

    if (currentStep < steps.length - 1) {

      currentStep++;

      updateUI();

    }

  });

  prevBtn.addEventListener("click", () => {

    if (currentStep > 0) {

      currentStep--;

      updateUI();

    }

  });

  function updateUI() {

    // STEP CONTENT
    steps.forEach((step) => {
      step.classList.remove("c-step--active");
    });

    steps[currentStep]
      .classList.add("c-step--active");

    // PROGRESS ITEMS
    progressItems.forEach((item, index) => {

      item.classList.remove(
        "is-active",
        "is-completed"
      );

      if (index < currentStep) {

        item.classList.add(
          "is-completed"
        );

      }

      else if (index === currentStep) {

        item.classList.add(
          "is-active"
        );

      }

    });

    // BAR WIDTH
    const progressWidth =
      ((currentStep + 1) / steps.length) * 100;

    progressBar.style.width =
      `${progressWidth}%`;

    // BUTTONS
    prevBtn.style.display =
      currentStep === 0
        ? "none"
        : "block";

    nextBtn.textContent =
      currentStep === steps.length - 1
        ? "إنهاء"
        : "التالي";
  }
}