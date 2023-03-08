function alertBox() {
  alert("I am an alert box!");
}

function changeText() {
  var button = document.getElementById("addToCart");
  if (button.value == 0) {
    button.innerHTML = "Added!";
    button.value=1;
  }
  else if (button.value==1){
    button.innerHTML = "Add to cart";
    button.value=0;
  }
}

function rateSlider() {
  var stars = document.getElementById("rating-slider").value;
  var score = document.getElementById("rating");
  score.innerHTML= "Rate us!: " + stars/2;
}

function thankYouAlert(){
  var button = document.getElementById("rating-button").innerHTML = "Thank you~";
}