import { describe, expect, it } from 'vitest';
import { findMaxLength } from '~/contiguous-array';

describe('findMaxLength', () => {
  it('should work for example 1', () => {
    expect(findMaxLength([])).toEqual(0);
    expect(findMaxLength([0])).toEqual(0);
    expect(findMaxLength([1])).toEqual(0);
  });

  it('should work for example 2', () => {
    expect(findMaxLength([0,1])).toEqual(2);
  });

  it('should work for example 3', () => {
    expect(findMaxLength([0,1,0])).toEqual(2);
  });

  it('should work for example 4', () => {
    expect(findMaxLength([0,1,1,1,1,1,0,0,0])).toEqual(6);
  });

  it('should work for example 5', () => {
    expect(findMaxLength([0,1,0,1])).toEqual(4);
  });
});
