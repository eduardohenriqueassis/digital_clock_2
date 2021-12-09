setInterval(function showTime() {
  let date = new Date();
  let h = date.getHours(); // 0 - 23
  let m = date.getMinutes(); // 0 - 59
  let s = date.getSeconds(); // 0 - 59
  // 0 - 6
  let session;

  h > 12 ? (session = "PM") : (session = "AM");
  h > 12 ? (h = h - 12) : h;

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  let time = `${h}:${m}`;
  document.getElementById("hour").innerText = time;
  document.getElementById("seconds").innerText = s;
  // document.getElementById("session").innerText = session;
}, 1000);

function getDay() {
  const weekday = ["SU", "MO", "TU", "WE", "TH", "FR", "SA"];
  let d = new Date();
  let day = weekday[d.getDay()];
  document.getElementById("week").innerText = day;
}

function getMonth() {
  const allMonth = [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
  ];

  const date = new Date();
  let m = date.getMonth();
  let d = date.getDate();
  let month = allMonth[m];
  let monthDay = `${m}-${d}`;
  document.getElementById("month-day").innerText = monthDay;
}
getDay();
getMonth();
