export const clear = document.getElementById('clear')
const inputResult = document.getElementById('result');

clear.addEventListener('click', function () {
  input.value = '';
  inputResult.value = '';
  input.focus();
});