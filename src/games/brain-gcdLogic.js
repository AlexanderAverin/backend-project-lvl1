import CreateGame from '../index.js';

const GiveRandomNumber = (limit) => Math.floor(Math.random() * limit);

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
  const QuestionsWithRepls = [];

  let i = 0;

  while (i < 3) {
    const [Number1, Number2] = [GiveRandomNumber(100), GiveRandomNumber(100)];
    QuestionsWithRepls.push([`${Number1} ${Number2}`]);
    QuestionsWithRepls[i].push(String(getBiggerDivisor(Number1, Number2)));

    i += 1;
  }
  return CreateGame(QuestionsWithRepls, BrainGcdRules);
};

export default CreateBrainGcd;
