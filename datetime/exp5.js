const targetDateInput = document.getElementById("target_date");
const daysElement = document.getElementById("daysValue");
const hoursElement = document.getElementById("hoursValue");
const minutesElement = document.getElementById("minutesValue");
const secondsElement = document.getElementById("secondsValue");
const countdownExpiredElement = document.getElementById("countdown_expired");

function calculateRemainingTime() {
    const targetDate = new Date(targetDateInput.value).getTime();
    const currentDate = new Date().getTime();

    if (isNaN(targetDate) || targetDate <= currentDate) {
        // If the input is invalid or the target date has passed
        daysElement.textContent = '0';
        hoursElement.textContent = '0';
        minutesElement.textContent = '0';
        secondsElement.textContent = '0';
        countdownExpiredElement.textContent = "Countdown Expired or Invalid Date";
        return;
    }

    const difference = targetDate - currentDate;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    // Update the countdown timer
    daysElement.textContent = days;
    hoursElement.textContent = hours;
    minutesElement.textContent = minutes;
    secondsElement.textContent = seconds;
    countdownExpiredElement.textContent = ""; 
}

function startCountdown() {
    calculateRemainingTime();
    setInterval(calculateRemainingTime, 1000); 
}

targetDateInput.addEventListener("change", startCountdown);
