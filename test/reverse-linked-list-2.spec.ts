import { describe, it } from 'vitest';
import { show, toLinkedList } from '~/utils';
import { reverseBetween } from '~/reverse-linked-list-2';

describe('reverseBetween', () => {
  it('should work for example 1', () => {
    const input = toLinkedList([1, 2, 3, 4, 5]);
    const expected = toLinkedList([1, 4, 3, 2, 5]);
    const result = reverseBetween(input, 2, 4);

    expect(show(result)).toEqual(show(expected));
  });

  it('should work for example 2', () => {
    const input = toLinkedList([5]);
    const expected = toLinkedList([5]);
    const result = reverseBetween(input, 1, 1);

    expect(show(result)).toEqual(show(expected));
  });
});
