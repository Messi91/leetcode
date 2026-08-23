export function rob(nums: number[]): number {
  if (nums[2]) nums[2] = nums[0] + nums[2];

  for (let i = 3; i < nums.length; i++) {
    nums[i] = Math.max(nums[i - 3], nums[i - 2]) + nums[i];
  }

  return Math.max(...nums);
}
