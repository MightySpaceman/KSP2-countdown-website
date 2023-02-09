const futureDate = new Date("2023-2-25");
const currentDate = new Date();
const timezoneDifference = currentDate.getTimezoneOffset();
const oneDay = 24 * 60 * 60 * 1000; // milliseconds in a day
const diffMs = futureDate - currentDate + timezoneDifference * 60 * 1000;
const diffDays = Math.round(diffMs / oneDay);

document.getElementById("countdown").innerHTML = `[ ${diffDays} ]`;