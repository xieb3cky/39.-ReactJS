function unroll(squareArray) {

    const result = [];

    let len = squareArray.length;
    let size = len * squareArray[0].length;

    if (len === 0) return result;

    let top = 0;
    let bottom = len - 1;
    let left = 0;
    let right = squareArray[0].length - 1;

    while (result.length < size) {
        //get every item in the top row
        for (let i = left; i <= right; i++) {
            result.push(squareArray[top][i]);
        }
        top++;
        //get every item in the right most column 
        for (let i = top; i <= bottom; i++) {
            result.push(squareArray[i][right]);
        }

        if (result.length >= size) {
            break;
        }
        right--;
        //get every item in the bottom row
        for (let i = right; i >= left; i--) {
            result.push(squareArray[bottom][i]);
        }
        bottom--;
        //get every item in the left column
        for (let i = bottom; i >= top; i--) {
            result.push(squareArray[i][left]);
        }
        left++;
    }
    return result;
}

module.exports = unroll;


