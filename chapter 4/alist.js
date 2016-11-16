'use strict';

var x = [10, 20, 30, 40, 50];


function prepend(value, list) {
    if (list == undefined) {
        return {
            value: value,
            rest: null
        };
    } else {
        return {
            value: value,
            rest: list
        };
    };
}

function arrayToList(arr) {
    var list;
    for (var i = arr.length - 1; i >= 0; i--) {
        list = prepend(arr[i], list);
    };
    return list;
}

function listToArray(list) {
    var arr = [];
    for (var node = list; node; node = node.rest) {
        arr.push(node.value);

    };
    return arr;
}

function nth(list, n) {
    if (!list) {
        return undefined;
    } else if (n == 0) {
        return list.value;
    } else {
        return nth(list.rest, n - 1)
    }
}


/* obj = {
	value: 10,
	rest: {
		value:20,
		rest: {
			value: 30,
			rest: null
		}
	}
}

obj -> [10,20,30]

index 0 -> obj.value
index 1 -> obj.rest.value
index 2 -> obj.rest.rest.value
index 3 -> obj.rest.rest.rest.value
et cetera

*/
