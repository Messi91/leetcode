import { ListNode } from '~/add-two-numbers';

export function hasCycle(head: ListNode | null): boolean {
  if (head && head.next) {
    let pointer1 = head;
    let pointer2 = head.next;

    while (pointer2 !== null) {
      if (pointer1 === pointer2) {
        return true;
      }

      if (pointer1.next && pointer2.next && pointer2.next.next) {
        pointer1 = pointer1.next;
        pointer2 = pointer2.next.next;
      }
      else {
        break;
      }
    }

    return false;
  }
  else {
    return false;
  }
}
