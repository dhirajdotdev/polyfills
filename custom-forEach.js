Array.prototype.myForEach = function (cb) {
  for (let i = 0; i < this.length; i++) {
    cb(this[i], i);
  }
};

const newArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

newArr.myForEach((value, index) => console.log(`Each Value: ${value} | Each Index: ${index}`))
