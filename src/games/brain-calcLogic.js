import gameGenerator from '../index.js';

const BrainCalc = () => {
  const rules = 'What is the result of the expression?';
  const questions = [];
  const correctRepls = [];

  let i = 0;
  let FirstNum = null;
  let SecondNum = null;
  let Operation = null;

  while (i < 3) {
    FirstNum = Math.floor(Math.random() * 100);
    SecondNum = Math.floor(Math.random() * 100);
    const Operations = [['+', FirstNum + SecondNum], ['-', FirstNum - SecondNum], ['*', FirstNum * SecondNum]];
    Operation = Operations[Math.floor(Math.random() * 3)];
    questions.push(`${FirstNum} ${Operation[0]} ${SecondNum}`);
    correctRepls.push(String(Operation[1]));
    i += 1;
  }
  return gameGenerator(questions, correctRepls, rules);
};

export default BrainCalc;
