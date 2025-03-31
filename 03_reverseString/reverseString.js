const reverseString = function (text) {
  const reversed = text.split("").reverse().join("");
  return reversed;
};

console.log(reverseString("hello world"));
// Do not edit below this line
module.exports = reverseString;
