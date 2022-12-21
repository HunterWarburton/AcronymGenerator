// Install the library
npm install random-words

// Import the library
var randomWords = require('random-words');

// Function to generate a random word
function generateRandomWord() {
  // Generate and return a random word
  return randomWords();
}

// Function to create an acronym from an input word
function createAcronym(word) {
  // Split the word into an array of individual letters
  var letters = word.split('');
  
  // Create an empty acronym string
  var acronym = '';
  
  // Loop through the letters array
  for (var i = 0; i < letters.length; i++) {
    // If the current letter is uppercase, add it to the acronym
    if (letters[i] === letters[i].toUpperCase()) {
      acronym += letters[i];
    }
  }
  
  // Return the acronym
  return acronym;
}

// Function to generate a random initialism for an acronym
function generateRandomInitialism(acronym) {
  // Split the acronym into an array of individual letters
  var letters = acronym.split('');
  
  // Create an empty initialism string
  var initialism = '';
  
  // Loop through the letters array
  for (var i = 0; i < letters.length; i++) {
    // Generate a random word
    var randomWord = generateRandomWord();
    
    // Add the word to the initialism string
    initialism += randomWord + ' ';
  }
  
  // Return the initialism string
  return initialism;
}

// Test the program
var inputWord = 'JavaScript';
var acronym = createAcronym(inputWord);
console.log(acronym); // Output: JS
console.log(generateRandomInitialism(acronym)); // Output: a random initialism for the acronym
