import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Arabic } from "flatpickr/dist/l10n/ar.js";

export function initDatePicker() {
  const bookingDate = document.getElementById("bookingDate");

  if (!bookingDate) return;

  flatpickr(bookingDate, {
    locale: Arabic,

    dateFormat: "Y-m-d",

    minDate: "today",

    disableMobile: true,

    onChange: function (selectedDates, dateStr) {
      // 🔥 مهم: تشغيل update للأوقات
      bookingDate.value = dateStr;

      bookingDate.dispatchEvent(new Event("change"));
    },
  });
}
