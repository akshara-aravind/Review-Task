"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.groupAnagram = groupAnagram;
//
function groupAnagram(arr) {
    if (!Array.isArray(arr))
        return 'Invalid';
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        if (typeof (arr[i]) !== 'string')
            return 'Invalid';
    }
    arr.forEach(function (item) {
        if (typeof (item) !== 'string')
            return 'Invalid';
        // console.log(typeof(item))
        var sorted = item.split('').sort().join('');
        //   console.log(sorted)
        var team = result.find(function (el) { return el[0].split('').sort().join('') === sorted; });
        if (team) {
            team.push(item);
        }
        else {
            result.push([item]);
        }
    });
    return result;
}
// console.log(groupAnagram(['eat','tea','tan','ate','nat','bat']))
