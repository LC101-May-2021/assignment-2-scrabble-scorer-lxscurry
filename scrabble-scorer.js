// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

//let userWord = "";

function initialPrompt() {
   let userWord = input.question("Let's play some scrabble! \n \nEnter a word: ")
   return userWord;
   }

let userWord = initialPrompt();
//console.log(userWord);

function oldScrabbleScorer(userWord) {
	userWord = userWord.toUpperCase();
	let letterPoints = "";
  
	for (let i = 0; i < userWord.length; i++) {
 
    for (const pointValue in oldPointStructure ){
  
      if (oldPointStructure[pointValue].includes(userWord[i])) {
			letterPoints += `Points for '${userWord[i]}': ${pointValue}\n`
		 }
 
	  }
	}
//return console.log(letterPoints);
 }
//let output = oldScrabbleScorer(word);
//console.log(letterPoints);

 
 
 function simpleScore(userWord) {
   userWord = userWord.toUpperCase();
  let simpleOutput = userWord.length;
  return simpleOutput;
}
//let onePt = simpleScore(userWord);
//console.log (onePt); 

function vowelBonusScore(userWord) {
  userWord = userWord.toUpperCase();
  letterPoints = 0;
 let vowelBonusPoints = ["A", "E", "I", "O","U"];
  
  for (let i=0; i < userWord.length; i++) {
    
    if (vowelBonusPoints.includes(userWord[i])) {
      letterPoints += 3
      } else { 
      letterPoints += 1;
      }
}
  return letterPoints;
}

//return a cumulative score for the whole word entered.
function scrabbleScore(userWord){
  userWord = userWord.toLowerCase()
  letterPoints = 0
  for(let i = 0; i<userWord.length; i++){
    letterPoints += newPointStructure[userWord[i]]
  }
  return letterPoints
};
//return console.log(letterPoints);

//let blue = vowelBonusScore(userWord);
//console.log(blue);

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //
//let scrabbleScore;

let simpleScoreObj = {
  name: 'Simple Score',
  description: 'Each letter is worth 1 point',
  scoringFunction: simpleScore
};

let vowelBonusScoreObj = {
  name: 'Bonus Vowels',
  description: 'Vowels are 3 points and consonants are 1 point',
  scoringFunction: vowelBonusScore
};

let scrabbleScorerObj = {
  name: 'Scrabble',
  description: 'The traditional scoring algorithm',
  scoringFunction: scrabbleScore
}

const scoringAlgorithms = [simpleScoreObj, vowelBonusScoreObj, scrabbleScorerObj]

function scorerPrompt() {
  console.log("Which scoring algorithm would you like to use?\n\n");
  for(let i = 0; i<scoringAlgorithms.length; i++){
    console.log(`${i} – ${scoringAlgorithms[i].name}: ${scoringAlgorithms[i].description}`)
  }
  scorerPromptToSave = input.question("Enter 0, 1, or 2: ");
  scorerPromptToSave = Number(scorerPromptToSave)
    if (scorerPromptToSave === 0 || scorerPromptToSave === 1|| scorerPromptToSave === 2) {
  console.log (`Score for '${userWord}': ${scoringAlgorithms[scorerPromptToSave].scoringFunction(userWord)}`)
    }
    else {console.log("Please enter the number 0,1, or 2 to select a scoring algorithm. ");
    scorerPrompt();
    };
}

function transform(pointStructure) {
  let newPointStruct = {};
  for (key in pointStructure) {
    for (let i = 0; i < pointStructure[key].length; i++){
      let letterItem = pointStructure[key][i];
      letterItem = letterItem.toLowerCase();
      newPointStruct[`${letterItem}`] = Number(key);
    };
  };
  return newPointStruct;
};

let newPointStructure = transform(oldPointStructure);
newPointStructure[" "] = 0;
//console.log(newPointStructure);






//let trial = scrabbleScore(userWord);
//console.log(trial);



function runProgram() {
//initialPrompt();
scorerPrompt();
}




// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};