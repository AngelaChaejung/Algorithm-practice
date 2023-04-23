function makeWord(cards, word) {
  const sortedWord = word.split("").sort().join("");
  const sortedCards = cards.map((str) => str.split("").sort().join(""));

  for (let i = 0; i < sortedWord.length; i++) {
    const char = sortedWord[i];
    let found = false;

    for (let j = 0; j < sortedCards.length; j++) {
      if (sortedCards[j].includes(char)) {
        found = true;
        sortedCards[j] = sortedCards[j].replace(char, "");
        break;
      }
    }

    if (!found) {
      return false;
    }
  }
  return true;
}

function getPossibleWord(cards, words) {
  const combinations = [];

  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      for (let k = 0; k < 8; k++) {
        combinations.push(cards[0][i] + cards[1][j] + cards[2][k]);
      }
    }
  }
  const possibleWords = combinations.filter((word) => makeWord(cards, word));
  return possibleWords.sort();
}
