var dictArray = [];
var fs        = require('fs');
var _         = require('underscore');

var lines = fs.readFileSync('./modules/reduced-brit-a-z.txt', 'utf8').split('\n');
_.map(lines, function(line) {
  dictArray.push(line);
});


// We'll just assume 4 for now, don't want to deal with
// odds for a stupid little feature like this.
function buildAlliterativePassword(json) {
  var num = 4;
  var alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  // shorthand to cut down on the passed variables
  var len = alpha.length - 1;
  var firstBank = [];
  var secondBank = [];
  var firstChar = alpha[_.random(0, len)];
  var secondChar;
  var word;
  var i;

  while (true) {
    secondChar = alpha[_.random(0, len)];
    if (secondChar !== firstChar)
      break;
  }

  // Build up the two separate lists
  _.map(dictArray, function(word) {
    if (word[0] === firstChar) {
      firstBank.push(word);
    } else if (word[0] === secondChar) {
      secondBank.push(word);
    }
  });


  var wordBank = [];
  var returnValue;
  for (i = 0; i < 2; i++) {
    word = firstBank[_.random(0, firstBank.length)].trim();
    wordBank.push(word);
  }

  for (i = 0; i < 2; i++) {
    word = secondBank[_.random(0, secondBank.length)].trim();
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

function buildPassword(num, json) {
  num = num || 4;
  var wordBank = [];
  var returnValue;
  for (var i = 0; i < num; i++) {
    var word = dictArray[_.random(0, dictArray.length)].trim();
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
  getPass: buildPassword,
  getAlliterative: buildAlliterativePassword
};
