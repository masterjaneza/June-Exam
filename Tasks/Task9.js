// 9️⃣ Find Longest Palindromic Substring
// Instructions:
//  Write a function that finds the longest palindromic substring in a given string.

// Test Cases:

// "babad" → "bab" or "aba"
// "cbbd" → "bb"
// "a" → "a"
// "" → ""
// "forgeeksskeegfor" → "geeksskeeg"



const longestPalindrome = s => {
    let res = '';
    for(let i = 0; i < s.length; i++) {
        for(let j of [i, i + 1]) {
            let l = i;
            let r = j;
            while(s[l] && s[l] === s[r]) {
                if(r - l + 1 > res.length) res = s.slice(l, r+1)
                    l--; r++;
            };
        };
    };
    return res;
};

console.log(longestPalindrome("babad"));
console.log(longestPalindrome("cbbd"));
console.log(longestPalindrome("a"));
console.log(longestPalindrome(""));
console.log(longestPalindrome("forgeeksskeegfor"));


// ! Done!

