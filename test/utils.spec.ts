import { describe, expect, it } from 'vitest';
import { ListNode } from '~/add-two-numbers';
import { toArray, toLinkedList } from '~/utils';

describe('toArray', () => {
  it('should convert a linked list to an array', () => {
    const input = c(1, c(2, c(3, c(4))));
    const expected = [1, 2, 3, 4];

    expect(toArray(input)).toEqual(expected);
  });
});

describe('toLinkedList', () => {
  it('should convert an array to a linked list', () => {
    const expected = c(1, c(2, c(3, c(4))));

    expect(toLinkedList([1, 2, 3, 4])).toEqual(expected);
  });
});

function c(val: number, next?: ListNode | null): ListNode {
  return new ListNode(val, next);
}
