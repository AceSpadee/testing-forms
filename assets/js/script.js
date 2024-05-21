const btn = document.getElementById("btn");

btn.addEventListener("click", myFunction);

function myFunction() {
    // add in a modal with this function
    console.log('this works')
}
// create a modal with a form then display it to the page



// sample code for modal
// ------------------------------------------------------------------
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var examplebtn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
examplebtn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
// ----------------------------------------------------------------