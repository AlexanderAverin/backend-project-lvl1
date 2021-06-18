import readlineSync from 'readline-sync';

const evenLogic = () => {
  const UserName = readlineSync.question(`May I have your name? ${''}`);
  const Greeting = `Hello, ${UserName}!`;
  console.log(Greeting);

  const Numbers = [15, 6, 7];
  const repls = ['no', 'yes', 'no'];

  let i = 0;
  let UserRespone = null;

  while (i <= Numbers.length - 1) {
    console.log(`Question: ${Numbers[i]}`);
    UserRespone = readlineSync.question('Your answer: ');
    if (UserRespone === repls[i]) {
      console.log('Correct!');
    } else if (UserRespone !== repls[i]) {
      console.log(`'${UserRespone}' is wrong answer ;(. Correct answer was '${repls[i]}'.`);
      return `Let's try again, ${UserName}`;
    }
    i += 1;
  }
  return `Congratulations, ${UserName}`;
};

export default evenLogic;
