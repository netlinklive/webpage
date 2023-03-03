  var countDownDate1 = new Date("March 4, 2023 00:00:00").getTime();
  var x1 = setInterval(function() {
  var now1 = new Date().getTime();
  
    var distance1 = countDownDate1 - now1;
    var endLive1 = new Date("March 4, 2022 18:00:00").getTime() - now1;
    var days1 = Math.floor(distance1 / (1000 * 60 * 60 * 24));
    var hours1 = Math.floor((distance1 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes1 = Math.floor((distance1 % (1000 * 60 * 60)) / (1000 * 60));
    var seconds1 = Math.floor((distance1 % (1000 * 60)) / 1000);
    document.getElementById("demo1").innerHTML = days1 + "​ថ្ងៃ " + hours1 + "ម៉ោង "
    + minutes1 + ":" + seconds1 + " "; 
    if (seconds1 < 0) {
      //clearInterval(x);
      document.getElementById("demo1").innerHTML = "LIVE";
    }
    if(endLive1 < 0){
      
      document.getElementById("demo1").innerHTML = "END Live";
    }
  }, 1000);
