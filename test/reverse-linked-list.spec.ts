import { describe, it } from 'vitest';
import { reverseList } from '~/reverse-linked-list';
import { toArray, toLinkedList } from '~/utils';

describe('reverseList', () => {
  it.only('should reverse a linked list', () => {
    const input = [1, 2, 3, 4, 5];
    const expected = [5, 4, 3, 2, 1];
    const result = toArray(reverseList(toLinkedList(input)));

    expect(JSON.stringify(result)).toEqual(JSON.stringify(expected));
  });
});
