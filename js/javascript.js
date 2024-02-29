function test() {
  alert("JS load successfull!");
}

/*/ Fullred JS things /*/

function addAilment() {
  var input = document.getElementById("ailmentInput");
  var task = input.value.trim();
  if (task !== "") {
    var ul = document.getElementById("ailmentList");
    var li = document.createElement("li");
    li.textContent = task;
    var deleteButton = document.createElement("button");
    deleteButton.textContent = "❌";
    deleteButton.classList.add("delete-btn");
    deleteButton.onclick = function() {
      ul.removeChild(li);
    };
    li.appendChild(deleteButton);
    ul.appendChild(li);
    input.value = "";
  } else {
    alert("Please enter a task!");
  }
}

function selectedAilment() {
  const mylist = document.getElementById("ailmentlist");
  document.getElementById("ailmentInput").value = mylist.options[mylist.selectedIndex].text;
  idtest = mylist.options[mylist.selectedIndex].value;
  if (idtest == 1) {
    let poisonstatus = document.getElementById("poison");
    let poisonOn = "Poisoned!";
    poisonstatus.innerHTML = poisonOn;
  }
  else if (idtest == 2) {
    let stunnedstatus = document.getElementById("stunned");
    let stunnedOn = "Stunned!";
    stunnedstatus.innerHTML = stunnedOn;
  }
  else if (idtest == 3) {
    let blindedstatus = document.getElementById("blinded");
    let blindedOn = "You're blinded!";
    blindedstatus.innerHTML = blindedOn;
  }
}

/*/ Countdown Timer JS /*/

function startCounting() {
  numberofseconds = document.getElementById("timerseconds").value;
  setcountdown = document.getElementById("timer");
  setcountdown.innerHTML = numberofseconds;
  timeup = "Time's up!"
  const timer = setInterval(function() {
    numberofseconds--;
    setcountdown.innerHTML = numberofseconds;
    if (numberofseconds <= 0) {
      clearInterval(timer);
      setcountdown.innerHTML = timeup;
    } 
  }, 1000);
}  
/*/ To do list JS /*/

function addTask() {
  const input = document.getElementById("newTask");
  const list = document.getElementById("tasks");
  const newTask = document.createElement("li");
  newTask.textContent = input.value;
  newTask.addEventListener("click", taskComplete);
  list.appendChild(newTask);
  input.value = "";
}
    
function taskComplete(event) {
  const task = event.target;
  task.classList.toggle("completed");
}

function removeCompleted() {
  removelist = document.querySelectorAll(".completed");
  console.log(removelist.length);
  removelist.forEach(newTask => newTask.remove()); 
}

/*/ Calculater JS /*/
function appendToDisplay(val) {
  document.getElementById("display").value += val 
}

function performOperation(operation) {
  document.getElementById("display").value += operation;
}

function clearDisplay() {
  document.getElementById("display").value="";
}

function calculateResult() {
  const expression = document.getElementById("display").value;
  const result = eval(expression);
  document.getElementById("display").value=result;
}