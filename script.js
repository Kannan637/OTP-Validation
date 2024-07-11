const numbers = document.querySelector(".numbers");

numbers.addEventListener("input", function(e) {
    const target = e.target;
    const value = target.value;
    if (isNaN(value)) {
        target.value = "";
        return;
    }
    if (value != "") {
        const nextInput = target.nextElementSibling;
        if (nextInput) {
            nextInput.focus();
        }
    }
});

numbers.addEventListener("keyup", function(e) {
    const target = e.target;
    const key = e.key.toLowerCase();
    if (key === "backspace" || key === "delete") {
        target.value = "";
        const prevInput = target.previousElementSibling;
        if (prevInput) {
            prevInput.focus();
        }
        return;
    }    
});