var plusOne = function(digits) {
    const len = digits.length;
    let carry = 1;

    for (let i = len - 1; i >= 0; i--) {
        if (carry === 0) break;

        digits[i] += carry;

        if (digits[i] >= 10) {
            digits[i] = 0;
        } else {
            carry = 0;
        }
    }

    if (carry > 0) {
        digits.unshift(carry);
    }

    return digits;
};