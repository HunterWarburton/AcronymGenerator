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

// Function to create a random acronym string
function generateRandomAcronym() {
  // Generate a random word
  var randomWord = generateRandomWord();
  
  // Create an acronym from the random word
  var acronym = createAcronym(randomWord);
  
  // Return the acronym string
  return acronym;
}

// Test the function
console.log(generateRandomAcronym()); // Output: a random acronym string
