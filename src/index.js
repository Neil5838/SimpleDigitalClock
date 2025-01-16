//Date in header
const date = document.getElementById("date");

let options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

date.innerHTML = new Date().toLocaleString('en-US', options);


//Time in main
const timeDiv = document.getElementById('time');

//function to update in every second
function updateClock() {
    //This one goes through all understandings
    // const now = new Date();
    // let h = now.getHours();
    // const m = now.getMinutes().toString().padStart(2, '0');
    // const s = now.getSeconds().toString().padStart(2, '0');

    // const amPm = h >= 12 ? 'PM' : "AM";
    // h = (h % 12) || 12;

    // timeDiv.innerHTML = `${h.toString().padStart(2, '0')}:${m}:${s} ${amPm}`;

    //this is precise way though
    const now = new Date().toLocaleTimeString("ne-NP", {
        hour: '2-digit', // Two-digit hour (01, 12, etc.)
        minute: '2-digit', // Two-digit minute (01, 59, etc.)
        second: '2-digit', // Two-digit second (00, 59, etc.)
        hour12: true, // Use 12-hour clock (AM/PM)
        timeZone: "Asia/Kathmandu" // Set Nepal Standard Time (NPT, UTC+5:45)
      });
    timeDiv.innerHTML = now;
};

setInterval(updateClock, 1000);
updateClock();