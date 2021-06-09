/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/

//Using a For-Loop
//We separate the sentence into an array using .split(). We use the variable maxLength to hold the maximum length encountered at each point of iterationn using the for-loop.
function longestWord(text) {
  let wordArray = text.split(" ");
  let maxLength = 0;
  let result = "";

  for (let i = 0; i < wordArray.length; i++) {
    if (wordArray[i].length > maxLength) {
      //We Check for length of wordArray[i] to see if its greater than maxLength
      maxLength = wordWarray[i].length;
      //If it is, we replace maxLength with this new value.
      result = wordArray[i];
      //Now result holds the longest word in the sentence
    }
  }

  return result;
  //The is returned as such.
}

//Using .reduce()
//We call the .reduce() on the array of words in the sentence. This executes our reducer function on every word in the array until the final output is arrived at.

function longestWord(text) {
  let result = text.split(" ").reduce((maxLengthWord, currentWord) => {
    if (currentWord.length > maxLengthWord.length) {
      //We compare the length of the current word under evaluation with the length of our accumulator variable maxLengthWord which is set to an empty string at the start.
      return currentWord;
      //When the length of currentWord is greater, we return the currentWord as the new accumulator.
    } else {
      return maxLengthWord;
      //Otherwise, we return it's original value into the next comparison.
    }
  }, "");
  return result;
}

//Using .sort()
//This method sorts the elements of an array and returns the sorted array. It receives an optional parameter which is a function that specifies the order in which sorting should be carried out.

function longestWord(text) {
  let sortedArray = text
    .split("")
    .sort((wordA, wordB) => wordB.length - wordA.length);
  //We substract the lenth of the second word from that to the first. This gives us a positive, negative or 0. That determines which word is longer and by extension which should come before the other.

  return sortedArray[0];
  //On completion we now have a sortedArray with the words arranged in descending order according to their length.
}

module.exports = longestWord;
