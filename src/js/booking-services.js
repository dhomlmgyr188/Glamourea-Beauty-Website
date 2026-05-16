export function initBookingServices() {

    /*
      SERVICES DATABASE
      مستقبلاً تستبدلها ببيانات API
    */

    const services = {
        proten: {
            name: "بروتين",
            basePrice: 300,
            duration: 120
        },

        keraten: {
            name: "كيراتين",
            basePrice: 400,
            duration: 150
        },

        "down-hair": {
            name: "علاج تساقط",
            basePrice: 250,
            duration: 90
        }
    };

    /*
      HAIR LENGTH PRICES
    */

    const hairLengthPrices = {
        "small-hair": 0,
        "medium-hair": 80,
        "big-hair": 150
    };

    /*
      HAIR DENSITY PRICES
    */

    const hairDensityPrices = {
        "small-density": 0,
        "medium-density": 50,
        "big-density": 100
    };

    /*
      VAT
    */

    const vatPercent = 15;

    /*
      ELEMENTS
    */

    const treatmentInput = document.querySelector(
        '[name="treatmentType"]'
    );

    const hairLengthInput = document.querySelector(
        '[name="hairLength"]'
    );

    const hairDensityInput = document.querySelector(
        '[name="hairDensity"]'
    );

    /*
      REVIEW ELEMENTS
    */

    const subtotalElement = document.querySelector("#reviewSubtotal");

    const vatElement = document.querySelector("#reviewVat");

    const totalElement = document.querySelector("#reviewTotal");

    const durationElement = document.querySelector("#reviewDuration");

    /*
      EVENTS
    */

    [
        treatmentInput,
        hairLengthInput,
        hairDensityInput
    ].forEach((input) => {

        if (!input) return;

        input.addEventListener("change", updateBookingSummary);
    });

    /*
      INIT
    */

    updateBookingSummary();

    /*
      UPDATE BOOKING SUMMARY
    */

    function updateBookingSummary() {

        const treatmentValue = treatmentInput?.value;

        const hairLengthValue = hairLengthInput?.value;

        const hairDensityValue = hairDensityInput?.value;

        /*
          إذا لا يوجد خدمة
        */

        if (!treatmentValue || !services[treatmentValue]) {
            resetSummary();

            return;
        }

        /*
          SERVICE
        */

        const service = services[treatmentValue];

        /*
          PRICE
        */

        let subtotal = service.basePrice;

        subtotal += hairLengthPrices[hairLengthValue] || 0;

        subtotal += hairDensityPrices[hairDensityValue] || 0;

        /*
          VAT
        */

        const vatAmount = subtotal * (vatPercent / 100);

        /*
          TOTAL
        */

        const total = subtotal + vatAmount;

        /*
          DURATION
        */

        let duration = service.duration;

        /*
          زيادة مدة حسب الكثافة
        */

        if (hairDensityValue === "big-density") {
            duration += 30;
        }

        /*
          UPDATE UI
        */

        if (subtotalElement) {
            subtotalElement.textContent = `${subtotal} ر.س`;
        }

        if (vatElement) {
            vatElement.textContent = `${vatAmount.toFixed(2)} ر.س`;
        }

        if (totalElement) {
            totalElement.textContent = `${total.toFixed(2)} ر.س`;
        }

        if (durationElement) {
            durationElement.textContent = `${duration} دقيقة`;
        }
    }

    /*
      RESET SUMMARY
    */

    function resetSummary() {

        if (subtotalElement) {
            subtotalElement.textContent = "--";
        }

        if (vatElement) {
            vatElement.textContent = "--";
        }

        if (totalElement) {
            totalElement.textContent = "--";
        }

        if (durationElement) {
            durationElement.textContent = "--";
        }
    }
}