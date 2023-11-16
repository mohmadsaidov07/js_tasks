const toJadenCase = (str) => {
    let str_arr = str.split(" ")
    const result = str_arr.map(casing => {
        return casing[0].toUpperCase() + casing.slice(1)
    })
    return result.join(' ')
}

console.log(toJadenCase("How can mirrors be real if our eyes aren't real"))