function calculateClosestTo0 (arr) {
    return arr.reduce((acc, x) =>
        acc === 0 ? x :
        x > 0 && x <= Math.abs(acc) ? x :
        x < 0 && -x < Math.abs(acc) ? x : acc
    , 0)
}
let tests = [  
   // Test from GoJob:
    {array: [8, 5, 10]},
    {array: [5, 4, -9, 6, -10, -1, 8]},
    {array: [8, 2, 3, -2]}
]


for (let i = 0; i < tests.length; i++) {
    console.log(calculateClosestTo0(tests[i].array))
}

