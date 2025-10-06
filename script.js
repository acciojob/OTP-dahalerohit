let codes = document.querySelectorAll(".code");

codes.forEach((code, index) => {

    // INPUT EVENT
    code.addEventListener("input", () => {
        if (!/^\d$/.test(code.value)) {
            code.value = "";
            return;
        }

        if (index < codes.length - 1) {
            codes[index + 1].focus();
            codes[index + 1].classList.add("focused");
        }
    });

    // KEYDOWN EVENT
    code.addEventListener("keydown", (e) => {
        if (e.key === "Backspace") {
            e.preventDefault();
            if (code.value !== "") {
                code.value = "";
            } else if (index > 0) {
                codes[index - 1].focus();
                codes[index - 1].classList.add("focused");
            }
        }
    });

    // BLUR EVENT
    code.addEventListener("blur", () => {
        code.classList.remove("focused");
    });

    
    code.addEventListener("focus", () => {
        code.classList.add("focused");
    });
});


codes[0].focus();
codes[0].classList.add("focused");
