"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var task2_ts_1 = require("./task2.ts");
var tescase = [
    {
        input: ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'],
        expected: [['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat']]
    },
    {
        input: ['a', 'b', 'c'],
        expected: [['a'], ['b'], ['c']]
    },
    {
        input: [123],
        expected: 'Invalid'
    },
    {
        input: ['a', 0 / 0],
        expected: 'Invalid'
    },
    {
        input: null,
        expected: 'Invalid'
    },
    {
        input: [1, 2, 4],
        expected: 'Invalid'
    },
    {
        input: ['a', 'a', 'b', 'cd'],
        expected: [['a', 'a'], ['b'], ['cd']]
    },
    {
        input: 123,
        expected: 'Invalid'
    }
];
tescase.forEach(function (item, index) {
    var output = (0, task2_ts_1.groupAnagram)(item.input);
    var pass = JSON.stringify(output) === JSON.stringify(item.expected);
    console.log("----".concat(index + 1, "-----"));
    console.log("Test ".concat(index + 1, ":"), pass ? 'Passed' : 'Failed');
    console.log("Expected:".concat(item.expected));
    console.log("Output ".concat(output));
});
