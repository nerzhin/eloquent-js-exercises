'use strict';

//A Vector Type

function Vector(x, y) {
    this.x = x;
    this.y = y;
};

Vector.prototype.plus = function(obj) {
    return new Vector(obj.x + this.x, obj.y + this.y);
};
Vector.prototype.minus = function(obj) {
    return new Vector(this.x - obj.x, this.y - obj.y);
};

Object.defineProperty(Vector.prototype, "length", {
    get: function() {
        return Math.ceil(Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2)));
    }
});
