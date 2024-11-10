let size = 8; // Set size to 8 for an 8x8 grid
let board = "";

for (let row = 0; row < size; row++) {
  for (let col = 0; col < size; col++) {
    // Add "#" if the sum of the row and column is even, else add a space
    if ((row + col) % 2 === 0) {
      board += "#";
    } else {
      board += " ";
    }
  }
  board += "\n"; // Add a newline after each row
}

console.log(board); // Output the chessboard pattern
