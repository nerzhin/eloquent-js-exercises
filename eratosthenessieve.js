'use strict';

//Eratosthenes sieve

var n = 100;
var arr = [];
var total = 0;
var prime = 2;

for (var i = 2; i < n; i++) {
    arr[i] = true;
};

do {
    for (var j = 2 * prime; j <= n; j += prime) {
        arr[j] = false;
    };

    for (var k = prime + 1; k <= n; k++) {
        if (arr[k]) break;
    };

    prime = k;
} while (Math.sqrt(prime) < n);

for (var g = 0; g < arr.length; g++) {
    if (arr[g]) total += g;
};
