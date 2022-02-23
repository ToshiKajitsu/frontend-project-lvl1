import readlineSync from 'readline-sync';

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const mainFunction = (condition, checkFunction) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(`${condition}`);
  let current = 0;
  while (current < 3) {
    const { question, rigthAnswer } = checkFunction();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === rigthAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${rigthAnswer}.`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
    current += 1;
  }
  console.log(`Congratulations, ${name}!`);
};

export {
  mainFunction,
  getRandomNumber,
};
