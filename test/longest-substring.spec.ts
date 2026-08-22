import { describe, expect, it } from 'vitest';
import { lengthOfLongestSubstring } from '~/longest-substring';

describe('lengthOfLongestSubstring', () => {
  it('should work with example 1', () => {
    expect(lengthOfLongestSubstring('abcabcbb')).toEqual(3);
  });

  it('should work with example 2', () => {
    expect(lengthOfLongestSubstring('bbbbb')).toEqual(1);
  });

  it('should work with example 3', () => {
    expect(lengthOfLongestSubstring('pwwkew')).toEqual(3);
  });

  it('should work with example 4', () => {
    expect(lengthOfLongestSubstring('s')).toEqual(1);
  });

  it('should work with example 5', () => {
    expect(lengthOfLongestSubstring('1R1T7')).toEqual(4);
  });

  it('should work with example 6', () => {
    expect(lengthOfLongestSubstring('mf}F5y_e>`>I')).toEqual(10);
  });

  it('should work with example 7', () => {
    expect(lengthOfLongestSubstring('')).toEqual(0);
  });
});
