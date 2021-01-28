

  compressed.push(currChar);
  if (charCount > 1) {
    compressed.push(charCount.toString());
  }

  return compressed.join('');
