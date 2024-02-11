function squareDigits(num){
    let arr = [];
    let num_arr = String(num).split("").map((num)=>{return Number(num)});
    for(i=0; i < num_arr.length; i++){
        arr.push(num_arr[i]**2)}
    return Number(arr.join(''));}

console.log(squareDigits(3212))