// Alert box for a thank you message after checking out
//Not using it anymore due to having a seperate html page for shipping/thank you
function alertBox() {
  alert("Thank you for your purchase!");
}

//Changes the text of the button when adding/removing items from the product detail page
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

//Slider for the product detail review section
function rateSlider() {
  var stars = document.getElementById("rating-slider").value;
  var score = document.getElementById("rating");
  score.innerHTML= "Rate us!: " + stars/2;
}

//after submitting a review there is a thank you message
function thankYouAlert(){
  var button = document.getElementById("rating-button").innerHTML = "Thank you~";
}