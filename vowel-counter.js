function getCount(str) {
  let vowel_array = "aeiou".split("");
  const str_array = str.split("");
  let counter = 0;
  for (let i = 0; i < str_array.length; i++) {
    for (let i = 0; i < vowel_array.length; i++) {
      if (str_array.indexOf(vowel_array[i]) > -1) {
        str_array.splice(str_array.indexOf(vowel_array[i]), 1);
        counter += 1;
      }
    }
  }
  return counter;
}

console.log(getCount("uvz"));
