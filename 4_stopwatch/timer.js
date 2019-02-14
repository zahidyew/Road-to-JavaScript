class Timer {
    constructor(elem) {
        var timer       = createTimer(),
            plusButton  = createButton("+", plus),
            minusButton = createButton("-", minus),
            br          = document.createElement("br"),
            startButton = createButton("start", start),
            stopButton  = createButton("stop", stop),
            alarm       = new Audio('./alarmSound.mp3'),
            myInterval,
            seconds     = 0,
            minutes     = 0;

        elem.appendChild(timer);
        elem.appendChild(plusButton);
        elem.appendChild(minusButton);
        elem.appendChild(br);
        elem.appendChild(startButton);
        elem.appendChild(stopButton);

        render();

        function createTimer() {
            return document.createElement("span");
        }

        function createButton(action, handler) {
            var anchor = document.createElement("a");
            anchor.href = "#" + action;
            anchor.innerText = action;
            anchor.addEventListener("click", function(event) {
                handler();
                event.preventDefault();
            });
            return anchor;
        }

        function plus() {
            if (seconds < 59)
                seconds += 1;
            render();
        }

        function minus() {
            if (seconds > 0)
                seconds -= 1;
            render();
        }

        function playAlarmSound() {
            if (seconds == 0) {
                alarm.play();
                //alarm.loop = true;
            }
            else    
                minus();
        }

        function start() {
            myInterval = setInterval(playAlarmSound,1000);
        }

        function stop() {
            clearInterval(myInterval);
            if (alarm.played) {
                alarm.pause();
                alarm.currentTime = 0;
            }
            //myInterval = null;
        }

        function render() {
            timer.innerText = minutes + " : " + seconds;
        }
    }
}

var elems = document.getElementById("timer");
new Timer(elems);