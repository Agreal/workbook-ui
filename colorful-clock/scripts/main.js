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

            aClock.hour.progress(current.hour);
            aClock.minute.progress(current.minute);
            aClock.second.progress(current.second);
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
            progress: function (hour) {
                $hour.find('.progress').css(rotatedHourStyle(hour, '#09c', '#9cf'));
            }
        },
        minute: {
            text: function (hour) {
                $minute.find('strong').text(hour);
            },
            progress: function (minute) {
                $minute.find('.progress').css(rotatedSecondStyle(minute, '#09c', '#9cf'));
            }
        },
        second: {
            text: function (hour) {
                $second.find('strong').text(hour);
            },
            progress: function (second) {
                $second.find('.progress').css(rotatedSecondStyle(second, '#09c', '#9cf'));
            }
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

function rotatedHourStyle(second, darkerColor, lighterColor) {
    var unitDeg, deg, color;

    unitDeg = 360 / 12;

    if (second < 6) {
        deg = unitDeg * second;
        color = lighterColor;
    } else {
        deg = unitDeg * second + 180;
        color = darkerColor;
    }

    return getRotatedStyle(deg, color);
}

function rotatedSecondStyle(second, darkerColor, lighterColor) {
    var unitDeg, deg, color;

    unitDeg = 360 / 60;

    if (second < 30) {
        deg = unitDeg * second;
        color = lighterColor;
    } else {
        deg = unitDeg * second + 180;
        color = darkerColor;
    }

    return getRotatedStyle(deg, color);
}

function getRotatedStyle(deg, color) {
    return {
        'border-color': color,
        'transform': 'rotate(' + deg + 'deg)'
    };
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