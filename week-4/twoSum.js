const twoSum = (numbers, target) => {
    const numberPairs = new Map();

    for (let i = 0; i < numbers.length; i++) {
        const searchedNum = target - numbers[i];
        if (numberPairs.has(searchedNum)) {
            return [numberPairs.get(searchedNum) + 1, i + 1];
        }
        numberPairs.set(numbers[i], i);
    }

    return []
};