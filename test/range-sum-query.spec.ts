import { describe, expect, it } from 'vitest';
import { NumArray } from '~/range-sum-query';

describe('NumArray', () => {
  it('sumRange should work for example 1', () => {
    const numArray: NumArray = new NumArray([-2, 0, 3, -5, 2, -1]);

    expect(numArray.sumRange(0, 2)).toEqual(1);
    expect(numArray.sumRange(2, 5)).toEqual(-1);
    expect(numArray.sumRange(0, 5)).toEqual(-3);
  });

  it('sumRange should work for example 2', () => {
    const numArray: NumArray = new NumArray([1]);

    expect(numArray.sumRange(0, 0)).toEqual(1);
  });
});
