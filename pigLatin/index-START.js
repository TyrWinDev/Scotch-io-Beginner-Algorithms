// Translate the provided string to Pig Latin by following the rules below:

// For words that begin with consonant sounds, the consonant before the initial vowel should be moved to the end of the word sequence and "ay" affixed. E.g
// "pig" = "igpay"
// For words that begin with consonant clusters, the clusters should be moved to the end of the word sequence and "ay" affixed. E.g
// "glove" = "oveglay"
// For words that begin with vowel sounds, simply add "way" to the end of the word. E.g
// "explain" = "explainway”

//An Imperative Approach
//We specify how things are done until we arrive at the final result. We make use of the for...of loop in iterating through the string in order to determine where the first vowel in the word occurs.

function pigLatin(str) {
  // Convert string to lowercase
  str = str.toLowerCase();
  // Initialize array of vowels
  const vowels = ["a", "e", "i", "o", "u"];
  // Initialize vowel index to 0
  let vowelIndex = 0;

  if (vowels.includes(str[0])) {
    // If first letter is a vowel
    return str + "way";
  } else {
    // If the first letter isn't a vowel i.e is a consonant
    for (let char of str) {
      // Loop through until the first vowel is found
      if (vowels.includes(char)) {
        // Store the index at which the first vowel exists
        vowelIndex = str.indexOf(char);
        break;
      }
    }
    // Compose final string
    return str.slice(vowelIndex) + str.slice(0, vowelIndex) + "ay";
  }
}

//A Declarative Approach
//we implement a very concise solution to this challenge by combining the .replace() method and regular expressions to transform the received string into its Pig Latin equivalent.

function pigLatin(str) {
  return (
    str
      .replace(/^([aeiouy])(._)/, "$1$2way")
      //This statement specifies a replacement to be carried out if the word begins with a vowel. This is specified in the first bracket within the_ *.replace()* method call i.e *([aeiou])*. The second bracket *(.*)* refers to every other character after the vowel.
      .replace(/^(_[_^aeiouy]+)(._)/, "$2$1ay")
    // This statement specifies that if the word does not start with a vowel i.e ^([aeiouy]+), and is followed by anything else (``*.*)*, it should be replaced with a string formatted in the order '$2$1ay``'. The plus sign in ^([aeiouy]+) caters for a situation where there is a consonant cluster. Thus it represents every non-vowel character at the start of the word. '$2$1ay' generates the new string in the order of remaining characters + consonant cluster + '``ay``'.
  );
}
