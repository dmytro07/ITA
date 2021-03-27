//task178H
//a_k < (a_[k-1] + a_[k+1])/2
function taskH(arr) {
  // console.log(
  //   `item ${arr[0]} and item ${
  //     arr[arr.length - 1]
  //   } can't be proccessed because they have not pairs`
  // );

  let correctAnswerAmount = 0;
  for (let i = 1; i < arr.length - 1; i++) {
    //let correct = arr[i] < (arr[i - 1] + arr[i + 1]) / 2;
    if (arr[i] < (arr[i - 1] + arr[i + 1]) / 2) correctAnswerAmount++;
  } //for
  return correctAnswerAmount;
}

//task178D
//2^k < a_k < k!
function calcFactorial(val) {
  let result = 1;
  for (let i = val; i > 1; i--) {
    result = result * i;
  }
  return result;
}

function taskD(arr) {
  let correctAnswerAmount = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 2 ** (i + 1) && arr[i] < calcFactorial(i + 1))
      correctAnswerAmount++;
  } //for
  return correctAnswerAmount;
}

//task555
function showPascalTriangle(numRows) {
  if (numRows === 0) return [];
  if (numRows === 1) return [[1]];
  let result = [];
  for (let row = 1; row <= numRows; row++) {
    let arr = [];
    for (let col = 0; col < row; col++) {
      if (col === 0 || col === row - 1) {
        arr.push(1);
      } else {
        arr.push(result[row - 2][col - 1] + result[row - 2][col]);
      }
    }
    result.push(arr);
  }
  return result;
}

module.exports = {
  taskH,
  taskD,
  showPascalTriangle,
};
