//1
function disemvowel1(str) {
    return str.replace(/[aeiou]/gi, '');
  }

console.log(disemvowel1("This website so shitty LOL"));

//2
function disemvowel2(str) {
    const vowels = 'aeiou';
    return str
        .split('')
        .filter(letter => !vowels.includes(letter.toLowerCase()))
        .join('');
}

//3
const disemvowel3 = (str) => {
	const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
	let newStr = '';
	for (let i = 0; i <= str.length; i++) {
		let char = str.charAt(i);
		if (vowels.indexOf(char) == -1) {
			newStr += char;}}
		return newStr;
};