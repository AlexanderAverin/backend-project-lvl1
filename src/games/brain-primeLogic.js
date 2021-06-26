import CreateGame from '../index.js';

const GiveRandomNumber = (min, max) => {
  const Min = Math.ceil(min);
  const Max = Math.floor(max);
  return Math.floor(Math.random() * (Max - Min + 1)) + Min;
};

const isPrime = (num) => {
  let counter = 2;
  while (counter < num) {
    if (num % counter === 0) {
      return 'no';
    }
    counter += 1;
  }
  return 'yes';
};

const BrainPrime = () => {
  const BrainPrimeRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const QuestionsWithRepls = [];

  let i = 0;
  let RandomNumber = null;

  while (i < 3) {
    RandomNumber = GiveRandomNumber(3, 20);
    const [Question, CorrectRepl] = [RandomNumber, `${isPrime(RandomNumber)}`];
    QuestionsWithRepls.push([Question, CorrectRepl]);

    i += 1;
  }
  return CreateGame(QuestionsWithRepls, BrainPrimeRules);
};

export default BrainPrime;
