import CreateGame from '../index.js';

const CreateBrainEven = () => {
  const BrainEvenRules = 'Answer "yes" if the number is even, otherwise answer "no".';


  const EvenQuestions = [];

  let i = 0;

  while (i < 3) {
    EvenQuestions.push([Math.floor(Math.random() * 100)]);
    if (EvenQuestions[i] % 2 === 0) {
      EvenQuestions[i].push('yes');
    } else {
      EvenQuestions[i].push('no');
    }
    i += 1;
  }
  return CreateGame(EvenQuestions, BrainEvenRules);
};

export default CreateBrainEven;
