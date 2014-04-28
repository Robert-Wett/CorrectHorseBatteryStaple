var password = require('../modules/passwordGenerator.js');
/*
 * GET home page.
 */

var getPass = function (num) {
    num = num || 4;
    var _password = password(num);
    return _password;
};

var index = function(req, res) {
  var num = req.params.num || 4;
  var pass = password.getPass(num);
  res.render('index', {
    pass: pass.pass,
    topTitle: 'CHBS',
    title: 'Correct Horse Battery Staple',
    subHeader: "click to get a new password"
  });
};

var api = function(req, res) {
  var num = req.params.num || 4;
  var pass = password.getPass(num, true);
  res.writeHead(200, {'Content-Type': 'text/json' });
  res.write(pass.pass);
  res.end();
}

exports.index = index;
exports.api   = api;