import CreateGame from '../index.js';
import GiveRandomNumber from '../math.js';

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
  const PrimeQuestions = [];

  let i = 0;
  let RandomNumber = null;

  while (i < 3) {
    RandomNumber = GiveRandomNumber(3, 20);
    const [Question, CorrectRepl] = [RandomNumber, `${isPrime(RandomNumber)}`];
    PrimeQuestions.push([Question, CorrectRepl]);

    i += 1;
  }
  return CreateGame(PrimeQuestions, BrainPrimeRules);
};

export default BrainPrime;
