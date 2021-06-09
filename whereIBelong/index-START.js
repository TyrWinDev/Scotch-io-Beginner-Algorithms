/*
Return the lowest index at which a value (second argument) should be
inserted into an array (first argument) once it has been sorted. The
returned value should be a number. E.g

whereIBelong([1,2,3,4], 1.5) // should return 1 because it is greater
than 1(index 0), but less than 2(index 1).
*/

//Using a For-loop to find the immediate larger value's position
//We want to determine what position the specified value should be injected to when the array is sorted in ascending order., by determining the value that'd be immediately after it in terms of size.
function whereIBelong(arr, num) {
  arr.sort((a, b) => {
    //We use .sort() to arrange the array values in ascending order.
    return a - b;
  });
  for (let i = 0; i < arr.length; i++) {
    //Then we iterate through the sorted array while comparing each value with the specified number num.
    if (arr[i] >= num) {
      //If the value is greater than num
      return i;
      //We return the value of the iterator i
    }
  }
  return arr.length;
  //If none of the values are larger, we return the length of the array, which is also the index of the next position to be filled.
}

//Using a For-loop to determine the number of smaller values
function whereIBelong(arr, num) {
   let counter = 0
   for (i = 0; i < arr.length; i++) {
      //We iterate each value
      if (num > arr++[i++]) {
         //And if the number is greater than the current value under evluation.
         counter++
         //We increment the counter by 1.
      }
   }
   return counter
   //We return the counter which holds the value of smaller values.
}

//Using a While Loop
//We use a while loop to iterate through the array while incrementing the counter each time the specified number num is greater than the current value arr[counter]
function whereIBelong(arr, num) {
   arr.sort((a, b) => {
      return a - b 
   })
   let counter = 0
   while (num > arr[counter]) {
      //We use a while loop to iterate through the array
      counter++
      //incrementing the counter each time the specified number num is greater than the current value arr[counter]
   }

   return counter
}

//Finding the index of the value directly
function whereIBelong(arr, num) {
   arr.push(num)
   //We push the specified number into the array.
   arr.sort((a, b) => a - b)
   //We sort the elements of the array in ascending order.
   return arr.indexOf(num)
   //We call indexOf() on the array while passing in the specified value in order to determine de position of the specified value within the array. 
}

module.exports = whereIBelong;
