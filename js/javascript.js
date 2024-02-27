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
}