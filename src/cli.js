import readlineSync from 'readline-sync';

const BrainGames = () => {
  console.log('Welcome to the Brain Games!');
  const UserName = readlineSync.question(`May I have your name? ${''}`);
  const Greeting = `Hello, ${UserName}!`;
  return Greeting;
};

export default BrainGames;
