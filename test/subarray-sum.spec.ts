import { describe, expect, it } from 'vitest';
import { subarraySum } from '~/subarray-sum';

describe('subarraySum', () => {
  it('should work for example 1', () => {
    expect(subarraySum([1,1,1], 2)).toEqual(2);
  });

  it('should work for example 2', () => {
    expect(subarraySum([1,2,3], 3)).toEqual(2);
  });
});
