// Import our custom CSS
import "../scss/styles.scss";

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

const navbar = document.querySelector('.c-navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('is-scrolled');
  } else {
    navbar.classList.remove('is-scrolled');
  }
});

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".c-navbar__links a");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.id;

        navLinks.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${id}`) {
            link.classList.add("active");
          }
        });
      }
    });
  },
  {
    threshold: 0.6,
  }
);

sections.forEach((section) => observer.observe(section));

const steps = document.querySelectorAll(".c-form__step");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const submitBtn = document.querySelector(".submit-btn");
const currentStepText = document.querySelector(".current-step");
const progressBar = document.querySelector(".c-form__progress-bar");

let currentStep = 0;

updateForm();

nextBtn.addEventListener("click", ()=> {
  if(currentStep < steps.length -1) {
    currentStep++;
    updateForm();
  }
})
prevBtn.addEventListener("click", ()=> {
  if(currentStep > 0) {
    currentStep--;
    updateForm();
  }
})

function updateForm() {
   steps.forEach((step) => {
        step.classList.remove("c-form__step--active");
    });

    steps[currentStep].classList.add("c-form__step--active");

    currentStepText.textContent = currentStep + 1;

    const progressWidth =
        ((currentStep + 1) / steps.length) * 100;

    progressBar.style.width = `${progressWidth}%`;

    prevBtn.style.display =
        currentStep === 0 ? "none" : "block";

    nextBtn.style.display =
        currentStep === steps.length - 1
            ? "none"
            : "block";

    submitBtn.style.display =
        currentStep === steps.length - 1
            ? "block"
            : "none";
}