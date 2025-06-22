// 2️⃣ Convert a List to a Dictionary
// Instructions:
//  Write a function that converts a list of key-value pair tuples into a dictionary.
// Test Cases:
// [('a', 1), ('b', 2)] → {'a': 1, 'b': 2}

// [] → {}

// [('x', 10)] → {'x': 10}

// [('a', 1), ('a', 2)] → {'a': 2}

// [('one', 1), ('two', 2)] → {'one1, 'two': 2}



const arrToObj = (arr) => {
    let obj = {};
    for(let [key, value] of arr) {
        obj[key] = value;
    };
    return obj;
};


// Test Cases
console.log(arrToObj([['a', 1], ['b', 2]])); // { 'a': 1, 'b': 2 }
console.log(arrToObj([])); // {}        
console.log(arrToObj([['x', 10]])); // { 'x': 10 }
console.log(arrToObj([['a', 1], ['a', 2]]));
// { 'a': 2 }
console.log(arrToObj([['one', 1], ['two', 2]]));


// ! Done!