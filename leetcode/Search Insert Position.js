const searchInsert = (nums, target) => {
    for(let i = 0; i< nums.length; i++){
        if(target < nums[i] || target === nums[i]){
            return nums.indexOf(nums[i])
        }else if(target > nums[i] && i === nums.length-1){
            return nums.length
        }
    }
};

console.log(searchInsert([1,3,5,6],7));