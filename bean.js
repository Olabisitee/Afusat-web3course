// Function to count the number of uppercase 'B' characters in a string
function countBs(string) {
  // Use countChar function to count 'B' characters
  return countChar(string, "B");
}

// General function to count occurrences of any character in a string
function countChar(string, char) {
  let count = 0; // Initialize count to 0
  for (let i = 0; i < string.length; i++) {
    // Iterate through each character in the string
    if (string[i] === char) {
      // Check if the character matches the specified char
      count++; // Increment the count if it matches
    }
  }
  return count; // Return the total count
}

// Testing the functions
console.log(countBs("BBC")); // Outputs: 2
console.log(countChar("kakkerlak", "k")); // Outputs: 4
