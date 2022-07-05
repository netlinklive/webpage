  var countDownDate2 = new Date("July 9, 2022 15:00:00").getTime();
  var x2 = setInterval(function() {
  var now2 = new Date().getTime();
  
    var distance2 = countDownDate2 - now2;
    var endLive2 = new Date("July 9, 2022 17:00:00").getTime() - now2;
    var days2 = Math.floor(distance2 / (1000 * 60 * 60 * 24));
    var hours2 = Math.floor((distance2 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes2 = Math.floor((distance2 % (1000 * 60 * 60)) / (1000 * 60));
    var seconds2 = Math.floor((distance2 % (1000 * 60)) / 1000);
    document.getElementById("demo2").innerHTML = days2 + "​ថ្ងៃ " + hours2 + "ម៉ោង "
    + minutes2 + ":" + seconds2 + " "; 
    if (seconds2 < 0) {
      //clearInterval(x);
      document.getElementById("demo2").innerHTML = "LIVE";
    }
    if(endLive2 < 0){
      
      document.getElementById("demo2").innerHTML = "END Live";
    }
  }, 1000);
