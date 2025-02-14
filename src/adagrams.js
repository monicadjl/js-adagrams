const letterPool = {
    'A': 9, 
    'B': 2, 
    'C': 2, 
    'D': 4, 
    'E': 12, 
    'F': 2, 
    'G': 3, 
    'H': 2, 
    'I': 9, 
    'J': 1, 
    'K': 1, 
    'L': 4, 
    'M': 2, 
    'N': 6, 
    'O': 8, 
    'P': 2, 
    'Q': 1, 
    'R': 6, 
    'S': 4, 
    'T': 6, 
    'U': 4, 
    'V': 2, 
    'W': 2, 
    'X': 1, 
    'Y': 2, 
    'Z': 1
};

const pointsDict = {
  'A': 1, 
  'B': 3, 
  'C': 3, 
  'D': 2, 
  'E': 1, 
  'F': 4, 
  'G': 2, 
  'H': 4, 
  'I': 1, 
  'J': 8, 
  'K': 5, 
  'L': 1, 
  'M': 3, 
  'N': 1, 
  'O': 1, 
  'P': 3, 
  'Q': 10, 
  'R': 1, 
  'S': 1, 
  'T': 1, 
  'U': 1, 
  'V': 4, 
  'W': 4, 
  'X': 8, 
  'Y': 4, 
  'Z': 10 }

export const drawLetters = () => {
  // Implement this method for wave 1
  //usedLetters = {};
  const lettersHand = [];
  const possibleLetters = [];

  for (let [key, value] of Object.entries(letterPool)) {
    for (let i = 0; i < value; i++) {
      possibleLetters.push(key);
    }
  }

  while (lettersHand.length <= 9) {
    const randomInt = Math.floor(Math.random() * possibleLetters.length);
    const chosenLetter = possibleLetters[randomInt];
    lettersHand.push(chosenLetter);
    possibleLetters.splice(randomInt, 1);
  }
  return lettersHand;
  
};

export const usesAvailableLetters = (word, lettersInHand) => {
  // Implement this method for wave 2
    const upperWord = word.toUpperCase();
    const lettersInHandCopy = [...lettersInHand];
  
    for (const character of upperWord) {
      if (!lettersInHandCopy.includes(character)) {
        return false;
      } else {
        const index = lettersInHandCopy.indexOf(character);
        lettersInHandCopy.splice(index, 1);
      }
    }
  
    return true;
  }

export const scoreWord = (word) => {
  // Implement this method for wave 3
  if (word.length === 0) {
    return 0;
  };
  
  const upperWord = word.toUpperCase();
  let totalPoints = 0;

  for (const character of upperWord) {
    totalPoints += pointsDict[character] || 0;
  }

  if (upperWord.length >= 7) {
    totalPoints += 8;
  }

  return totalPoints;
}


export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
