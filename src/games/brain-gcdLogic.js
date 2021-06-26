import CreateGame from '../index.js';
import GiveRandomNumber from '../math.js';

const getBiggerDivisor = (num1, num2) => {
  const iter = (counter) => {
    if (num1 % counter === 0 && num2 % counter === 0) {
      return counter;
    }
    return iter(counter - 1);
  };
  return iter(Math.max(num1, num2));
};

const CreateBrainGcd = () => {
  const BrainGcdRules = 'Find the greatest common divisor of given numbers.';
  const GcdQuestions = [];

  let i = 0;

  while (i < 3) {
    const [Number1, Number2] = [GiveRandomNumber(1, 100), GiveRandomNumber(1, 100)];
    GcdQuestions.push([`${Number1} ${Number2}`]);
    GcdQuestions[i].push(String(getBiggerDivisor(Number1, Number2)));

    i += 1;
  }
  return CreateGame(GcdQuestions, BrainGcdRules);
};

export default CreateBrainGcd;
