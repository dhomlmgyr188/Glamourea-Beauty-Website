export function initFormSteps() {
  /* =========================
     ELEMENTS
  ========================= */

  const steps = document.querySelectorAll(".c-step");

  if (!steps.length) return;

  const progressItems = document.querySelectorAll(".c-progress-steps__item");

  const progressBar = document.querySelector(".c-progress__bar");

  const stepsWrap = document.querySelector(".c-progress-steps__items");

  const nextBtn = document.querySelector(".next-btn");

  const prevBtn = document.querySelector(".prev-btn");

  if (!progressBar || !stepsWrap || !nextBtn || !prevBtn) {
    return;
  }

  /* =========================
     STATE
  ========================= */

  let currentStep = 0;

  /* =========================
     INIT
  ========================= */

  updateUI();

  /* =========================
     NEXT BUTTON
  ========================= */

  nextBtn.addEventListener("click", () => {
    /* آخر خطوة */
    if (currentStep >= steps.length - 1) {
      return;
    }

    currentStep++;

    updateUI();
  });

  /* =========================
     PREVIOUS BUTTON
  ========================= */

  prevBtn.addEventListener("click", () => {
    if (currentStep <= 0) {
      return;
    }

    currentStep--;

    updateUI();
  });

  /* =========================
     UPDATE UI
  ========================= */

  function updateUI() {
    /* =========================
       STEP CONTENT
    ========================= */

    steps.forEach((step) => {
      step.classList.remove("c-step--active");
    });

    steps[currentStep].classList.add("c-step--active");

    /* =========================
       STEP STATES
    ========================= */

    progressItems.forEach((item, index) => {
      item.classList.remove("is-active", "is-completed");

      /* الخطوات المكتملة */
      if (index < currentStep) {
        item.classList.add("is-completed");
      }

      /* الخطوة الحالية */
      if (index === currentStep) {
        item.classList.add("is-active");
      }
    });

    /* =========================
       PROGRESS BAR
    ========================= */

    const totalSteps = steps.length;

    const percent = ((currentStep + 1) / totalSteps) * 100;

    /* البار العلوي */
    progressBar.style.width = `${percent}%`;

    /* الخط بين الدوائر */
    stepsWrap.style.setProperty("--progress-line", `${percent}%`);

    /* =========================
       BUTTONS
    ========================= */

    /* اخفاء زر السابق */
    prevBtn.style.display = currentStep === 0 ? "none" : "inline-flex";

    /* تغيير نص الزر */
    if (currentStep === steps.length - 1) {
      nextBtn.textContent = "تأكيد الحجز";

      nextBtn.classList.add("is-finished");
    } else {
      nextBtn.textContent = "التالي";

      nextBtn.classList.remove("is-finished");
    }
  }
}
