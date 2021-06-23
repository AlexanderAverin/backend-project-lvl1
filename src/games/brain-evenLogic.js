import CreateGame from '../index.js';

const CreateBrainEven = () => {
  const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
  const questions = [];
  const correctRepls = [];

  let i = 0;

  while (i < 3) {
    questions.push(Math.floor(Math.random() * 100));
    if (questions[questions.length - 1] % 2 === 0) {
      correctRepls.push('yes');
    } else {
      correctRepls.push('no');
    }
    i += 1;
  }
  return CreateGame(questions, correctRepls, rules);
};

export default CreateBrainEven;
