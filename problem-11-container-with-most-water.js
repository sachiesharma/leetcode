/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = function (num) {
  let left = 0,
    right = num.length - 1;
  let currentMax = 0;

  while (left < right) {
    let height = Math.min(num[left], num[right]);
    let width = right - left;
    let currentArea = height * width;

    currentMax = Math.max(currentMax, currentArea);

    if (num[left] < num[right]) {
      left++;
    } else {
      right--;
    }
  }
  return currentMax;
};
