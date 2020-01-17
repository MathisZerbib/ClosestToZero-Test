function calculateClosestTo0 (arr) {
    return arr.reduce((acc, x) =>
        acc === 0 ? x :
        x > 0 && x <= Math.abs(acc) ? x :
        x < 0 && -x < Math.abs(acc) ? x : acc
    , 0)
}

let tests = [
    // Single element:
    { array: [5], result: 5 },
    { array: [-5], result: -5},
    // Positive element is closer to zero:
    { array: [-3, 2], result: 2 },
    { array: [1, -2, 3, -4], result: 1 },
    // Negative element is closer to zero:
    { array: [-2, 3], result: -2 },
    { array: [-1, 2, -3, 4], result: -1 },
    // Two elements with same distance but opposite sign:
    { array: [1, -1], result: 1},
    { array: [-1, 1], result: 1},
    { array: [0, 1, -1], result: 1},
    { array: [1, 0, -1], result: 1},
    { array: [1, -1, 0], result: 1},
    { array: [0, -1, 1], result: 1},
    { array: [-1, 0, 1], result: 1},
    { array: [-1, 1, 0], result: 1},
    // Only elements of same sign:
    { array: [4, 2, 3], result: 2},
    { array: [-4, -2, -3], result: -2},
    // Empty array, or only zeros:
    { array: [], result: 0},
    { array: [0, 0, 0, 0], result: 0},
    // Closest element is at front, medium, or tail position:
    { array: [2, 0, -2, 0, -3], result: 2},
    { array: [-2, 0, 2, 0, -3], result: 2},
    { array: [-2, 0, -3, 0, 2], result: 2},
    
   // Test from GoJob:
    {array: [8, 5, 10], result: 5},
    {array: [5, 4, -9, 6, -10, -1, 8], result: -1},
    {array: [8, 2, 3, -2], result: 2 }
]

for (let i = 0; i < tests.length; i++) {
    console.log(calculateClosestTo0(tests[i].array))
}

