$(function () {
    var aClock = initClock();
    aClock.refresh();

    setInterval(aClock.refresh, 1000);
});

function initClock() {
    var aClock = Clock();
    return {
        refresh: function () {
            var now = new Date();
            aClock.hour(now.getHours());
            aClock.minute(now.getMinutes());
            aClock.second(now.getSeconds());
        }
    };
}

function Clock() {
    var $hour = $('.hour');
    var $minute = $('.minute');
    var $second = $('.second');
    var setText = function ($obj, text) {
        $obj.find('strong').text(text);
    };
    var setProgress = function ($obj, style) {
        $obj.find('.progress').css(style);
    };
    return {
        hour: function (hour) {
            setText($hour, hour);
            var hourResult = handleHour(hour);
            setProgress($hour, getRotatedStyle(hourResult.deg, hourResult.color));
        },
        minute: function (minute) {
            setText($minute, minute);
            var minuteResult = handleMinute(minute);
            setProgress($minute, getRotatedStyle(minuteResult.deg, minuteResult.color));
        },
        second: function (second) {
            setText($second, second);
            var secondResult = handleSecond(second);
            setProgress($second, getRotatedStyle(secondResult.deg, secondResult.color));
        }
    };
}

function handleHour(hour) {
    var lessHalf = hour < 6;
    var deg = getDeg(lessHalf, hour, 360 / 12);
    var color = getHourColor(lessHalf, '#9cf', '#09c');
    return {deg: deg, color: color};
}
function handleMinute(minute) {
    var lessHalf = minute < 30;
    var deg = getDeg(lessHalf, minute, 360 / 60);
    var color = getHourColor(lessHalf, '#9cf', '#09c');
    return {deg: deg, color: color};
}
function handleSecond(second) {
    var lessHalf = second < 30;
    var deg = getDeg(lessHalf, second, 360 / 60);
    var color = getHourColor(lessHalf, '#9cf', '#09c');
    return {deg: deg, color: color};
}

function getDeg(lessHalf, times, unitDeg) {
    var deg = unitDeg * times;
    return lessHalf ? deg : deg - 180;
}

function getHourColor(lessHalf, lighterColor, darkerColor) {
    return lessHalf ? lighterColor : darkerColor;
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