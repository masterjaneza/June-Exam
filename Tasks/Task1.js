// 1️⃣ Sum Digits Until Single Digit
// Instructions:
//  Write a function that takes a non-negative integer and returns the sum of its digits. If the result has more than one digit, repeat the process until the result is a single digit.

// Test Cases:

//  - 123 → 6
//  - 0 → 0
//  - 9999 → 9
//  - 45 → 9
//  - 1 → 1


const sumToOneDigit = num => {
    while(num >= 10) {
        const digits = num.toString().split('');
        num = digits.reduce((sum, digit) => sum + Number(digit), 0);
    };
    return num
};

// Test Cases
console.log(sumToOneDigit(123)); // 6
console.log(sumToOneDigit(0)); // 0
console.log(sumToOneDigit(9999)); // 9
console.log(sumToOneDigit(45)); // 9
console.log(sumToOneDigit(1)); // 1

// ! Done!
