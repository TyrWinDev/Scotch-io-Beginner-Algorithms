/*
Write a function to return the nth element in Fibonacci sequence,
where the sequence is:
    [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, …]
*/

// AN ITERATIVE APPROACH

function fibonacci(n) {
  let previous = 1,
    current = 1;

  if (n <= 1) {
    return 1;
  } else {
    let counter = n - 1;

    while (counter) {
      let temp = current;
      current += previous;
      previous = temp;
      counter--;
    }
  }
  return current;
}

// A RECURSIVE SOLUTION

function fibonacci(n) {
  if (n <= 1) {
    return 1;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// USING MEMOIZATION

function fibonacci(n, memo) {
  memo = memo || {};

  if (memo[n]) {
    return memo[n];
  }
  if (n <= 1) {
    return 1;
  }

  return (memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo));
}
