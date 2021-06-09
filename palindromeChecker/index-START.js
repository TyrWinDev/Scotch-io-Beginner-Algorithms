/* CHALLENGE
Given a string of text, return true or false indicating whether or not the text is a palindrome.
e.g palindromeChecker('racecar') // will return true
*/

// An Intuitive Approach
function palindromeChecker(text) {
  let reversedText = text.toLowerCase().split("").reverse().join("");
  //We convert all letters to lowercase, then use .split() method on the string that is received passing in an empty string as the only argument in order to spread the characters into an array.
  //Then we use .reverse() on the array to re-irder uts elements in reverse.
  // After that, we call .join() on the reversed array to form a string once again.

  return text === reversedText;
  //We compare the result which is a Boolean indicating whether the string that passed in equals the reversed string we created. Inidicating if its a palindrome or not.
}

//Looping through and Comparing Characters
//We loop through the string as it was passed in and compare each chracter with the character currently in the position it'd taken if the string was reversed.

function palindromeChecker(text) {
  let charArray = text.toLowerCase().split("");
  //We convert all letters to lowercase, and spread the characthers  of the string into an array with .split('')

  let result = charArray.every((letter, index) => {
    //We use the .every() method to loop through the array and perform our check. The method tests whether all elements in the array pass the test implemented by the provided function.
    //In our case accepts the current letter and its index in the array parameters.

    return letter === charArray[charArray.length - index - 1];
    // We then return the result of the comparison between the letter and the letter currently occupying the position this letter would asume if the string was reversed.
  });

  return result;
  //The result of the evaluation is stored in the result variable, which i sthen return by our function, indicating if it passed or failed the palindrome check.
}

//Loopin through and Comparing Characters (Optimized)

function palindromeChecker(text) {
  var textLen = text.length;
  for (var i = 0; i < textLen / 2; i++) {
    if (text[i] !== text[textLen - 1 - i]) {
      return false;
    }
  }
  return true;
}

module.exports = palindromeChecker;
