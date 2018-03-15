/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n, board, rowIdx, rooksPlaced) {
  var solution;
  board = board || new Board({n: n});
  rowIdx = rowIdx || 0;
  rooksPlaced = rooksPlaced || 0;

  if (rowIdx === n && rooksPlaced === n) {
    solution = board.rows();
    console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
    return solution;
  }

  if (solution === undefined) {
    for (var colIdx = 0; colIdx < n; colIdx++) {
      board.togglePiece(rowIdx, colIdx);
      rooksPlaced++
      if (!(board.hasAnyRooksConflicts())) {
        solution = window.findNRooksSolution(n, board, rowIdx + 1, rooksPlaced);
      } else {
        board.togglePiece(rowIdx, colIdx);
        rooksPlaced--;
      }
    }
  }

  return solution;
// base case
  // if iterated over every row and solution is valid
    // set solution to the board
    // return board

// recursive case
  // if haven't iterated through all rows
    // iterate over each column
    // place a rook on [row, col]
    // if rook has no conflicts
      // set solution to recursive function 
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n, board, rowIdx) {
  var solutionCount;

  // 
  if (rowIdx === n) {

  }
  return solutionCount;
};
  

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution; //fixme
  var board = new Board({n: n});


  solution = board.rows();
  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
