import generalModule from '../index.js';
import getRandomNumber from '../utils.js';

const operators = ['+', '-', '*'];

const getRandomOperator = (arr) => arr[getRandomNumber(0, arr.length - 1)];

const calc = (numberone, operator, numbertwo) => {
  switch (operator) {
    case '+': return numberone + numbertwo;
    case '-': return numberone - numbertwo;
    case '*': return numberone * numbertwo;
    default: throw new Error('Unsupported operator');
  }
};

const description = 'What is the result of the expression?';
const generateRound = () => {
  const numberOne = getRandomNumber(1, 100);
  const numberTwo = getRandomNumber(1, 100);
  const operator = getRandomOperator(operators);
  const question = `${numberOne} ${operator} ${numberTwo}`;
  const rigthAnswer = String(calc(numberOne, operator, numberTwo));
  return { question, rigthAnswer };
};

export default () => generalModule(description, generateRound);
