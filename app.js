const currentDate = new Date();
const christmasDate = new Date(currentDate.getFullYear(), 11, 25);

const day = 1000 * 60 * 60 *24;

const title = document.body.querySelector("h2");

title.innerHTML = (Math.round(christmasDate.getTime() - currentDate.getTime()) / (day)).toFixed(0) + " days until Christmas!";