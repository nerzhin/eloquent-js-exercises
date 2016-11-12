'use strict';
//Chess Board
var output = '';
var size = 8;

for ( var i = 0; i < size; i++ ) {
  for ( var j = 0; j < size; j++ ) {
    if ( (i+j) % 2 == 0 ) {
      output += '#';
    } else {
      output += ' ';
    };
  };
  
  output += '\n';

};

console.log(output);
