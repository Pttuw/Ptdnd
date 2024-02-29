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

/*/ Form /*/

function validateForm() {
  const userName = document.getElementById("username").value;
  const eMail = document.getElementById("email").value;
  const passWord = document.getElementById("password").value;
  const confirmPassWord = document.getElementById("confirmPassword").value;
  const userNamelength = "Name must be longer than 3 characters."
  const emailCheck = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (userName === "" || eMail === "" || passWord === "" || confirmPassWord === "") {
      alert("Fields cannot be empty");
      return false;
  }
  if (userName.length <= 3) {
      document.getElementById("usernameError").innerHTML = userNamelength;
      return false;
  } else if (userName.length >= 4) {
    document.getElementById("usernameError").innerHTML = "";
  }
  if (!emailCheck.test(eMail)) {
      document.getElementById("emailError").innerHTML = "Enter valid e-mail.";
      return false;
  } else if (emailCheck.test(eMail)) {
    document.getElementById("emailError").innerHTML = "";
  }
  if (passWord.length <= 6) {
    document.getElementById("passwordError").innerHTML = "Password needs to be over 6 characters long.";
    return false;
  } else if (passWord.length >= 7) {
    document.getElementById("passwordError").innerHTML = "";
  }
  if (passWord != confirmPassWord) {
    document.getElementById("confirmPasswordError").innerHTML = "Passwords dont match.";
    console.log("Error");
    return false;
  } else if (passWord === confirmPassWord) {
    document.getElementById("confirmPassword").innerHTML = "";
  }
  return true;
}