'use strict';

function range(start, end) {
    var arr = [];
    for (var i = start; i <= end; i++) {
        arr.push(i);
    };
    return arr;
}

//doesnt working
//returns NaN

function sum(array) {
    var total = 0;
    for (var j = 0; j <= array.length; j++) {
        total += array[j];
    };
    return total;
}

function rangeMod(start, end) {
    var step = arguments[2];
    var arr = [];
    if (step > 0) {
        for (var i = start; i <= end; i += step) {
            arr.push(i);
        };
    } else if (step < 0) {
        for (var j = start; j >= end; j += step) {
            arr.push(j);
        };
    };
    return arr;
}
