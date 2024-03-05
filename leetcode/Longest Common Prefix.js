const longestCommonPrefix = (strs) => {
  let result = [];
  let result2 = [];
  for (let i = 0; i < strs.length; i++) {
    for (let j = 0; j < strs[i].length; j++) {
      result.push(strs[i][j]);
    }
  }
  const amountOfLetters = result.reduce(function (acc, el) {
    acc[el] = (acc[el] || 0) + 1;
    return acc;
  }, {});
  for (var key in amountOfLetters) {
    if (amountOfLetters[key] >= strs.length) {
      result2.push(key);
    } else {
      return result2.join("");
    }
  }
  return result2.join("");
};

console.log(longestCommonPrefix(["floewer", "floewr", "floewer"]));

