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
$(function() {
    $(document).keyup(function(evt) {
        evt.preventDefault();
        if (evt.keyCode == 32) {
            loadNewPass();
        }
    }).keydown(function(evt) {
        if (evt.keyCode == 32)
            evt.preventDefault();
    });
})