import { describe, expect, it } from 'vitest';
import { climbStairs } from '~/climb-stairs';

describe('climbStairs', () => {
  it('should work for example 1', () => {
    expect(climbStairs(1)).toEqual(1);
  });

  it('should work for example 2', () => {
    expect(climbStairs(2)).toEqual(2);
  });

  it('should work for example 3', () => {
    expect(climbStairs(3)).toEqual(3);
  });
});
