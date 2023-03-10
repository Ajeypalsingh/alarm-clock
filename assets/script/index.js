'use strict';



const displayTime = document.querySelector('.clock');


function getClock() {
    const today = new Date();
    let minute = today.getMinutes().toString().padStart(2, '0');
    let sec = today.getSeconds().toString().padStart(2, '0');
    let hours = today.getHours().toString().padStart(2, '0');

    displayTime.innerText = `${hours} : ${minute} : ${sec}`;
}

setInterval(getClock, 1000)

const alarmSound = new Audio('./assets/audio/alarm-clock-sound.mp3');
alarmSound.type = 'audio/mp3';

const output = document.querySelector('h4');
const input = document.querySelector("#alarmTime")
const setAlarm = document.querySelector('.start-alarm')


setAlarm.addEventListener('click', function () {
    output.innerText = input.value;
    const value = input.value;
    

    const inputTime = document.getElementById("alarmTime").value;
    // Parse the input time into hours and minutes
    const hoursMinutes = inputTime.split(":");
    const hours = parseInt(hoursMinutes[0]);
    const minutes = parseInt(hoursMinutes[1]);
    
    const currentDate = new Date();
    const alarmDate = new Date();
    alarmDate.setHours(hours, minutes, 0);
    
    let timeRemaining = alarmDate.getTime() - currentDate.getTime();
    
    // If the alarm time is in the past, add 24 hours to the alarm date
    if (timeRemaining < 0) {
        alarmDate.setDate(alarmDate.getDate() + 1);
        timeRemaining = alarmDate.getTime() - currentDate.getTime();
    }
    setTimeout(() => { alarmSound.play() }, timeRemaining);
});