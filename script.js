const Stop=document.getElementById("stopButton");
const Start=document.getElementById("startButton");
const Reset=document.getElementById("resetButton");
const Tens = document.getElementById("tens");
const Seconds = document.getElementById("seconds");
const Minutes = document.getElementById("minutes");

var tens=0; var seconds=0; var minutes=0; var Interval;

function startTimer() {
  console.log("Start!");
  clearInterval(Interval);
  Interval = setInterval(Increase,10);
}

Start.addEventListener('click',startTimer);

Stop.addEventListener('click',function(){
  clearInterval(Interval);
  console.log("Stop!");
}
)

Reset.addEventListener('click',function(){
  console.log("Reset!");
  clearInterval(Interval);
  tens = 0; seconds = 0;
  Tens.innerHTML = "00";
  Seconds.innerHTML = "00";
  Minutes.innerHTML = "00";
})

function Increase(){
  tens++;
//Tens
  if (tens < 10){
    Tens.innerHTML = "0" + tens;
  } else if (tens < 100){
    Tens.innerHTML = tens;
  } else {

//Seconds
    tens = 0;
    Tens.innerHTML = "00";
    seconds++;
    if (seconds < 10){
      Seconds.innerHTML = "0" + seconds;
    }else if (seconds < 60){
      Seconds.innerHTML = seconds;
    }
    else{ 

//Minutes
      seconds = 0;
      minutes++;
      Seconds.innerHTML = "00";

      if (minutes < 10){
        Minutes.innerHTML = "0" + minutes;
      }else{
        Minutes.innerHTML = minutes;
      }
    }
  }
}
