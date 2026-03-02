Array.prototype.myMap = function (cb) {
  const innerArr = [];
  for (let i = 0; i < this.length; i++) {
    const result = cb(this[i], i);
    innerArr.push(result);
  }
  return innerArr;
};

const newArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

newArr.myMap((value, index) =>
  console.log(`Each Value: ${value * 2} | Each Index: ${index}`),
);

console.log("Original Array:", newArr);
