import CreateGame from '../index.js';

const GiveRandomExp = (FirstNum, SecondNum) => {
  const Operations = [['+', FirstNum + SecondNum], ['-', FirstNum - SecondNum], ['*', FirstNum * SecondNum]];
  const RandomOperation = Operations[Math.floor(Math.random() * 3)];
  return [`${FirstNum} ${RandomOperation[0]} ${SecondNum}`, RandomOperation[1]];
};

const CreateBrainCalc = () => {
  const rules = 'What is the result of the expression?';
  const Questions = [];
  const CorrectRepls = [];

  let i = 0;
  let Expression = null;

  while (i < 3) {
    Expression = GiveRandomExp(Math.floor(Math.random() * 100), Math.floor(Math.random() * 100));
    Questions.push(Expression[0]);
    CorrectRepls.push(String(Expression[1]));
    i += 1;
  }
  return CreateGame(Questions, CorrectRepls, rules);
};

export default CreateBrainCalc;
