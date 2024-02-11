function reverseWords(str) {
    const str_arr = str.split("").reduce((acc, char) => char + acc, "").split(" ");
    const result = []
    str_arr.forEach((current,index) => {
        (index != 0) ? (result.push(str_arr[str_arr.length-index])) : (null)
    });
    result.push(str_arr[0])
    return result.join(" ")
}

console.log(reverseWords('Hey fellow warriors'));