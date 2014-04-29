var password = require('../modules/passwordGenerator.js');


module.exports = {
  index: function(req, res) {
    var num = req.params.num || 4;
    var pass = password.getPass(num);
    // Seems dumb now that I've implemented it.
    //var pass = password.getAlliterative();
    res.render('index', {
      pass: pass.pass,
      topTitle: 'CHBS',
      title: 'Correct Horse Battery Staple',
      subHeader: "click to get a new password"
    });
  },


  api: function(req, res) {
    var num = req.params.num || 4;
    var pass = password.getPass(num, true);
    res.writeHead(200, {'Content-Type': 'text/json' });
    res.write(pass.pass);
    res.end();
  }
}
