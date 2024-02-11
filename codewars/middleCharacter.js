const getMiddle = (s) => {
    const s_arr = s.split("");
    return (s_arr.length % 2 ==0) ? (s_arr[s_arr.length / 2 - 1] + s_arr[s_arr.length / 2]) : (s_arr[Math.floor(s_arr.length / 2)])
}

console.log(getMiddle("helloworld"));