arr = [1, 2, 3, 4, 5]
arr2 = [1, 2, 3, 4, 5, 6]
const notInFirstArray = (arr, arr2) => {
  // Solution code here...
  return arr2.filter(value => {
    return !arr.includes(value)
  })
};
console.log(notInFirstArray(arr, arr2));