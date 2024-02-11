function findOdd(a) {
  const sorted_arr = a.sort((a, b) => a - b);
  let counter = 1;
  let number = 0;
  let find_odd_number2 = [];
  for (let i = 0; i < sorted_arr.length; i++) {
    if (sorted_arr[i] == sorted_arr[i + 1]) {
      counter += 1;
    } else {
      number = sorted_arr[i];
      find_odd_number2.push([number, counter]);
      counter = 1;
    }
  }
  for (let i = 0; i < find_odd_number2.length; i++) {
    if (find_odd_number2[i][1] % 2 !== 0 || find_odd_number2[i][1] == 1) {
      return find_odd_number2[i][0];
    }
  }
  return ERORR
}

console.log(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]));

// function findOdd(a) {
//     const sorted_arr = a.sort((a,b) => a-b)
//     let counter = 1
//     let counter2 = 0
//     let number = 0
//     let amount_of_numbers = []
//     let find_odd_number= []
//     let find_odd_number2= []
//     if(a.length > 1){
//         for (let i = 0; i < sorted_arr.length; i++) {
//             if(sorted_arr[i] == sorted_arr[i + 1]){
//                 counter += 1
//                 number = sorted_arr[i]
//             }else{
//                 find_odd_number2.push([number , counter])
//                 amount_of_numbers.push(counter)
//                 counter = 1
//             }
//         }
//         for(let i = 0 ; i < amount_of_numbers.length; i++){
//             if(amount_of_numbers[i] % 2 != 0){
//                 find_odd_number.push(amount_of_numbers[i])
//             }}

//         for(let i = 0 ; i < amount_of_numbers.length; i++){
//             if(amount_of_numbers[i] != find_odd_number[0]){
//                 counter2 +=1
//             }
//         }
//         for(let i=0; i < find_odd_number2.length; i++){
//             if(find_odd_number2[i][1] == find_odd_number[0]){
//                 return find_odd_number2[i][0]
//             }
//         }
//         return find_odd_number2
//     }else{
//         return a[0]
//     }
// }
