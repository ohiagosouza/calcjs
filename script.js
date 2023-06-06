const main = document.querySelector('main');
const root = document.querySelector(':root');
const input = document.getElementById('input');
const inputResult = document.getElementById('result');
const copyToClipboard = document.getElementById('copyToClipboard');

input.focus();

document.getElementById('clear').addEventListener('click', function () {
  input.value = '';
  inputResult.value = '';
  input.focus();
});

copyToClipboard.addEventListener('click', function (event) {
  const button = event.currentTarget;
  if (button.innerText === 'Copy') {
    button.innerText = 'Copied!';
    button.classList.add('success');
    navigator.clipboard.writeText(inputResult.value);
  }
  setInterval(() => {
    button.innerText = 'Copy';
    button.classList.remove('success');
  }, 2000);
});

document.getElementById('equal').addEventListener('click', calculate);

const allowedKeys = ['(', ')', '/', '*', '-', '+', '9', '8', '7', '6', '5', '4', '3', '2', '1', '0', '.', '%', ' '];

document.querySelectorAll('.charKey').forEach(function (charKeyBtn) {
  charKeyBtn.addEventListener('click', function () {
    const value = charKeyBtn.dataset.value;
    input.value += value;
  });
});

input.addEventListener('keydown', function (event) {
  event.preventDefault();

  if (allowedKeys.includes(event.key)) {
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

function calculate() {
  inputResult.value = 'ERROR';
  inputResult.classList.add('error');

  const result = eval(input.value);

  inputResult.value = result;
  inputResult.classList.remove('error');
}

document.getElementById('themeSwitcher').addEventListener('click', function () {
  if (main.dataset.theme === 'dark') {
    root.style.setProperty('--bg-color', '#f1f5f9');
    root.style.setProperty('--border-color', '#aaa');
    root.style.setProperty('--font-color', '#000');
    root.style.setProperty('--primary-color', '#5805b8');
    main.dataset.theme = 'light';
  } else {
    root.style.setProperty('--bg-color', '#212529');
    root.style.setProperty('--border-color', '#666');
    root.style.setProperty('--font-color', '#f1f5f9');
    root.style.setProperty('--primary-color', '#8c27ff');
    main.dataset.theme = 'dark';
  }
});
