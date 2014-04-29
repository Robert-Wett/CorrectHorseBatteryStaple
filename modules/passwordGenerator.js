var dictArray = [];
var fs        = require('fs');
var _         = require('underscore');

var lines = fs.readFileSync('./modules/reduced-brit-a-z.txt', 'utf8').split('\n');
_.map(lines, function(line) {
  dictArray.push(line);
})

var max = dictArray.length;

function buildPassword(num, json) {
  num = num || 4;
  var wordBank = [];
  var returnValue;
  for (var i = 0; i < num; i++) {
    var word = dictArray[_.random(0, max)].trim();
    wordBank.push(word);
  }

  if (json) {
    returnValue = JSON.stringify(wordBank);
  } else {
    returnValue = wordBank.join(" . ");
  }

  return {
    numWords: num,
    pass: returnValue
  };
}

module.exports = {
  getPass: buildPassword
};
