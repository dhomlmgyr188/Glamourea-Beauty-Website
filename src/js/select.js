export function initSelect() {

    const selects =
        document.querySelectorAll(".c-select");

    selects.forEach((select) => {

        const trigger =
            select.querySelector(".c-select__trigger");

        const menu =
            select.querySelector(".c-select__menu");

        const options =
            select.querySelectorAll(".c-select__option");

        const hiddenInput =
            select.querySelector(".c-select__input");


        // OPEN / CLOSE ON TRIGGER
        trigger.addEventListener("click", (e) => {

            e.stopPropagation();

            // اقفل كل القوائم الثانية أولاً
            document
                .querySelectorAll(".c-select__menu")
                .forEach(m => {

                    if (m !== menu) {
                        m.classList.remove("is-open");
                    }

                });

            // toggle للقائمة الحالية فقط
            menu.classList.toggle("is-open");

        });


        // SELECT OPTION
        options.forEach((option) => {

            option.addEventListener("click", () => {

                const label =
                    option.textContent;

                const value =
                    option.dataset.value;

                trigger
                    .querySelector(".c-select__title")
                    .textContent = label;

                hiddenInput.value = value;

                menu.classList.remove("is-open");

            });

        });

    });


    // CLOSE ON OUTSIDE CLICK
    document.addEventListener("click", (e) => {

        document
            .querySelectorAll(".c-select")
            .forEach((select) => {

                const menu =
                    select.querySelector(".c-select__menu");

                const trigger =
                    select.querySelector(".c-select__trigger");

                const isInside =
                    select.contains(e.target);

                if (!isInside) {
                    menu.classList.remove("is-open");
                }

            });

    });

}