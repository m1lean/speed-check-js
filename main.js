function checkSpeed() {
  var startTime, endTime;
  var fileSize = 5 * 1024 * 1024; // 5 MB file size
  var download = new Image();

  download.onload = function () {
    endTime = (new Date()).getTime();
    showResults(fileSize, startTime, endTime);
  }

  startTime = (new Date()).getTime();
  var cacheBuster = "?nnn=" + startTime;
  download.src = "https://example.com/speedtest/5mb.jpg" + cacheBuster;
}

function showResults(fileSize, startTime, endTime) {
  var duration = (endTime - startTime) / 1000;
  var bitsLoaded = fileSize * 8;
  var speedBps = (bitsLoaded / duration).toFixed(2);
  var speedKbps = (speedBps / 1024).toFixed(2);
  var speedMbps = (speedKbps / 1024).toFixed(2);

  console.log("Your internet speed is:");
  console.log(speedMbps + " Mbps");
}

checkSpeed();
