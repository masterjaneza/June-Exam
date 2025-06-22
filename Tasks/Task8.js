// 8️⃣ Rotate List by K Positions

// Instructions:
//  Write a function that rotates a list to the right by k positions.

// Test Cases:

// [1,2,3,4,5], 2 → [4,5,1,2,3]
// [1,2,3], 1 → [3,1,2]
// [1], 0 → [1]
// [], 3 → []
// [1,2,3,4], 4 → [1,2,3,4]



const rotateListByK = (arr, k) => {
    if(!arr.length) return [];
    k %= arr.length;
    return arr.slice(-k).concat(arr.slice(0, -k))
};

console.log(rotateListByK( [1,2,3,4,5], 2)) 
console.log(rotateListByK( [1,2,3], 1)) 
console.log(rotateListByK( [1], 0 )) 
console.log(rotateListByK( [], 3)) 
console.log(rotateListByK( [1,2,3,4], 4)) 