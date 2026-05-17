export function initFormSteps() {
  const steps = document.querySelectorAll(".c-step");

  if (!steps.length) return;

  const progressItems = document.querySelectorAll(".c-progress-steps__item");
  const progressBar = document.querySelector(".c-progress__bar");
  const stepsWrap = document.querySelector(".c-progress-steps__items");
  const nextBtn = document.querySelector(".next-btn");
  const prevBtn = document.querySelector(".prev-btn");

  if (!progressBar || !stepsWrap || !nextBtn || !prevBtn) return;

  let currentStep = 0;

  updateUI();

  /* NEXT */
  nextBtn.addEventListener("click", () => {

    if (currentStep === steps.length - 2) {
      // من المراجعة → الدفع
      currentStep++;
      updateUI();
      return;
    }

    if (currentStep === steps.length - 1) {
      // هنا الدفع الحقيقي (API لاحقًا)
      console.log("تنفيذ الدفع...");
      return;
    }

    if (currentStep >= steps.length - 1) return;

    currentStep++;
    updateUI();
  });

  /* PREV */
  prevBtn.addEventListener("click", () => {
    if (currentStep <= 0) return;
    currentStep--;
    updateUI();
  });

  function updateUI() {
    steps.forEach((step) => step.classList.remove("c-step--active"));
    steps[currentStep].classList.add("c-step--active");

    progressItems.forEach((item, index) => {
      item.classList.remove("is-active", "is-completed");

      if (index < currentStep) item.classList.add("is-completed");
      if (index === currentStep) item.classList.add("is-active");
    });

    const totalSteps = steps.length;
    const percent = ((currentStep + 1) / totalSteps) * 100;

    progressBar.style.width = `${percent}%`;
    stepsWrap.style.setProperty("--progress-line", `${percent}%`);

    prevBtn.style.display = currentStep === 0 ? "none" : "inline-flex";

    if (currentStep === steps.length - 2) {
      nextBtn.textContent = "الإنتقال للدفع";
      nextBtn.classList.add("is-finished");
    } else if (currentStep === steps.length - 1) {
      nextBtn.textContent = "تأكيد الدفع";
    } else {
      nextBtn.textContent = "التالي";
      nextBtn.classList.remove("is-finished");
    }
  }

  /* EDIT BUTTONS (الصحيح فقط) */
  document.querySelectorAll(".c-review__action").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const step = Number(e.currentTarget.dataset.step);

      if (isNaN(step)) return;

      currentStep = step;
      updateUI();

      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });
}