'use strict';

function reverseArray(arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        newArr.unshift(arr[i]);
    };
    return newArr;
}

function reverseArrayInPlace(arr) {
    for (var i = 0; i < Math.floor(arr.length / 2); i++) {
        var old = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = old;
    };
    return arr;
}

var x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(x);
reverseArrayInPlace(x);
console.log(x);
