import { ListNode } from '~/add-two-numbers';

export function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
  let dummy = new ListNode();
  dummy.next = head;
  let prev = dummy;

  for (let i = 0; i < left - 1; i++) {
    prev = prev.next;
  }

  let curr = prev.next;
  let next = null;
  let tail = curr;

  for (let i = 0; i < right - left + 1; i++) {
    next = curr.next;
    curr.next = prev.next;
    prev.next = curr;
    curr = next;
  }

  tail.next = curr;

  return dummy.next;
}
