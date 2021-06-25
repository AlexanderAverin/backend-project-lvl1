import readlineSync from 'readline-sync';

const isCorrectRepl = (Question, CorrectRepl) => Question === CorrectRepl;

const CreateGame = (QuestionsWithRepls, rules) => {
  // Greeting

  console.log('Welcome to the Brain Games!');
  const UserName = readlineSync.question(`May I have your name? ${''}`);
  console.log(`Hello, ${UserName}!`);

  // Core

  let i = 0;

  console.log(rules);

  while (i < 3) {
    const [Question, CorrectRepl] = QuestionsWithRepls[i];
    console.log(`Question: ${Question}`);
    const UserRespone = readlineSync.question('Your answer: ');
    if (isCorrectRepl(CorrectRepl, UserRespone)) {
      console.log('Correct!');
    }
    if (!isCorrectRepl(CorrectRepl, UserRespone)) {
      console.log(`'${UserRespone}' is wrong answer ;(. Correct answer was '${CorrectRepl}'.`);
      return `Let's try again, ${UserName}!`;
    }
    i += 1;
  }
  return `Congratulations, ${UserName}!`;
};

export default CreateGame;
