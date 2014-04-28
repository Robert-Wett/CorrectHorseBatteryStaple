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
    subHeader: "refresh to get a new password"
  });
};

exports.index = index;