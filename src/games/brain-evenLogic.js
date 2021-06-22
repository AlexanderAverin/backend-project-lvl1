import gameGenerator from '../index.js';

const BrainEven = () => {
  const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

  const questions = [];
  const correctRepls = [];

  let num = null;
  let i = 0;

  while (i < 3) {
    num = Math.floor(Math.random() * 100);
    questions.push(num);
    if (num % 2 === 0) {
      correctRepls.push('yes');
    }
    if (num % 2 !== 0) {
      correctRepls.push('no');
    }
    i += 1;
  }
  return gameGenerator(questions, correctRepls, rules);
};

export default BrainEven;
