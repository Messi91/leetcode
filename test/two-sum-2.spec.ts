import { describe, expect, it } from 'vitest';
import { twoSum } from '~/two-sum-2';

describe('twoSum', () => {
  it('should work for example 1', () => {
    expect(twoSum([2,7,11,15], 9)).toEqual([1,2]);
  });

  it('should work for example 2', () => {
    expect(twoSum([2,3,4], 6)).toEqual([1,3]);
  });

  it('should work for example 3', () => {
    expect(twoSum([-1,0], -1)).toEqual([1,2]);
  });

  it('should work for example 4', () => {
    expect(twoSum([-5,-3,0,2,4,6,8], 5)).toEqual([2,7]);
  });
});
