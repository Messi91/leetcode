import { describe, expect, it } from 'vitest';
import { addTwoNumbers } from '~/add-two-numbers';
import { toArray, toLinkedList } from '~/utils';

describe('addTwoNumbers', () => {
  it('should work with example 1', () => {
    const l1 = toLinkedList([2,4,3]);
    const l2 = toLinkedList([5,6,4]);
    const l3 = toLinkedList([7,0,8]);

    const result = toArray(addTwoNumbers(l1, l2));
    const expected = toArray(l3);

    expect(JSON.stringify(result)).toEqual(JSON.stringify(expected));
  });

  it('should work with example 2', () => {
    const l1 = toLinkedList([0]);
    const l2 = toLinkedList([0]);
    const l3 = toLinkedList([0]);

    const result = toArray(addTwoNumbers(l1, l2));
    const expected = toArray(l3);

    expect(JSON.stringify(result)).toEqual(JSON.stringify(expected));
  });

  it('should work with example 3', () => {
    const l1 = toLinkedList([9,9,9,9,9,9,9]);
    const l2 = toLinkedList([9,9,9,9]);
    const l3 = toLinkedList([8,9,9,9,0,0,0,1]);

    const result = toArray(addTwoNumbers(l1, l2));
    const expected = toArray(l3);

    expect(JSON.stringify(result)).toEqual(JSON.stringify(expected));
  });
});

