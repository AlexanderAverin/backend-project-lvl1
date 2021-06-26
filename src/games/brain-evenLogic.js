import CreateGame from '../index.js';

const CreateBrainEven = () => {
  const BrainEvenRules = 'Answer "yes" if the number is even, otherwise answer "no".';
  const QuestionsWithRepls = [];

  let i = 0;

  while (i < 3) {
    QuestionsWithRepls.push([Math.floor(Math.random() * 100)]);
    if (QuestionsWithRepls[i] % 2 === 0) {
      QuestionsWithRepls[i].push('yes');
    } else {
      QuestionsWithRepls[i].push('no');
    }
    i += 1;
  }
  return CreateGame(QuestionsWithRepls, BrainEvenRules);
};

export default CreateBrainEven;
