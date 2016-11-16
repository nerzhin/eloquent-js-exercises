'use strict';

function countBs(str) {
    var counter = 0;
    for (var i = 0; i < str.length - 1; i++) {
        if (str.charAt(i) == 'B') {
            counter++;
        };
    };
    return counter;
}

function countChar(str, letter) {
    var counter = 0;
    for (var i = 0; i < str.length - 1; i++) {
        if (str.charAt(i) == letter) {
            counter++;
        };
    };
    return counter;
}

console.log(countBs('heBBllo thereB, BoBby!'));
console.log(countChar('heBBllo thereB, BoBby!', 'e'));
console.log(countChar('heBBllo thereB, BoBby!', 'B'));
