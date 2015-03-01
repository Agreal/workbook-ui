$(function () {
    var counter = 0;
    $('#btn').click(function () {
        if (counter%2 === 0) {
            console.log(counter);
            $('#iframe').attr('src', $('#iframe').data('src'));
        } else {
            $('#iframe').attr('src', '');
            console.log(counter);
        }
        counter++;
    });
});