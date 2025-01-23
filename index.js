let defuserEl = document.getElementById("defuser");
let timerEl = document.getElementById("timer");
countdown = 10;

let intervalId = setInterval(() => {
  countdown = countdown - 1;
  timerEl.textContent = countdown;

  if(countdown === 0){
    timerEl.textContent = "BOOM!!"
    timerEl.classList.add("textColor")
    clearInterval(intervalId);
  }
}, 1000);

defuserEl.addEventListener('keydown', function(event){
  let bomDefuser = defuserEl.value;
  if(bomDefuser === "Defuse" && event.key === "Enter" && countdown !== 0){
    timerEl.textContent = "You Did it!!"
    timerEl.classList.add("Success");
    clearInterval(intervalId)
  }
})