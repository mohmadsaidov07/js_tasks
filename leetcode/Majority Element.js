var majorityElement = function (nums) {
  const sorted_nums = [... nums].sort((a, b) => a - b);
  let result = [];
  let counter = 1;
  for (let i = 0; i < nums.length; i++) {
    if (sorted_nums[i] == sorted_nums[i + 1]) {
      counter += 1;
    } else {
      result.push([sorted_nums[i], counter]);
      counter = 1;
    }
  }
  let indexOfMax = 0;
  for (let i = 0; i < result.length; i++){
      if (result[i][1] > result[indexOfMax][1]){
          indexOfMax = i;
      }
  }
  return result[indexOfMax][0];
};

console.log(majorityElement([3,1,3,3,1,2]));

