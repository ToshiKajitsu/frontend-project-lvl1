import readlineSync from 'readline-sync';

const name = [];

const userName = () => readlineSync.question('May I have your name? ');

const hello = () => {
  console.log('Welcome to the Brain Games!');
  name.push(userName());
  console.log(`Hello, ${name[0]}!`);
};

export default hello;
