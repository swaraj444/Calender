const date = document.querySelector(".date"),
  day = document.querySelector(".day"),
  month = document.querySelector(".month"),
  year = document.querySelector(".year");

const today = new Date();

const currentDate = today.getDate(),
  currentDay = today.getDay(),
  currentMonth = today.getMonth(),
  currentYear = today.getFullYear();
const weekDays = [
  "sunday",
  "Monday",
  "Tuseday",
  "Wednesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
];
const Month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
Date.innerText = `${currentDate}`;
day.innerText = `${weekDays[currentDay]}`;
Month.innerText = `${Month[currentMonth]}`;
year.innerText = `${currentYear}`;

function clock() {
  let hours = document.getElementById("hours");

  let minutes = document.getElementById("min");

  let seconds = document.getElementById("sec");

  let period = document.getElementById("period");

  let h = new Date().getHours();

  let m = new Date().getMinutes();

  let s = new Date().getSeconds();

  let ampm = h >= 12 ? "PM" : "AM";

  if (h > 12) {
    h = h - 12;
  }
  h = h < 10 ? "0" + h : h;

  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;
  hours.innerHTML = h;
  minutes.innerHTML = m;
  seconds.innerHTML = s;
  period.innerHTML = ampm;
}
setInterval(clock, 1000);

