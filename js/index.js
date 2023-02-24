const showForm = document.getElementById("form");
const showInput = document.getElementById("input");
const showP = document.getElementById("p");

showInput.addEventListener("input", (e) => {
  console.log(e.target.value);
  if (e.target.value) {
    showP.textContent = "";
    showInput.style.borderBottom = "1px solid black";
  }
});

showForm.addEventListener("submit", (e) => {
    e.preventDefault();


    if(!showForm.value){
        showInput.style.borderBottom = "1px solid red";
        showP.textContent = "Please enter your name";
        showP.style.color = "red";
        return;
    }
});
