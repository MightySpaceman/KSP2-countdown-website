const countdown = document.getElementById('countdown');
const releaseDate = new Date('2023-02-24T14:00:00Z'); // set the release date in UTC
const timezoneOffset = releaseDate.getTimezoneOffset() * 60 * 1000; // get the timezone offset in milliseconds
const countdownDate = releaseDate.getTime() - timezoneOffset; // adjust the release date for the user's timezone

const interval = setInterval(() => {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdown.innerHTML = `[ ${days}:${hours}:${minutes}:${seconds} ]`;

    if (distance < 0) {
        clearInterval(interval);
        countdown.innerHTML = "KSP 2 has been released!";
    }
}, 1000);
