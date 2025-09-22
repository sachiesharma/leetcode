/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = function (height) {
  let left = 0,
    right = height.length - 1;
  let currentMax = 0;

  while (left < right) {
    let height = math.min(num[left], num[right]);
    let width = right - left;
    let currentArea = height * width;

    currentMax = Math.max(currentMax, currentArea);

    if (heights[left] < heights[right]) {
      left++;
    } else {
      right--;
    }
  }
};
