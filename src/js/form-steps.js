export function initFormSteps() {
  const steps = document.querySelectorAll(".c-form__step");
  const nextBtn = document.querySelector(".next-btn");
  const prevBtn = document.querySelector(".prev-btn");
  const submitBtn = document.querySelector(".submit-btn");
  const currentStepText = document.querySelector(".current-step");
  const progressBar = document.querySelector(".c-form__progress-bar");

  if (!steps.length || !nextBtn || !prevBtn || !submitBtn) return;

  let currentStep = 0;

  updateForm();

  nextBtn.addEventListener("click", () => {
    if (currentStep < steps.length - 1) {
      currentStep++;
      updateForm();
    }
  });

  prevBtn.addEventListener("click", () => {
    if (currentStep > 0) {
      currentStep--;
      updateForm();
    }
  });

  function updateForm() {
    steps.forEach(step => step.classList.remove("c-form__step--active"));
    steps[currentStep].classList.add("c-form__step--active");

    currentStepText.textContent = currentStep + 1;

    const progressWidth = ((currentStep + 1) / steps.length) * 100;
    progressBar.style.width = `${progressWidth}%`;

    prevBtn.style.display = currentStep === 0 ? "none" : "block";
    nextBtn.style.display = currentStep === steps.length - 1 ? "none" : "block";
    submitBtn.style.display = currentStep === steps.length - 1 ? "block" : "none";
  }
}