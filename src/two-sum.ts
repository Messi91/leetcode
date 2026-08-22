export function twoSum(nums: number[], target: number): number[] {
  const indexes: Map<number, number> = new Map();

  for (let i=0; i<nums.length; i++) {
    indexes.set(nums[i], i);
  }

  for (let i=0; i<nums.length; i++) {
    const position = indexes.get(target - nums[i]);
    if (position && position !== i) {
      return [i, position];
    }
  }

  return [];
}

// export function twoSum(nums: number[], target: number): number[] {
//   const differences: Map<number, number> = new Map();
//   for (let i=0; i<nums.length; i++) {
//     for (let j=0; j<nums.length; j++) {
//       if (i !== j) {
//         const sum = nums[i] + nums[j];
//         if (sum === target) {
//           return [i, j];
//         }
//       }
//     }
//   }
//   return [];
// }
