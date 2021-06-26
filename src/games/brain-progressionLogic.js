import CreateGame from '../index.js';
import GiveRandomNumber from '../math.js';

const GiveCorrectNumber = () => {
  let Num1 = null;
  let Num2 = null;
  let check = null;
  while (check !== true) {
    Num1 = GiveRandomNumber(5, 10);
    Num2 = GiveRandomNumber(5, 10);
    if (Num1 > Num2) {
      check = true;
    }
  }
  return [Num1, Num2];
};

const GiveProgression = () => {
  const ProgressionArray = [];
  const [progressionLength, HideElementIndex] = GiveCorrectNumber();
  const Step = GiveRandomNumber(1, 10);
  let number = GiveRandomNumber(1, 50);
  let result = null;
  while (ProgressionArray.length < progressionLength) {
    if (ProgressionArray.length === HideElementIndex) {
      ProgressionArray.push('.. ');
      result = `${number}`;
      number += Step;
    }
    ProgressionArray.push(`${number}`);
    number += Step;
  }
  return [ProgressionArray.join(' '), result];
};

const BrainProgression = () => {
  const BrainProgressionRules = 'What number is missing in the progression?';
  const ProgressionQuestions = [];

  let i = 0;
  while (i < 3) {
    const [progression, HideElement] = GiveProgression();
    ProgressionQuestions.push([progression, HideElement]);

    i += 1;
  }
  return CreateGame(ProgressionQuestions, BrainProgressionRules);
};
export default BrainProgression;
