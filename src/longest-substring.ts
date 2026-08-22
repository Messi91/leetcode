export function lengthOfLongestSubstring(s: string): number {
  const lengths: number[] = [];
  let currentLength = 0;
  let seen: Set<string> = new Set<string>();
  let iteration = 0;
  let index = 0;

  while (index < s.length) {
    const char = s[index];

    if (!seen.has(char)) {
      seen.add(char);
      currentLength++;
      index++;

      if (index === s.length) lengths.push(currentLength);
    }
    else {
      lengths.push(currentLength);
      seen = new Set<string>();
      currentLength = 0;
      iteration++;
      index = iteration;
    }
  }

  if (lengths.length) {
    return lengths.sort((a, b) => a - b)[lengths.length - 1];
  }
  else {
    return 0;
  }
}
