function isEven(n) {
  if (n === 0) {
    return true; //  0 is even
  } else if (n === 1) {
    return false; //  1 is odd
  } else if (n < 0) {
    return isEven(-n); // If n is negative, it convert it to positive and continue
  } else {
    return isEven(n - 2); // Recursive call: reduce n by 2 and check again
  }
}

// Testing the function
console.log(isEven(50)); // Outputs: true ( 50 is even)
console.log(isEven(75)); // Outputs: false ( 75 is odd)
console.log(isEven(-1)); // Outputs: false (-1 is odd)
