export function subarraySum(nums: number[], k: number): number {
  let slide = 0;
  let index = 0;
  let count = 0;
  let sum = 0;

  while (index < nums.length) {
    sum += nums[index];
    if(sum === k) {
      count++;
    }

    if(index === nums.length - 1) {
      sum = 0;
      slide++;
      index = slide;
    }
    else {
      index++;
    }
  }

  return count;
}
