const secondsHand = document.getElementById("seconds-hand");
const minutesHand = document.getElementById("minutes-hand");
const hoursHand = document.getElementById("hours-hand");

function displayTime() {
  const nowTime = new Date();
  const seconds = nowTime.getSeconds();
  const minutes = nowTime.getMinutes();
  const hours = nowTime.getHours();
  const timeInterval = 6;

  secondsHand.style.transform = "rotate(" + seconds * timeInterval + "deg)";
  minutesHand.style.transform = "rotate(" + minutes * timeInterval + "deg)";
  hoursHand.style.transform = "rotate(" + (hours * 30 + minutes / 2) + "deg)";
}

setInterval(displayTime);
