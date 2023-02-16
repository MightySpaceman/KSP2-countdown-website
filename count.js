const countdown = document.getElementById('countdown');
const countdownDate = new Date('2023-03-01T00:00:00').getTime(); // replace with release date

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