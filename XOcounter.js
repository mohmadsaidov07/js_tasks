const XO = (str) => {
    let XO_counter = 0;
    let str_arr = str.toLowerCase().split('')
    for(let i=0; i <= str_arr.length;i++){
        if(str_arr[i] == "o"){
            XO_counter++
        }else if(str_arr[i] == "x"){
            XO_counter--
        }
    }
    return !XO_counter
}
console.log(XO("xoo"))