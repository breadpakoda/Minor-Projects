let den = 0; // 0 for circle, 1 for cross
let board = Array(9).fill(null); // 3x3 board

const buttons = document.querySelectorAll('.box button');

function checkWinner(board) {
  const winPatterns = [
    [0,1,2],[3,4,5],[6,7,8], // rows
    [0,3,6],[1,4,7],[2,5,8], // cols
    [0,4,8],[2,4,6]          // diags
  ];
  for (let pattern of winPatterns) {
    const [a, b, c] = pattern;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  return null;
}

buttons.forEach((button, idx) => {
  button.addEventListener('click', () => {
    if (board[idx]) return; // already filled

    let img = document.createElement("img");
    img.style.width = "100%";
    img.style.height = "100%";
    img.style.objectFit = "cover";

    if (den === 0) {
      img.src = "circle.png";
      board[idx] = "O";
      den = 1;
    } else {
      img.src = "cross.png";
      board[idx] = "X";
      den = 0;
    }
    button.append(img);

    const winner = checkWinner(board);
    if (winner) {
      setTimeout(() => alert(winner + " wins!"), 10);
      // Optionally: disable all buttons here
    } else if (!board.includes(null)) {
      setTimeout(() => alert("Draw!"), 10);
    }
  });
});