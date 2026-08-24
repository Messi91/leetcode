//grouping anagrams
// input, ['cat', 'tac', 'dog', 'god', 'dog']
// output [['cat', 'tac'], ['dog', god, 'dgo']]

// ['ttttt', 'ttt', 'aaa']

function buildAnagrams(input: string[]) {
  let anagrams: Map<string, string[]> = new Map();

  for (let word of input) {
    const key = word.split('').sort().join();
    const array = anagrams.get(key);
    let value: string[];

    if(array) {
      array.push(word);
      value = array;
    }
    else {
      value = [word];
    }

    anagrams.set(key, value);
  }

  return Array.from(anagrams.values());
}

console.log(buildAnagrams([]));
console.log(buildAnagrams(['cat', 'tac']));
console.log(buildAnagrams(['dog', 'god', 'dgo']));
console.log(buildAnagrams(['cat', 'tac', 'dog', 'god', 'dgo']));

// length of the input N
// avg length per word M