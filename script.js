const currentDayText = document.querySelector("#currentDayOfTheWeek");
const currentUTCTime = document.getElementById("currentUTCTime");
const date = new Date();

const generateCurrentDate = () => {
  const daysOfTheWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayIndex = date.getDay();
  const currentDay = daysOfTheWeek[dayIndex];
  currentDayText.innerText = currentDay;
};

const generateUTCTime = () => {
  const date = new Date();
  const utcTimeMilliseconds = date.getTime();
  currentUTCTime.textContent = utcTimeMilliseconds;
};

generateCurrentDate();
generateUTCTime();
setInterval(generateUTCTime, 1000);
