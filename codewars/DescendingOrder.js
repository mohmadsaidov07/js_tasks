function descendingOrder(n){
    let num_arr = String(n).split("").map(function(str) {
        return parseInt(str); });
    let sort_arr =num_arr.sort((a,b) => b-a).join('')
    return Number(sort_arr)
  }

console.log(descendingOrder(91234567889))