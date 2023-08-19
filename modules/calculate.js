const input = document.getElementById('input');
const inputResult = document.getElementById('result');

document.getElementById('equal').addEventListener('click', calculate);

export function calculate() {
  inputResult.value = 'ERROR';
  inputResult.classList.add('error');

  const result = eval(input.value);

  inputResult.value = result;
  inputResult.classList.remove('error');
}