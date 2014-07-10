/**
 * What's this route for?
 *
 * I haven't implemented any kind of security for the main site. Everything is
 * transmitted via plaintext, so it's easy to see what passwords were served
 * to the client. Of course, the attacker would have no idea as to whether you
 * used what password (although, you can pretty much assume the chances that
 * the last password displayed is the accepted/used password are pretty high)
 * but the bucket of available passwords to add to their cracking algo would
 * be low and prove useful. This route sends down the full dictionary file and
 * takes care of the password generation locally, so there's no way an attacker
 * could grep your generated passwords. Still, the dictionary is readily available
 * and if the attacker thought the target used this website to generate passwords,
 * it wouldn't be hard to rip through this 2MB dict file. You can also designate
 * how many words you want to be returned in the password string, so this helps
 * the security somewhat.
 */


// Application Holder
var CHBS = {};

CHBS.dict = $.getJSON("dictionary.json", function(dict) {
  return dict;
})

CHBS.buildPassword = function(num) {
  var wordBank = []
    , returnValue;
  num = num || 4;

  for (var i = 0; i < num; i++) {
    var word = dict[_.random(0, dict.length)].trim();
    wordBank.push(word);
  }

  returnValue = wordBank.join(" . ");

  return {
    numWords: num,
    pass: returnValue
  };
}

CHBS.loadNewPass = function() {
  var password;

    $(".container-full.fadeMe").fadeOut(250, function() {
      password = CHBS.buildPassword();
      $(".holder").html(password[pass]);
      $(".container-full.fadeMe").fadeIn(250);
    });
};
