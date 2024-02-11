function isIsogram(str){
    const str_arr = str.toLowerCase().split("").sort()
    for(let i=0; i < str_arr.length ;i++){
        if (str_arr[i] == str_arr[i+1]) {
            return false
        }
    }
    return true
  }

console.log(isIsogram("hello"));
