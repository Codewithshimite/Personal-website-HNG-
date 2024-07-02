const currentDayElement = document.getElementById('currentDay');
const currentUTCTimeElement = document.getElementById('currentUTCTime');

function updateDateTime() {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    currentDayElement.textContent = now.toLocaleDateString(undefined, options);

    const utcOptions = { timeZone: 'UTC', hour12: false, hour: 'numeric', minute: 'numeric', second: 'numeric', };
    currentUTCTimeElement.textContent = `Current UTC Time: ${now.toLocaleTimeString(undefined, utcOptions)}`;
}


updateDateTime();
setInterval(updateDateTime, 1000);
