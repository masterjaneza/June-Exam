// 3️⃣ Find All Unique Substrings of a String
// Instructions:
//  Write a function that takes a string and returns a list of all unique substrings.

// Test Cases:

// - "abc" → ["a","ab","abc","b","bc","c"]
// - "a" → ["a"]
// -  "ab" → ["a","ab","b"]


const uniqueSubstrings = (str) =>  {
    const substrings = new Set();
    for(let start = 0; start < str.length; start++) {
            for(let end = start + 1; end <= str.length; end++) {
                substrings.add(str.slice(start, end));
            };
        };
        return [...substrings];
    };

console.log(uniqueSubstrings("abc")); // ["a","ab","abc","b","bc","c"]
console.log(uniqueSubstrings("a")); // ["a"]
console.log(uniqueSubstrings("ab")); // ["a","ab","b"]


// !    Done!