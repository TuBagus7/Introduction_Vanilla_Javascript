let inputBox = document.getElementById("inputBox");

// Add event listeners to number buttons
document.querySelectorAll(".button:not(.operator, .equalBtn)").forEach(button => {
    button.addEventListener("click", () => {
        if (inputBox.value === "0" || inputBox.value === "") {
            inputBox.value = button.textContent;
        } else {
            inputBox.value += button.textContent;
        }
    });
});

// Add event listeners to operator buttons
document.querySelectorAll(".operator").forEach(button => {
    button.addEventListener("click", () => {
        let currentValue = inputBox.value;
        if (button.textContent === "AC") {
            inputBox.value = "0";
        } else if (button.textContent === "DEL") {
            inputBox.value = currentValue.slice(0, -1) || "0";
        } else if (button.textContent === "%") {
            inputBox.value = (parseFloat(currentValue) / 100).toString();
        } else if (button.textContent === "&div;") {
            inputBox.value += "/";
        } else if (button.textContent === "X") {
            inputBox.value += "*";
        } else if (button.textContent === "-") {
            inputBox.value += "-";
        } else if (button.textContent === "+") {
            inputBox.value += "+";
        }
    });
});

// Add event listener for the equal button
document.querySelector(".equalBtn").addEventListener("click", () => {
    try {
        inputBox.value = eval(inputBox.value) || "0";
    } catch {
        inputBox.value = "Error";
    }
});

// Add event listener for decimal button
document.querySelector(".button:nth-child(3)").addEventListener("click", () => {
    if (!inputBox.value.includes(".")) {
        inputBox.value += ".";
    }
});
