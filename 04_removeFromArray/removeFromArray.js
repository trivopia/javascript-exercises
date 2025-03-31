const removeFromArray = function (array, ...item) {
  const newArray = [];

  for (let i = 0; i < array.length; i++) {
    if (!item.includes(array[i])) {
      newArray.push(array[i]);
    }
  }
  return newArray;
};

console.log(removeFromArray([1, 2, 3, 4, 5], 1, 2, 3));

// Do not edit below this line
module.exports = removeFromArray;
