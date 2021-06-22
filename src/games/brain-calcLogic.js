import gameGenerator from '../index.js';

const BrainCalc = () => {
  const rules = 'What is the result of the expression?';

  const Operations = ['+', '-', '*'];
  const questions = [];
  const correctRepls = [];

  let i = 0;
  let FirstNum = null;
  let SecondNum = null;
  let Operation = null;

  while (i < 3) {
    FirstNum = Math.floor(Math.random() * 100);
    SecondNum = Math.floor(Math.random() * 100);
    Operation = Operations[Math.floor(Math.random() * 3)];

    if (Operation === '+') {
      questions.push(`${FirstNum} + ${SecondNum}`);
      correctRepls.push(String(FirstNum + SecondNum));
    }
    if (Operation === '-') {
      questions.push(`${FirstNum} - ${SecondNum}`);
      correctRepls.push(String(FirstNum - SecondNum));
    }
    if (Operation === '*') {
      questions.push(`${FirstNum} * ${SecondNum}`);
      correctRepls.push(String(FirstNum * SecondNum));
    }
    i += 1;
  }
  return gameGenerator(questions, correctRepls, rules);
};

export default BrainCalc;
