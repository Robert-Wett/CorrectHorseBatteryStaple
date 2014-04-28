var dictArray = [];
var numWords  = process.argv[2] || 4;
var fs        = require('fs');
var _         = require('underscore');

// http://stackoverflow.com/a/15494283/369706
var lines = fs.readFileSync('./modules/reduced-brit-a-z.txt', 'utf8').split('\n');
for (var l in lines){
  var line = lines[l];
  if (line) {
    dictArray.push(line);
    // Instead of doing this stuff everytime, I've just altered the
    // data source to include these changes
    // dictArray.push(line[0].toUpperCase() + line.slice(1));
  }
}

var max = dictArray.length;

function buildPassword(num) {
  num = num || 4;
  var ret = [];
  for (var i = 0; i < num; i++) {
    var word = dictArray[_.random(0, max)];
    ret.push(word);
  }
  return {
    numWords: num,
    pass: ret.join(" . ")
  };
}

module.exports = {
  getPass: buildPassword
};