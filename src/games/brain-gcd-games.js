import readlineSync from 'readline-sync';
import {
  hello,
  name,
  getRandomNumber,
} from '../index.js';

export default () => {
  hello();
  console.log('Find the greatest common divisor of given numbers.');
  let current = 0;
  while (current < 3) {
    const numberOne = getRandomNumber(1, 100);
    const numberTwo = getRandomNumber(1, 100);
    console.log(`Question: ${numberOne} ${numberTwo}`);
    const nod = (a, b) => {
      if (b > a) return nod(b, a);
      if (!b) return a;
      return nod(b, a % b);
    };
    const result = nod(numberOne, numberTwo);
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
