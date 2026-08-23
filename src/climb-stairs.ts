export function climbStairs(n: number): number {
  let memo: number[] = [];

  memo[1] = 1;
  memo[2] = 2;

  for(let i = 3; i <= n; i++) {
    memo[i] = memo[i - 1] + memo[i - 2];
  }

  return memo[n];
}

// export function climbStairs(n: number): number {
//   let memo: Map<number, number> = new Map();
//
//   memo.set(1, 1);
//   memo.set(2, 2);
//
//   for(let i = 3; i <= n; i++) {
//     memo.set(i, memo.get(i - 1)! + memo.get(i - 2)!);
//   }
//
//   return memo.get(n)!;
// }

// export function climbStairs(n: number): number {
//     if (n === 1) return 1;
//     else if (n === 2) return 2;
//     else return climbStairs(n - 1) + climbStairs(n - 2);
// }
