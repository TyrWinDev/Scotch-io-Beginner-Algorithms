/* CHALLENGE
Given a two strings, write an algorithm to check if they are anagrams
of each other. Return true if the pass the test and false if they
don't. E.g
    isAnagram('silent', 'listen') // should return true
*/

//Direct Comparison
//We define a function that accepts two parameters. We then go ahead to clen up both strings to ensure that we are comparing only letters and in a common case.
function isAnagram(stringA, stringB) {
  const sanitizeString = function (str) {
    return (
      str
        .toLowerCase()
        //First we convert the entire string to lowercase.
        .replace(/[^a-z\d]/g, "")
        //Next, we use replace() to search through the string using the specified regular expression pattern, and replace every non alphabetical character with an empty string. This leaves only the letters.
        .split("")
        //next we call split() to split the string into an array of characters
        .sort()
        //We use the .sort() method to sort the letters within the array in alphabetical order.
        .join("")
      //And finally we join the now alphabetically ordered array of letters back together to form a string once again.
    );
    return sanitizeString(stringA) == sanitizeString(stringB);
  };
}

//Character Map Comparison
function isAnagram(stringA, stringB) {
  function createCharMap(text) {
    let charMap = {};

    for (let char of text) {
      if (charMap.hasOwnProperty(char)) {
        //We check if the character already exist as a property in the character map charMap using the .hasOwnProperty()
        charMap[char]++;
        //If it does we increment its value
      } else {
        charMap[char] = 1;
        //If it doesn't we add the character as a property and set its value to 1
      }
    }

    return charMap;
    // We return the character map object.
  }

  if (stringA.length === stringB.length) {
    //We first check that the length of both strings are equal.
    let stringAMap = createCharMap(stringA);
    let stringBMap = createCharMap(stringB);

    for (let char in stringAMap) {
      if (stringAMap[char] !== stringBMap[char]) {
        return false;
        //If they arent we return false. And this indicates they cant be anagrams.
      }
    }
    return true;
    //If they are equal we return true, as they are anagrams.
  } else {
    return false;
  }
}

module.exports = isAnagram;
