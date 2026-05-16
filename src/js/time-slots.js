export function initTimeSlots() {
  const bookingDate = document.getElementById("bookingDate");

  const timeSlots = document.getElementById("timeSlots");

  const bookingTime = document.getElementById("bookingTime");

  const placeholder = document.querySelector(".c-time-slots__placeholder");

  const specialistInput = document.querySelector('input[name="specialist"]');

  if (!bookingDate || !timeSlots || !bookingTime || !specialistInput) return;

  const slotsBySpecialist = {
    israa: {
      "2026-05-20": ["10:00", "10:30", "11:00"],
      "2026-05-21": ["2:00", "3:00"],
    },
    najla: {
      "2026-05-20": ["5:00", "5:30"],
    },
    alaa: {
      "2026-05-20": ["1:00", "1:30"],
    },
  };

  function renderSlots() {
    const date = bookingDate.value;
    const specialist = specialistInput.value;

    if (!date || !specialist) {
      timeSlots.innerHTML = "";
      if (placeholder) placeholder.style.display = "block";
      return;
    }

    placeholder && (placeholder.style.display = "none");

    timeSlots.innerHTML = `<p>جاري تحميل الأوقات...</p>`;

    const slots = slotsBySpecialist?.[specialist]?.[date] || [];

    timeSlots.innerHTML = "";

    if (!slots.length) {
      timeSlots.innerHTML = `<p class="c-time-slots__empty">لا توجد أوقات متاحة</p>`;
      return;
    }

    slots.forEach((time) => {
      const btn = document.createElement("button");

      btn.type = "button";

      btn.classList.add(
        "c-time-slot",
        "c-btn",
        "c-btn--secondary",
        "c-btn--sm",
        "is-available",
      );

      btn.dataset.time = time;

      btn.textContent = formatTime(time);

      btn.addEventListener("click", () => {
        document
          .querySelectorAll(".c-time-slot")
          .forEach((b) => b.classList.remove("is-active"));

        btn.classList.add("is-active");

        bookingTime.value = time;
      });

      timeSlots.appendChild(btn);
    });
  }

  bookingDate.addEventListener("change", renderSlots);
  specialistInput.addEventListener("change", renderSlots);
}

function formatTime(time) {
  const [h, m] = time.split(":");

  const hour = Number(h);

  const period = hour >= 12 ? "م" : "ص";

  const formatted = hour > 12 ? hour - 12 : hour;

  return `${formatted}:${m} ${period}`;
}
