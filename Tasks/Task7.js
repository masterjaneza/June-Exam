// 7️⃣ Find Pairs with Given Sum
// Instructions:
//  Write a function that returns all pairs of numbers from a list that add up to a given target sum.

// Test Cases:

//  - [1,2,3,4], 5 → [(1,4),(2,3)]
//  - [0,0,1,1], 1 → [(0,1),(0,1)]
//  - [5,5,5], 10 → [(5,5),(5,5),(5,5)]
//  - [1], 2 → []
//  - [], 0 → []


const findPairsWithSum = (arr, target) => {
    let pairs = [];
    for(let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            if(arr[i] + arr[j] === target) pairs.push([arr[i], arr[j]])
        };
    };
    return pairs;
};

// Test Cases
console.log(findPairsWithSum([1,2,3,4], 5)); // [(1,4),(2,3)]
console.log(findPairsWithSum([0,0,1,1], 1)); // [(0,1),(0,1)]
console.log(findPairsWithSum([5,5,5], 10)); // [(5,5),(5,5),(5,5)]
console.log(findPairsWithSum([1], 2)); // []
console.log(findPairsWithSum([], 0)); // []