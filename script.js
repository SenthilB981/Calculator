let screen = document.getElementById("screen");
let buttonSound = document.getElementById("buttonSound");
let expression = "";

// Play sound on button click
function playSound() {
  buttonSound.play();
}

// Append number to the expression
function appendNumber(num) {
  playSound();
  if (screen.innerText === "0") {
    screen.innerText = num;
  } else {
    screen.innerText += num;
  }
  expression += num;
}

// Append operator to the expression
function appendOperator(op) {
  playSound();
  if (expression !== "") {
    expression += ` ${op} `;
    screen.innerText += ` ${op} `;
  }
}

// Append dot for decimals
function appendDot() {
  playSound();
  if (!screen.innerText.includes(".")) {
    screen.innerText += ".";
    expression += ".";
  }
}

// Clear the screen
function clearScreen() {
  playSound();
  screen.innerText = "0";
  expression = "";
}

// Calculate the result
function calculate() {
  playSound();
  try {
    const result = eval(expression.replace("÷", "/").replace("x", "*"));
    screen.innerText = result;
    expression = result;
  } catch (e) {
    screen.innerText = "Error";
    expression = "";
  }
}
