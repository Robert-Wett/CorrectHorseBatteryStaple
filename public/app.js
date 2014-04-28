var loadNewPass = function() {
    var url = '/api';
    $(".container-full.fadeMe").fadeOut(250, function() {
        $.ajax(url).success(function(data) {
            var display = data.join(" . ");
            $(".holder").html(display);
            $(".container-full.fadeMe").fadeIn(250);
        });
    });
};
