/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/

//Chain-in Methods

// In the code snippet below we use these methods to create a one-line solution by chaining them in succession to split the received text into an array of characters, reverse the order of array’s elements and join the elements of the reversed array to produce the reversed text.

function reverseString(text) {
  // -The split() method splits the string into an array of characters.
  // -The reverse() method reverses the order of the elements in an array.
  // -The join() method combines the elements of an array into a string.
  return text.split("").reverse().join("");

  //ES6 syntax
  // the spread operator ..., like the split() method spreads the characters of the string into array elements.
  return [...text].reverse().join();
}

//The For-loop way

// For loops are used to execute a piece of code as long as a condition is met. In the solution below, we use a decrementing for-loop to run through the string received and append each character to another variable in reverse order

function reverseString(text) {
  // We initialize the iterating variable i to the lenght of the string -1. Since the index begins from zero, this gives us the last character in the string.
  // We append this last character to our result variable which is an empty string, and continue the cycle until we are past the first character. Ie. i is no longer greater than or equal to 0.
  let result = "";

  for (let i = text.length - 1; i >= 0; i--) {
    result += text[i];
  }

  return result;

  //ES6 Syntax
  // The For...of statement in JS is used to execute a certain piece of code for each distinct item of an iterable object.
  let result = "";

  for (let char of text) {
    result = char + result;
  }

  return result;
}

//The Recursive Way

// Recursion is a programming technique in which the intention is to reduce the problem into smaller instances of the same problem until it is completely solved. In the solution below, we write a function that does exactly so by calling itself repeatedly.

function reverseString(text) {
  if (text === "") {
    //We run a check to see if we have an empty string. This is known as a Terminal Case. The case that ends the recursion.

    return "";
    //When empty, we return an empty string and the function terminates.
  } else {
    return reverseString(text.substr(1)) + text[0];
    // When not empty, we call the reverseString() function, and a new string created by removing the first character of the text is passed in.
  }

//   For Example
  reverseString('code')

  STEPS	What is executed	What is returned
    1	reverseString(‘code’)	‘c’
    2	reverseString(‘ode’)	‘o’
    3	reverseString(‘de’)	    ‘d’
    4	reverseString(‘e’)	    ‘e’
    END	reverseString(‘’)	    “”

// The Recursive function we reated continuolsy breaks down the problem into smaller chucnk until it reaches its terminating condition. We remove and return the first character on each call and re-execute the function on what is left. The character in the string are joined together from the last call upwards, giving us the string in reverse. Ie. "edoc".
}

// Using .reduce()

// The .reduce() method is used to execute a fucntion on every member of an array until it results in a single output value. It receives the function to be executed and the initial value of the accumulator as argumeents. The accumulator serves as a holder for the value returned in the last execution of the callback. 

function reverseString(text) {
    return text.split("").reduce((acc, char) => char + acc, '')
    // We split the text received into an array of characters, then we call the .reduce() which begins with an empty string as the initial value and accumulates each character in reverse until it has gone through all of the characters in the array. At this point it returns a completely reversed string. 

    //ES6 syntax 
    return [...text].reduce((acc, char) => char + acc, '')
}

module.exports = reverseString;
