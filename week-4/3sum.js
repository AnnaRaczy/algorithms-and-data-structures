const  threeSum = (nums) => {
    const result = [];
    const length = nums.length
    
    nums.sort((a,b) => a - b)
    
    for (let i=0; i< length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        
        const target = -nums[i]
        const reviewed = new Set();
        
        for (let j=i+1; j < length; j++) {
        const searchedNum = target - nums[j];

        if(reviewed.has(searchedNum)) {
            result.push([nums[i], nums[j], searchedNum])

            while (j + 1 < length && nums[j] === nums[j + 1]) j++;
            } 
        reviewed.add(nums[j])
        }
  }
  return result
};