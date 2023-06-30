"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var input = fs.readFileSync("./input.txt", "utf-8");
var inputArray = input.split("\n");
function findMax() {
    var max = [0, 0, 0];
    var sum = 0;
    var _loop_1 = function (num) {
        if (num === "") {
            var min_1 = Math.min.apply(Math, max);
            var index = max.findIndex(function (num) { return num == min_1; });
            sum > min_1 && index != -1 && (max[index] = sum);
            sum = 0;
            return "continue";
        }
        sum += Number(num);
    };
    for (var _i = 0, inputArray_1 = inputArray; _i < inputArray_1.length; _i++) {
        var num = inputArray_1[_i];
        _loop_1(num);
    }
    return max.reduce(function (a, b) { return a + b; });
}
console.log(findMax());
