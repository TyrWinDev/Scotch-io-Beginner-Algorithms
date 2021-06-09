/*
Given an array, remove all falsy values from the array
and return an array of only truthy values.

E.g  falsyBouncer([1, 0, null, '', 5]) // should return [1,5]
*/

//Using a for...of loop
//We use a for...of loop to access every element within the array and then carry out a check to see if its falsy.
//A falsy value is a value that is considered false when examined as a Boolean
function falsyBouncer(array) {
  let result = [];
  //loop through with each array value
  for (value of array) {
    //push into result if truthy
    if (value) {
      result.push(value);
    }
  }

  return result;
}

//Using .filter()
//We use .filter() method to filter the received array and only return elements that evaluate to a truthy value.
function falsyBouncer(array) {
  return array.filter((value) => {
    //Filter only passes elements that are truthy
    return Boolean(value);
    //We return an array containing only the truthy values from the received array.
  });
}

module.exports = falsyBouncer;
