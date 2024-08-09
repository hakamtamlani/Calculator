document.addEventListener("DOMContentLoaded", () => {
  const inputBox = document.getElementById("inputBox");
  const buttons = document.querySelectorAll(".button");
  let currentInput = "";

  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const buttonText = e.target.innerHTML;

      if (buttonText === "=") {
        try {
          currentInput = eval(currentInput).toString();
        } catch (error) {
          currentInput = "Error";
        }
        inputBox.value = currentInput;
      } else if (buttonText === "AC") {
        currentInput = "";
        inputBox.value = "0";
      } else if (buttonText === "DEL") {
        currentInput = currentInput.slice(0, -1);
        inputBox.value = currentInput || "0";
      } else {
        if (currentInput === "Error") currentInput = "";
        currentInput += buttonText;
        inputBox.value = currentInput;
      }
    });
  });
});
