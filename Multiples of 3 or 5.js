function solution(number){
  let result = []
  for(let i=1;i<number;i++){
    if((number-i) % 3 == 0 || (number-i) % 5 == 0 && number > 0){
        result.push(number-i)}}

  return (result.length == 0) ? (0) : (result.reduce((a,b) => a+b))
}

console.log(solution(10));