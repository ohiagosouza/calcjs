export const copyToClipboard = document.getElementById('copyToClipboard');
const inputResult = document.getElementById('result');

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