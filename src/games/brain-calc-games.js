import readlineSync from 'readline-sync';
import {
  hello,
  name,
  operators,
  getRandomOperator,
  getRandomNumber,
} from '../index.js';

export default () => {
  hello();
  console.log('What is the result of the expression?');
  let current = 0;
  while (current < 3) {
    const checkNumber = () => {
      const numberOne = getRandomNumber(1, 100);
      const numberTwo = getRandomNumber(1, 100);
      const operator = getRandomOperator(operators);
      console.log(`Question: ${numberOne}${operator}${numberTwo}`);
      switch (operator) {
        case '+': return numberOne + numberTwo;
        case '-': return numberOne - numberTwo;
        case '*': return numberOne * numberTwo;
        default: return false;
      }
    };
    const result = +checkNumber();
    const answer = +readlineSync.question('Your answer: ');
    if (answer === result) {
      current += 1;
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${result}.`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
  }
  if (current === 3) console.log(`Congratulations, ${name}!`);
};
