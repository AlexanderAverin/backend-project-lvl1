import readlineSync from 'readline-sync';

export const logic = () => {
  const UserName = readlineSync.question("May I have your name? ");
  const Greeting = "Hello, " + UserName + "!";
  return Greeting;
};
