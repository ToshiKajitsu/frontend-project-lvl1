import readlineSync from 'readline-sync';

const generalModule = (description, generateRound) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(`${description}`);
  const roundsCount = 3;
  for (let i = 0; i < roundsCount; i += 1) {
    const { question, rigthAnswer } = generateRound();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === rigthAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${rigthAnswer}.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default generalModule;
