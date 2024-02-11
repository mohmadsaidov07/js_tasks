function pigIt(str) {
    let str_arr = str.split(" ")
    let result = []
    for(let i = 0; i < str_arr.length; i++){
        for (let ii = 1; ii < str_arr[i].length+1; ii++) {
            if (i == str_arr.length-1 && str_arr[i].length > 1) {
                if (ii == str_arr[i].length) {
                    result.push(str_arr[i][0])
                    result.push('ay')
                }else{
                    result.push(str_arr[i][ii])   
                }
            }else if(i == str_arr.length-1 && str_arr[i].length == 1){
                result.push(str_arr[i])
            }
            else{
                if (ii == str_arr[i].length) {
                    result.push(str_arr[i][0])
                    result.push('ay ')
                }else{
                    result.push(str_arr[i][ii])   
                }
            }
        }
    }
    return result.join('')
}


console.log(pigIt('Pig latin is cool !'));


