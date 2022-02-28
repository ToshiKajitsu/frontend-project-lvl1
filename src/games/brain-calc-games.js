import generalModule from '../index.js';
import getRandomNumber from '../utils.js';

const operators = ['+', '-', '*'];

const description = 'What is the result of the expression?';

const calc = (numberone, operator, numbertwo) => {
  switch (operator) {
    case '+': return numberone + numbertwo;
    case '-': return numberone - numbertwo;
    case '*': return numberone * numbertwo;
    default: throw new Error('Unsupported operator');
  }
};

const generateRound = () => {
  const numberOne = getRandomNumber(1, 100);
  const numberTwo = getRandomNumber(1, 100);
  const operator = operators[getRandomNumber(0, operators.length - 1)];
  const question = `${numberOne} ${operator} ${numberTwo}`;
  const rigthAnswer = String(calc(numberOne, operator, numberTwo));
  return { question, rigthAnswer };
};

export default () => generalModule(description, generateRound);
