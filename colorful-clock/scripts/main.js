$(function () {
    var aClock = initClock();
    aClock.refresh();

    setInterval(aClock.refresh, 1000);
});

function initClock() {
    var aClock = clock();
    return {
        refresh: function () {
            var current = now();
            aClock.hour.text(current.hour);
            aClock.minute.text(current.minute);
            aClock.second.text(current.second);
        }
    };
}

function clock() {
    var $hour = $('.hour');
    var $minute = $('.minute');
    var $second = $('.second');
    return {
        hour: {
            text: function (hour) {
                $hour.find('strong').text(hour);
            },
            $progress: $hour.find('.progress')
        },
        minute: {
            text: function (hour) {
                $minute.find('strong').text(hour);
            },
            $progress: $minute.find('.progress')
        },
        second: {
            text: function (hour) {
                $second.find('strong').text(hour);
            },
            $progress: $second.find('.progress')
        }
    };
}

function now() {
    var date = new Date();
    return {
        hour: date.getHours(),
        minute: date.getMinutes(),
        second: date.getSeconds()
    };
}

function getDeg() {

    return 0;
}

function initIframe() {
    var counter = 0;
    $('#btn').click(function () {
        var $iframe = $('#iframe');
        if (counter % 2 === 0) {
            //console.log(counter);
            $iframe.attr('src', $iframe.data('src'));
        } else {
            $iframe.attr('src', '');
            //console.log(counter);
        }
        counter++;
    });
}