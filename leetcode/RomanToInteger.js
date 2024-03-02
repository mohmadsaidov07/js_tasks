const RomanToInteger = (s) => {
    const years = {
        "X": 10,
        "V": 5,
        "I": 1,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }
    const s_arr = s.split("")
    let result_arr = []
    for(let i = 0; i < s_arr.length; i++){
        if(years[s_arr[i]] == years[s_arr[i+1]] || years[s_arr[i]] > years[s_arr[i+1]] || i == s_arr.length-1){
            result_arr.push(years[s_arr[i]])
        }else if (years[s_arr[i]] < years[s_arr[i+1]]){
            result_arr.push(years[s_arr[i+1]] - years[s_arr[i]])
            i += 1
        }
    }
    return result_arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

console.log(RomanToInteger("XIV"));