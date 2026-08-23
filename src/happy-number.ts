export function isHappy(n: number): boolean {
  let pointer1 = n;
  let pointer2 = calculate(calculate(n));

  while(pointer1 !== 1) {
    if (pointer1 === pointer2) {
      return false;
    }

    pointer1 = calculate(pointer1);
    pointer2 = calculate(calculate(pointer2));
  }

  return true;
}

function calculate(n: number): number {
  return n.toString().split('').map(digit => Math.pow(Number.parseInt(digit), 2)).reduce((a, b) => a + b);
}
