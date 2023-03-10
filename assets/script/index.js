'use strict';




function getClock() {
    const today = new Date();
    let minute = today.getMinutes().toString().padStart(2, '0');
    let sec = today.getSeconds().toString().padStart(2, '0');
    let hours = today.getHours().toString().padStart(2, '0');

    document.getElementById('hrs').innerHTML = hours;
    document.getElementById('minutes').innerHTML = minute;
    document.getElementById('seconds').innerHTML = sec;

}

setInterval(getClock, 1000)