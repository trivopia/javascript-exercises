const sumAll = function (x, y) {
  let sum = 0;

  if (x < y && x * y > 0 && Math.floor(x) === x && Math.floor(y) === y) {
    for (let i = x; i <= y; i++) {
      sum += i;
    }
  } else if (x > y) {
    let a = x;
    x = y;
    y = a;

    for (let i = x; i <= y; i++) {
      sum += i;
    }
  } else {
    return "ERROR";
  }

  return sum;
};

console.log(sumAll(1, 2));
// Do not edit below this line
module.exports = sumAll;
