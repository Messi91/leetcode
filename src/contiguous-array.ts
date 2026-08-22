export function findMaxLength(nums: number[]): number {
  let slide = 0;
  let index = 0;
  let zeros = 0;
  let ones = 0;
  let maxLength = 0;

  while (slide < nums.length) {
    if (nums[index] === 0) zeros++;
    if (nums[index] === 1) ones++;

    if (zeros === ones) {
      maxLength = Math.max(maxLength, zeros + ones);
    }

    if (index === nums.length - 1) {
      zeros = 0;
      ones = 0;
      slide++;
      index = slide;
    }
    else {
      index++;
    }
  }

  return maxLength;
}
