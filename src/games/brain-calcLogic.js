import CreateGame from '../index.js';

const GiveRandomExp = (FirstNum, SecondNum) => {
  const operations = [['+', FirstNum + SecondNum], ['-', FirstNum - SecondNum], ['*', FirstNum * SecondNum]];
  const element = operations[Math.floor(Math.random() * 3)];
  return [`${FirstNum} ${element[0]} ${SecondNum}`, element[1]];
};

const CreateBrainCalc = () => {
  const rules = 'What is the result of the expression?';
  const questions = [];
  const correctRepls = [];

  let i = 0;
  let Expression = null;

  while (i < 3) {
    Expression = GiveRandomExp(Math.floor(Math.random() * 100), Math.floor(Math.random() * 100));
    questions.push(Expression[0]);
    correctRepls.push(String(Expression[1]));
    i += 1;
  }
  return CreateGame(questions, correctRepls, rules);
};

export default CreateBrainCalc;
