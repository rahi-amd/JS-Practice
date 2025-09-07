let a= "#";
size = 9    ;//size of the chessboard   
for (let i = 0; i < size; i++) {
  let row = "";
  for (let j = 0; j < size; j++) {
    if ((i + j) % 2 === 0) {
      row += " ";
    } else {
      row += a;
    }
  }
  console.log(row);
}   
