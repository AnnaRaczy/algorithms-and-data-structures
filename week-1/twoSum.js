var twoSum = function(nums, target) {
    const mapped = new Map();

    for (let i = 0; i < nums.length; i++) {
        const remnant = target - nums[i];
        if (mapped.has(remnant)) {
            return [mapped.get(remnant), i];
        }
        mapped.set(nums[i], i);
    }
};