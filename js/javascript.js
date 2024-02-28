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
  else {
    console.log("Error")
  }
}

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

    
 
