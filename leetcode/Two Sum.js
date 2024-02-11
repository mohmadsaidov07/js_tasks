var twoSum = function(nums, target) {
    for(let i = 0; i < nums.length; i++){
        for(let j = 1; j < nums.length; j++){
            if(nums[i] + nums[j] == target && i != j){
                return [i,j]
            }
        }
    }
};

console.log(twoSum([1,5,5,10], 10));