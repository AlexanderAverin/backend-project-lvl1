import readlineSync from 'readline-sync';

const logic = () => {
  const UserName = readlineSync.question(`May I have your name? ${''}`);
  const Greeting = `Hello, ${UserName}!`;
  return Greeting;
};

export default logic;
