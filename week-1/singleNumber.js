var singleNumber = function(nums) {
    let result = 0;

    for (let elem of nums) {
        result ^= elem;
    }
    return result;
};