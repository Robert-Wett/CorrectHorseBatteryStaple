var dictArray = [];
var fs        = require('fs');
var _         = require('underscore');

var lines = fs.readFileSync('./modules/reduced-brit-a-z.txt', 'utf8').split('\n');
_.map(lines, function(line) {
  dictArray.push(line);
})


// We'll just assume 4 for now, don't want to deal with
// odds for a stupid little feature like this.
function buildAlliterativePassword(json) {
  num = 4;
  var alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var firstBank = [];
  var secondBank = [];
  var firstChar = alpha[_.random(0, alpha.length)];
  console.log(firstChar);
  var secondChar;

  while (true) {
    secondChar = alpha[_.random(0, alpha.length)];
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
  for (var i = 0; i < 2; i++) {
    var word = firstBank[_.random(0, firstBank.length)].trim();
    wordBank.push(word);
  }

  for (var i = 0; i < 2; i++) {
    var word = secondBank[_.random(0, secondBank.length)].trim();
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
