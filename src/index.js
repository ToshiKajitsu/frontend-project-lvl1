import readlineSync from 'readline-sync';

//  Block questions and user name
const name = [];
const userName = () => readlineSync.question('May I have your name? ');
const hello = () => {
  console.log('Welcome to the Brain Games!');
  name.push(userName());
  console.log(`Hello, ${name[0]}!`);
};

//  Block random numbers and operators
const operators = ['+', '-', '*'];
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const getRandomOperator = (arr) => {
  const randomIndex = getRandomNumber(0, arr.length - 1);
  return arr[randomIndex];
};
const isNotEven = (number) => number % 2 !== 0;
const checkNumber = (answer, even) => {
  if ((answer === 'yes' && even) || (answer === 'no' && isNotEven)) return true;
  return false;
};

export {
  name,
  hello,
  operators,
  getRandomOperator,
  getRandomNumber,
  checkNumber,
  isNotEven,
};
