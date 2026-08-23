import { ListNode } from '~/add-two-numbers';

export function reverseList(head: ListNode): ListNode | null {
  let current: ListNode | null = head;
  let prev = null;
  let next;

  while (current) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  return prev;
}
