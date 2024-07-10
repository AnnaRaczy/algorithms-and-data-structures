var containsDuplicate = function(nums) {
    const unique = [...new Set(nums)];

    return unique.length !== nums.length;
};