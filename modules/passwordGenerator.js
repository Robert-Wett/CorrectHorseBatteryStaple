var dictArray = [];
var numWords  = process.argv[2] || 4;
var fs        = require('fs');
var _         = require('underscore');
var ret = [];

// http://stackoverflow.com/a/15494283/369706
var lines = fs.readFileSync('./brit-a-z.txt', 'utf8').split('\n');
for (var l in lines){
  if (lines[l].length > 3 && lines[l].length < 10 && lines[l].indexOf('\'') === -1) {
    var line = lines[l];
    dictArray.push(line[0].toUpperCase() + line.slice(1));
  }
}

var max = dictArray.length;
for (var i = 0; i < numWords; i++) {
  var word = dictArray[_.random(0, max)];
  ret.push(word.slice(0, -1));
}

console.log("\n\nYour password comprised of "+ numWords +" random words, my good sir:\n\n" + ret.join("") + "\n");

