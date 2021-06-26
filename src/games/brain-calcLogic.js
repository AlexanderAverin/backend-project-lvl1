import CreateGame from '../index.js';

const GiveRandomNumber = () => Math.floor(Math.random() * 100);

const GiveRandomExp = () => {
  const num1 = GiveRandomNumber();
  const num2 = GiveRandomNumber();
  const Operations = [['+', num1 + num2], ['-', num1 - num2], ['*', num1 * num2]];

  const [SymbolOfOperation, Result] = Operations[Math.floor(Math.random() * 3)];

  return [`${num1} ${SymbolOfOperation} ${num2}`, `${Result}`];
};

const CreateBrainCalc = () => {
  const BrainCalcRules = 'What is the result of the expression?';
  const CalcQuestions = [];

  let i = 0;

  while (i < 3) {
    const [Expression, ResultOfExpression] = GiveRandomExp();
    CalcQuestions.push([Expression, ResultOfExpression]);
    i += 1;
  }
  return CreateGame(CalcQuestions, BrainCalcRules);
};

export default CreateBrainCalc;
