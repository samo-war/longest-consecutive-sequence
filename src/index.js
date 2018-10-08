module.exports = function longestConsecutiveLength(array) {
  const arr = array;
  let long = 1;
  let maxLong = 1;
  if (arr.length == 0) {
    return 0;
  } else if (arr.length == 1) {
    return 1;
  } else {
    for (let i = 1; i < arr.length; i++) {
      let curNum = arr[i];
      let prevNum = arr[i-1];
      if (curNum == (prevNum + 1)) {
        long += 1;
          if (long > maxLong) {
            maxLong = long;
          }
      } else {
        long = 1;
      }
    }
  }
  return maxLong;
}  
