function twoSum(nums: number[], target: number): number[] {
  // Step 1: outer loop
  for (let i = 0; i < nums.length; i++) {
    // Step 2: inner loop - fill this in
    for (let j = i + 1; j < nums.length; j++)
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
  }
  // Step 3: if no solution found
  return [];
}

// Loop through each element [i] in the array
// For each element [i], loop through every subsequent element [j]
// Check if [i] + [j] = target
// If condition is met, return their indices
