const currentInput = document.getElementById('current-input');
const wholeExpression = document.getElementById('whole-expression');
const digits = document.querySelectorAll('[class="button"]');
const MAX_INPUT_LENGTH = 20;

let isCalculationFinished = false;

digits.forEach(button => {
  button.addEventListener('click', _ => {
    addDigit(button.innerText);
  })
});

function addDigit(digit) {
  if (isCalculationFinished) {
    wholeExpression.innerText = '';
    isCalculationFinished = false;
  }
  let inputLength = currentInput.innerText.length;
  if (inputLength < MAX_INPUT_LENGTH) {
    currentInput.innerText += digit;
  }
}

