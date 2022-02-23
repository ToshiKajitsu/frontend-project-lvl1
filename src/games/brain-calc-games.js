import {
  mainFunction,
  getRandomNumber,
} from '../index.js';

const operators = ['+', '-', '*'];

const getRandomOperator = (arr) => arr[getRandomNumber(0, arr.length - 1)];

const calc = (numberone, operator, numbertwo) => {
  switch (operator) {
    case '+': return numberone + numbertwo;
    case '-': return numberone - numbertwo;
    case '*': return numberone * numbertwo;
    default: return false;
  }
};

const condition = 'What is the result of the expression?';
const checkFunction = () => {
  const numberOne = getRandomNumber(1, 100);
  const numberTwo = getRandomNumber(1, 100);
  const operator = getRandomOperator(operators);
  const question = `${numberOne}${operator}${numberTwo}`;
  const rigthAnswer = String(calc(numberOne, operator, numberTwo));
  return { question, rigthAnswer };
};

export default () => mainFunction(condition, checkFunction);
