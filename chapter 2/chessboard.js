'use strict';
//Chess Board
var symbolA = '#';
var symbolB = ' ';
var output = '';
var size;

size = 8;

for (var i=0;i<size;i++) {
  for (var j=0;j<size;j++){
    if ((i+j)%2==0) { output+=symbolA } else { output+=symbolB };
    };
  output += '\n';
};

console.log(output);