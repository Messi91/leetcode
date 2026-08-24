// [1,5,11,5] = [1,5,5] and [11]
// [1,5,5,11] = [1,5,5] and [11]
// [1,2,3,5] = 11/2 = false
// [5,3,7,5] = [3,5,5,7] = [3,7] and [5,5] = true
// [5,4,7,4] = [4,4,5,7] = false
// [2,2,1,1] = [1,1,2,2] = [1,2] and [1,2] = true

export function canPartition(nums: number[]): boolean {
  const total = nums.reduce((a, b) => a + b);
  if (total % 2 !== 0) return false;

  let half = total / 2;
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (sum === half) {
      return true;
    }
    else if (sum > half) {
      sum -= nums[i];
    }
  }

  return false;
}
