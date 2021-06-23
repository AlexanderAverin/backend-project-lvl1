import readlineSync from 'readline-sync';

const isCorrectRepl = (que, correct) => que === correct;

const CreateGame = (questions, correctRepls, rules) => {
  // Greeting

  console.log('Welcome to the Brain Games!');
  const UserName = readlineSync.question(`May I have your name? ${''}`);
  console.log(`Hello, ${UserName}!`);

  // Core

  let i = 0;

  console.log(rules);

  while (i < 3) {
    console.log(`Question: ${questions[i]}`);
    const UserRespone = readlineSync.question('Your answer: ');
    if (isCorrectRepl(correctRepls[i], UserRespone)) {
      console.log('Correct!');
    }
    if (!isCorrectRepl(correctRepls[i], UserRespone)) {
      console.log(`'${UserRespone}' is wrong answer ;(. Correct answer was '${correctRepls[i]}'.`);
      return `Let's try again, ${UserName}!`;
    }
    i += 1;
  }
  return `Congratulations, ${UserName}!`;
};

export default CreateGame;
