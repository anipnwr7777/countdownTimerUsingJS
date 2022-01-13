const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');


function calculateTimeDifference(){
    const futureDate = new Date(2023, 0, 1);
    const currentDate = new Date();
    const timeDifferenceInSeconds = (futureDate - currentDate) / 1000; // this will conver the number of miliseconds to seconds

    const numberOfSecondsInDay = 3600 * 24;
    const days = Math.floor(timeDifferenceInSeconds / numberOfSecondsInDay);
    let secondsRemaining = timeDifferenceInSeconds % numberOfSecondsInDay;

    const hours = Math.floor(secondsRemaining / 3600);
    secondsRemaining = secondsRemaining % 3600;

    const minutes = Math.floor(secondsRemaining / 60);
    secondsRemaining = secondsRemaining % 60;

    const seconds = Math.floor(secondsRemaining);

    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minutesEl.innerHTML = minutes;
    secondsEl.innerHTML = seconds;
}

calculateTimeDifference();

setInterval(calculateTimeDifference, 1000);