export class NumArray {
  private readonly sums: number[];
  constructor(nums: number[]) {
    this.sums = [];
    let sum = 0;
    for (const num of nums) {
      sum += num;
      this.sums.push(sum);
    }
  }

  sumRange(left: number, right: number): number {
    return this.sums[right] - ((left > 0) ? this.sums[left - 1] : 0);
  }
}

// export class NumArray {
//   private readonly nums: number[];
//   constructor(nums: number[]) {
//     this.nums = nums;
//   }
//
//   sumRange(left: number, right: number): number {
//     let sum = 0;
//     for (let i = left; i <= right; i++) {
//       sum += this.nums[i];
//     }
//     return sum;
//   }
// }
