/* CHALLENGE
Given a string of text, return the number of vowels found within the text
e.g vowelsCounter('anehizxcv') // will return 3
*/

// An Iterative Approach
// We loop through each letter of the string passed and then check to see if they match any of the english vowels.

const vowels = ["a", "e", "i", "o", "u"];
//We declare a costant "vowels" which contains an array of the five English vowels.

function vowelsCounter(text) {
  let counter = 0;
  //Initialize the counter at 0

  for (let letter of text.toLowerCase()) {
    //Loop through text to test if each character
    if (vowels.includes(letter)) {
      //Checks if those charactgers include a vowel
      counter++;
      //If a vowel is found, then count +1
    }
  }

  return counter;
  //Return the number of total vowels in the text, and terminate the iteration.
}

//Using Regular Expressions
// Regular expressions help us find patterns of character combination within strings.

function vowelsCounter(text) {
  let matchingInstances = text.match(/[aeiou]/gi);
  // Search text with RegEx and store all matching instances

  if (matchingInstances) {
    //Check if matching instances exist
    return matchingInstances.length;
    //Then Calculate and return the the number of vowels.
  } else {
    return 0;
    //If none, return 0.
  }
}

module.exports = vowelsCounter;
