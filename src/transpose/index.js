/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
  function transpose(array) {
    let rows = array.length;
    let columns = array[0].length;
    let number = [];

    for(let i = 0; i < columns; i++){
      number[i] = Array(rows);
    }

    for (let j = 0; j < rows; j++){
      for(let k = 0; k < columns; k++){
        number[k][j] = array[j][k]
      }
    }


    return number;

  }

  module.exports = transpose

