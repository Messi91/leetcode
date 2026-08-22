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
