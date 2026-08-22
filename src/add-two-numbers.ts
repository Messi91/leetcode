export class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
  }
}

export function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  let current = 0;
  let carryOver = 0;
  let sum = 0;
  let digits: number[] = [];

  let l3 = new ListNode();
  let pointer = l3;

  while (l1 || l2) {
    if (l1 && l2) {
      sum = l1.val + l2.val;
    }
    else if (l1) {
      sum = l1.val;
    }
    else if (l2) {
      sum = l2.val;
    }

    digits = (sum + carryOver).toString().split('').map(digit => Number.parseInt(digit));
    [carryOver, current] = (digits.length === 2) ? [digits[0], digits[1]] : [0, digits[0]];

    pointer.val = current;
    l1 = l1 ? l1.next : l1;
    l2 = l2 ? l2.next : l2;

    if (l1 || l2) {
      pointer.next = new ListNode();
      pointer = pointer.next;
    }
    else if (carryOver !== 0) {
      pointer.next = new ListNode(carryOver);
    }
  }

  return l3;
}
