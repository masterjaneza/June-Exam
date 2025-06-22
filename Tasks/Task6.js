// 6️⃣ Sum Numbers in a String

// Instructions:
//  Write a function that finds all numbers in a string and returns their sum.

// Test Cases:
//  - "abc123xyz" → 123
//  - "7 apples and 3 oranges" → 10
//  - "no numbers" → 0
//  - "1a2b3c" → 6
//  - "100 200" → 300



const sumNumbersInString = str => {
    const matches = str.match(/\d+/g); // POWER OF REGEX OBJ!
    if(!matches) return 0;  
    return matches.reduce((sum, num) => sum + Number(num), 0);
};

console.log(sumNumbersInString("abc123xyz" ));
console.log(sumNumbersInString( "7 apples and 3 oranges"));
console.log(sumNumbersInString("no numbers"));
console.log(sumNumbersInString("1a2b3c" ));
console.log(sumNumbersInString( "100 200" ));


// !     DONE!