/*
 Given two or more arrays, write a function that combines
 their elements into one array without any repetition. 
 E.g mergeArrays([1,2,3,3,3], [1,4,5,2]) // should return [1,2,3,4,5]
*/

//Using Sets
//A set in Javascript is an object used to store a collection of values of any type
function mergeArrays(...arrays) {
  let jointArray = [];

  arrays.forEach((array) => {
    //We use the forEach to iterate through each array and add the elements therein into another array, this case is jointArray
    jointArray = [...jointArray, ...array];
    //We use the spread operator to spread its elements as well as the elements in the jointArray which is initially empty into a new array.
    //jointArray now contains all the elements from all the arrays received.
  });

  return [...new Set([...jointArray])];
  //We again use the spread operator to spread out all the elements of the jointArray into the new set. This eliminates duplicates as sets are designed to only hold unique values.
  //We then spred the unique elements of the set back into an array which we return as the final result.
}

//Using .filter()
//This method is used to create a new array from another array. The new array contains only elements that staisfy the specified condition. It accepts one main parameter.
function mergeArrays(...arrays) {
  let jointArray = [];

  arrays.forEach((array) => {
    jointArray = [...jointArray, ...array];
  });

  const uniqueArray = jointArray.filter(
    (item, index) => jointArray.indexOf(item) === index
  );
  //We use the indexOf() method to retrieve the first index at which the current item can be found within the array and compare it with the current index for that iteration.
  //If the values match, then this is the first time the element occurs within the array. It passes the test and its added to the uniqueArray
  //If they dont match, it means the value has been encountered before, hence it is filtered out.
  return uniqueArray;
}

//Using .reduce()
//We use the .reduce() method to continuously execute a functin that checks if the current item is already in the accumulator array (newArray). If the element is withing the array already, we return the array as it is, to be used in the next iteration. If it isn't, we return the new array which we create from the elements in the accumulator and the current item.

function mergeArrays(...arrays) {
  let jointArray = [];

  arrays.forEach((array) => {
    jointArray = [...jointArray, ...array];
  });

  const uniqueArray = jointArray.reduce((newArray, item) => {
    //We use the .reduce() method to execute a function that checks if the current item is already in the accumulator.
    if (newArray.includes(item)) {
      //If the element isnt in the accumulator, it is added to the array.
      return newArray;
      //And a new array is created from the elements in the accumulator.
    } else {
      return [...newArray, item];
      //If the element is within the array already, we return the array as it is, to be used in the next iteration.
    }
  }, []);
  return uniqueArray;
}

module.exports = mergeArrays;
