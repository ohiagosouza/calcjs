import { calculate } from "./modules/calculate.js";
import { copyToClipboard } from "./modules/copyToClipboard.js";
import { main, root } from "./modules/themeSwitch.js";
import { clear } from "./modules/clear.js";

input.focus();

const allowedKeys = ['(', ')', '/', '*', '-', '+', '9', '8', '7', '6', '5', '4', '3', '2', '1', '0', '.', '%', ' '];

document.querySelectorAll('.charKey').forEach(function (charKeyBtn) {
  charKeyBtn.addEventListener('click', function () {
    const value = charKeyBtn.dataset.value;
    input.value += value;
  });
});

input.addEventListener('keypress', function (event) {
  event.preventDefault();

  if (allowedKeys.includes(event.key)) {
    input.value = '';
    input.value += event.key;
    return;
  }

  if (event.key === 'Backspace') {
    input.value = input.value.slice(0, -1);
  }
  if (event.key === 'Enter') {
    calculate();
  }
});

