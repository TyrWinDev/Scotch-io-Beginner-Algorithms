/* CHALLENGE
Given a sentence containing two or more words, 
return the equivalent of the sentence when capitalised. E.g
  capSentence('the tales of scotch!') // would return 'The Tales Of Scotch!' 
*/

//Using .forEach() Method
// This method in JS runs a provided function on each element within an array.
function capSentence(text) {
  let wordsArray = text.toLowerCase().split(" ");
  //We use toLowercase() to convert the entire sentence in lowercase. We chain it with .split() to divide the lowercase sentence into an array of words.
  let capsArray = [];
  //The array is stored is capsArray.

  wordsArray.forEach((word) => {
    capsArray.push(word[0].toUpperCase() + word.slice(1));
    //We iterate through every word in the array, and we take the first letter with slice(1) and turn it to uppercase with toUpperCase().
  });

  return capsArray.join(" ");
  //We combine the transformed first letter (New string from slice()) and the sliced lowercase section with the method join() and push it into our capsArray.
}

//Using .map() and .slice()
//The map method is used to create a new array with the results gotten from calling a provided function on every element in the array on which it is called.

function capSentence(text) {
  let wordsArray = text.toLowerCase().split(" ");
  let capsArray = wordsArray.map((word) => {
    //We use .map() function to loop through every word in the array and execute the same function as before to create capsArray.
    return word[o].toUpperCase() + word.slice(1);
  });

  return capsArray.join(" ");
}

//Using .map() and .replace()
// .replace() is used to create a new string with some or all matches of a pattern, replaced by a replacement. The patter and replacemnete are passed in as arguments when this method is called.

function capsSentence(text) {
  let wordsArray = text.toLowerCase().split(" ");

  let capsArray = wordsArray.map((word) => {
    return word.replace(word[0], word[0].toUppercase());
    //We replace the first letter of each word (word[0]) with an uppercase version of the same letter using word.[0].toUppercase as the second parameter of the .replace() method.
  });

  return capsArray.join(" ");
}

module.exports = capSentence;
