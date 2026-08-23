import { ListNode } from '~/add-two-numbers';

export function toArray(list: ListNode | null): number[] {
  if (list) {
    let array: number[] = [];
    let pointer: ListNode | null = list;

    while (pointer) {
      array.push(pointer.val);
      pointer = pointer.next;
    }

    return array;
  }
  else {
    return [];
  }
}

export function toLinkedList(array: number[]): ListNode {
  let list = new ListNode();
  let pointer = list;

  for (let i = 0; i < array.length; i++) {
    pointer.val = array[i];
    if (i + 1 < array.length) {
      pointer.next = new ListNode();
      pointer = pointer.next;
    }
  }

  return list;
}

export function swapPairs(head: ListNode): ListNode | null {
  let dummy = new ListNode(0, head);
  let prev = dummy;

  while (prev.next && prev.next.next) {
    let first = prev.next;
    let second = prev.next.next;

    prev.next = second;
    first.next = second.next;
    second.next = first;

    prev = first;
  }

  return dummy.next;
}
