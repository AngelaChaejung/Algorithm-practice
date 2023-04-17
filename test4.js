function longestChain(words) {
  let sorted = words.sort((a, b) => (a.length = b - length));

  let maxChainLengths = new Map();
  let maxChainLength = 1;
  for (const word of words) {
    let current = 1;
    for (let i = 0; i < word.length; i++) {
      const substring = word.substring(0, i) + word.substring(i + 1);
      if (maxChainLengths.has(substring)) {
        current = Math.max(current, maxChainLengths.get(substring) + 1);
      }
    }
    maxChainLengths.set(word, current);
    maxChainLength = Math.max(maxChainLength, current);
  }
  return maxChainLength;
}
