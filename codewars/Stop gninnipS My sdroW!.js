function spinWords(str){
    const str_arr = str.split(" ");
    let result = [];
    for(let i=0; i < str_arr.length; i++){
        if(str_arr[i].length >= 5){
            result.push(str_arr[i].split("").reverse().join(""))
        }else{
            result.push(str_arr[i])}
    }
    return result.join(" ")
}

console.log(spinWords("Hey fellow warriors"));

