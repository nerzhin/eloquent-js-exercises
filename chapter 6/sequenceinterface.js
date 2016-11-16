//Sequence Interface

'use strict';

function Arrayseq(arr) {
    this.array = arr;
    this.position = -1;
}

function Rangeseq(from, to) {
    this.position = from - 1;
    this.to = to;
}

function logFive(obj) {
    for (var i = 0; i < 5; i++) {
        if (!obj.next()) {
            break;
        };
        console.log(obj.current());
    }
}

Arrayseq.prototype.next = function() {
    if (this.position >= this.array.length - 1) {
        return false;
    }

    this.position++;
    return true;
};

Arrayseq.prototype.current = function() {
    return this.array[this.position];
};

Rangeseq.prototype.next = function() {
    if (this.position >= this.to) {
        return false;
    };

    this.position++;
    return true;
};

Rangeseq.prototype.current = function() {
    return this.position;
};
