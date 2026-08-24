// abcde ace = 3
// ace abcde = 3
// abcde acte = 3
// abc abc = 3
// abc def = 0
// abc cba = 0
// a a = 1
// a b = 0

// Decide the original and subsequence based on length.
// Use indexOf() to find the position of a character.
// Use a counter for each match you find.
// Use a variable to track the position of the last match.
// If the new position is before the last position, return 0.
// Otherwise, keep going.

export function longestCommonSubsequence(text1: string, text2: string): number {
  let position = 0;
  let original;
  let subsequence;
  let memo: number[] = [];

  if (text1.length > text2.length) {
    original = text1;
    subsequence = text2;
  }
  else {
    original = text2;
    subsequence = text1;
  }

  for (let i = 0; i < subsequence.length; i++) {
    const indexOf = original.indexOf(subsequence[i]);
    if (indexOf !== -1 && indexOf >= i) {
      if ((indexOf === position && position === i) || indexOf > position) {
        memo[i] = 1;
        position = i;
      }
    }
    else {
      memo[i] = 0;
    }
  }

  return memo.reduce((a, b) => a + b);
}
