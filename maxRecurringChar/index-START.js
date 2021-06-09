/* CHALLENGE
Given a string of text, find and return the most recurring character. 
e.g maxRecurringChar('aabacada') // will return 'a'
*/

function maxRecurringChar(text) {
  //For in Iteration
  let charMap = {};
  let maxCharValue = 0; //Used to store the maximum value yet encountered at the oint of every iteration with the for...in loop
  let maxChar = ""; //is used to store th character with the hihest value on every iteration.

  for (let char of text) {
    if (charMap.hasOwnProperty(char)) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }

  for (let char in charMap) {
    if (charMap[char] > maxCharValue) {
      //We check if the character being evaluated has a greater value than our maxCharValue.
      maxCharValue = charMap[char];
      //If its greater, it becomes the new maxCharValue
      maxChar = char;
      //The character is then stored in maxChar, if not we move one to the next one.
    }
  }

  return maxChar;
  //We return maxChar which now holds the character with the highest value, thus the most recurring.
}

function maxRecurringChar(text) {
  let charMap = {}; 
  let charArray = []; 
  let valuesArray = []; 
  let maxCharValue = 0;

  for (let char of text) {
    if (charMap.hasOwnProperty(char)) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }

  charArray = Object.keys(charMap); -> Example ['a','e','i','o','u'] //Array of all chracters in the map
  valuesArray = Object.values(charMap); -> Example [4,3,2,1]  //Array of values (ocurrences) arranged in the corresponding order
  maxCharValue = Math.max(...valuesArray); //

  return charArray[valuesArray.indexOf(maxCharValue)];
  //We use the indexOf() method to search the valuesArray for the position of the maxCharValue. The position of the maxCharValue in valuesArray corresponds to the position of the chracter in the charArray with that number of ocurrences. 
}

module.exports = maxRecurringChar;
