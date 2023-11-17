function highAndLow(numbers){return[numbers.split(' ').map((num)=>{return Number(num)}).sort(function(a, b){return a - b})[numbers.split(' ').map((num)=>{return Number(num)}).sort(function(a, b){return a - b}).length -1]].concat([numbers.split(' ').map((num)=>{return Number(num)}).sort(function(a, b){return a - b})[0]]).join(' ')}

console.log(highAndLow("1 2 30 4 5 6 7 8 9 10 11"))
