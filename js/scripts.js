const currentInput = document.getElementById('current-input');
const wholeExpression = document.getElementById('whole-expression');
const digits = document.querySelectorAll('[class="button"]');
const floating = document.querySelector('.coma.button');
const negative = document.querySelector('.negative.button');

const ADDITION = '+';
const SUBTRACTION = '-';
const MULTIPLICATION = '*';
const DIVISION = '÷';
const KEYBOARD_DIVISION = '/';
const RESULT = '=';
const ALLCLEAR = 'AC';
const DELETE = 'Del';
const MAX_INPUT_LENGTH = 20;
const WHOLE_EXP_MAX_LENGTH = 28;

let currentOperator = '';
let currentValue = 0;
let isCalculationFinished = false;

digits.forEach(button => {
  button.addEventListener('click', _ => {
    addDigit(button.innerText);
  })
});


floating.addEventListener('click', _ => {
  addPoint();
});

negative.addEventListener('click', _ => {
  addMinus();
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

function addPoint() {
  const point = '.';
  let isFloating = currentInput.innerText.includes(point);
  if (!isFloating) {
    currentInput.innerText += point;
  }
}

function addMinus() {
  const minus = '-';
  isNegative = currentInput.innerText.includes(minus);
  if (!isNegative) {
    currentInput.innerText = minus + currentInput.innerText;
  } else {
    currentInput.innerText = currentInput.innerText.replace(minus, '');
  }
}


function updateWholeExpression(symbol) {
  let tmpStr =
    `${wholeExpression.innerText} ${currentInput.innerText} ${symbol}`;
  if (tmpStr.length > WHOLE_EXP_MAX_LENGTH) {
    let regex = "[-+*÷]";
    tmpStr = tmpStr.slice(-WHOLE_EXP_MAX_LENGTH);
    let firstOccurance = tmpStr.match(regex).index;
    tmpStr = `... ${tmpStr.substring(firstOccurance, tmpStr.length)}`;
    wholeExpression.innerText = tmpStr;
  } else {
    wholeExpression.innerText = tmpStr;
  }
}

function calculate() {
  let operator = currentOperator;
  let first = currentValue;
  let second = Number.parseFloat(currentInput.innerText);

  switch (operator) {
    case ADDITION:
      return first + second;
    case SUBTRACTION:
      return first - second;
    case MULTIPLICATION:
      return first * second;
    case DIVISION:
      return first / second;
    default:
      return 0;
  }
}

