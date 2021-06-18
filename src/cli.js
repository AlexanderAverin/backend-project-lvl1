import readlineSync from 'readline-sync';

const logic = () => {
  console.log('Welcome to the Brain Games!');
  const UserName = readlineSync.question(`May I have your name? ${''}`);
  const Greeting = `Hello, ${UserName}!`;
  return Greeting;
};

export default logic;
