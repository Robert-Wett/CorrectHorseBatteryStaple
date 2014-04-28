var loadNewPass = function() {
    var url = '/api';
    $(".holder").fadeOut(250, function() {
        $.ajax(url).success(function(data) {
            var display = data.join(" . ");
            $(".holder").html(display);
            $(".holder").fadeIn(250);
        });
    });
};
