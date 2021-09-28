const readlineSync = require('readline-sync');
const chalk = require('chalk');
console.log(chalk.hex('#FF0088')("Let's see how well do you know YASH 😉 \n"));

var userName = readlineSync.question(chalk.blue("Please enter your name:\n"));
console.log(chalk.hex('#6366F1')("\nHi & Welcome " + userName + "👀"));


console.log(chalk.white.bold.bgBlack("\nRemember: for each correct answer you will be given 1 point\n"));
console.log(chalk.black.bold.bgWhite("Note:please Enter a/ b/ c as answers for each question\n"));
var score = 0;



function play(ques, ans) {
  var userAns = readlineSync.question(ques);
  if (userAns.toUpperCase() === ans.toUpperCase()) {
    console.log(chalk.green.bold(userName + " Congo you are right!"));
    score++;
  }
  else {
    console.log(chalk.red.bold("You have chosen the wrong answer!"));
  }
  console.log("Your current score: ", score);
  console.log("\n----------------------\n")
}

var quiz = [{ question: "1. Where does YASH belongs to?\nA.Pune\nB.Bangalore\nC.Ajmer\nD.Jaipur\n", answer: "c" },
{ question: "2. When is my Birthday ? \nA.29 March\nB.15 January\nC.09 September\nD.10 January\n", answer: "c" },
{ question: "3. What is my age? \nA.21\nB.25\nC.23\nD.26\n", answer: "C" },
{ question: "4. What is my professional degree?\nA.MBBS\nB.M.Com\nC.B.tech\nD.B.E.\n", answer: "D" },
{ question: "5. When is my Engineering branch?\nA.CSE\nB.ECE\nC.EEE\nD.ME\n", answer: "b" },
{ question: "6. Where do I Live?\nA.Pune\nB.Bangalore\nC.Ajmer\nD.Jaipur\n", answer: "D" },
{ question: "7. What do i love?\nA.Job\nB.Gym\nC.Entrepreneurship\nD.Programming\n", answer: "d" },
{ question: "8. Where do I work?\nA.Cognizant\nB.Microsoft\nC.Google\nD.Apple\n", answer: "a" },
{ question: "9. Who is my spirit animal?\nA.Harvey Spectre\nB.Jhonny Bravo\nC.Master Shifu\nD.Chalizard\n", answer: "a" },
{ question: "10.Who is my favourite Superhero?\nA.Superman\nB.Captain America\nC.Black Panther\nD.IronMan\n", answer: "D" }]

for (var i = 0; i < quiz.length; i++) {
  var currentQuestion = quiz[i];
  play(currentQuestion.question, currentQuestion.answer);
}
var highScore = [{ name: "Yash", topScore: "10" },];

console.log(chalk.keyword('yellow').bold("YOUR FINAL SCORE IS : " + score));

console.log(chalk.keyword('orange').bold("\n***** Check out Scoreboard *****"));

printScoreBoard(highScore);

var scoreBeaten=false;
var indexInsert=0;
for(var i=0; i<highScore.length; i++){
  if(score>=highScore[i].topScore){
    scoreBeaten=true;
    indexInsert=i;
    highScore.splice(indexInsert, 0, {name:`${userName}`, topScore:`${score}`});
    break;
  }
}

console.log('---------------------------------')

if(scoreBeaten){
  console.log(chalk.white.bold.bgBlack("Congratulations "+userName+" , you have beaten the SCORE-BOARD. You are my best friend ❤️"));

  console.log(chalk.keyword('pink').bold("\n***** U P D A T E D    S C O R E B O A R D *****"));
  printScoreBoard(highScore);
  console.log("\nSend me the screenshot of your final score so that I can update the actual scoreboard \n\n\n\n");
}

else{
  console.log(chalk.bold.hex('#BBBBB')("Sorry "+userName+", you were so close to be my best friend 🙃"));
}

function printScoreBoard(highScore){
  for(let i=0; i<highScore.length; i++){
    console.log(chalk.magentaBright.bold(highScore[i].name+" : " +highScore[i].topScore));
  }
}
