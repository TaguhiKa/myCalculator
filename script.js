const numbers = document.querySelectorAll('.number');      
const operators = document.querySelectorAll('.operator'); 
const allClear = document.querySelector('.allclear');
const result = document.querySelector('.result');
const output = document.querySelector('.output');

const computeResult = (str) => (Function('return ' + str)());

numbers.forEach(number => {
   number.addEventListener('click', (event) => {
    output.innerText = output.innerText + event.target.innerText
   });
});

operators.forEach(operator => {
  operator.addEventListener('click', (event) => {
    output.innerText = output.innerText + event.target.innerText
    });
});

result.addEventListener('click', () => {
  output.innerText = computeResult(output.innerText)
});

allClear.addEventListener('click', () => {
  output.innerText = ""
});










