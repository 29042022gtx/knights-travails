const knight = (() => {
  function getNextSquareNums(num) {
    if (num < 0 || num > 63) {
      return [];
    }

    const arr = [17, 15, 10, 6];
    const squareNums = [];

    arr.forEach((val) => {
      const squareNum = num - val;
      if (squareNum >= 0) {
        squareNums.push(squareNum);
      }
    });

    arr.reverse();
    arr.forEach((val) => {
      const squareNum = num + val;
      if (squareNum <= 63) {
        squareNums.push(squareNum);
      }
    });
    return squareNums;
  }

  return { getNextSquareNums }
})();

export default knight;
