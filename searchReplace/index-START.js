//Receiving a sentence, a word in the sentence and a replacement for that word as arguments, perform a search and replace on the sentence using the arguments provided and return the new sentence. E.g
// searchReplace("He is Sleeping on the couch", "Sleeping", "sitting")
// // should return "He is Sitting on the couch"

//Using .replace()
function searchReplace(str, word, newWord) {
  if (word[0] === word[0].toUpperCase()) {
    //we use an if statement to check of the first letter of the word word[0] matches the uppercase equivalent word[0].toUpperCase() of the letter
    newWord = newWord[0].toUpperCase() + newWord.slice(1);
    //we convert the first letter of the newWord(replacement) to uppercase and append the rest of the lowercase letters retrieved using the .slice() method.
  }
  return str.replace(word, newWord);
  //This returns a new sentence with the words swapped appropriately. Thus, we return it from our function as the final result.
}

//Using Regular Expressions
function searchReplace(str, word, newWord) {
  let regex = new RegExp(word, "gi");
  if (/[A-Z]/.test(word[0])) {
    newWord = newWord.charAt(0).toUpperCase() + newWord.slice(1);
  }
  return str.replace(regex, newWord);
}
