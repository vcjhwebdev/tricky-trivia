//startGame.addEventListener('click', function(e) {
  // e.target <-- thing you clicked
  // e.target.value <-- value attribute
  // e.target.textContent <-- text of thing
  // alert(e.target.value + " clicked");  overlay.style.display = "none";
  // catigories.style.display = "none";
  //levels1.style.display = "none";
  //animaleasy1.style.display = "none";
//});
//});

var overlay = document.getElementById('overlay');

var settingsForm = document.getElementById('settings');

settingsForm.addEventListener('submit', function(event) {
  event.preventDefault();
  var animal = document.getElementById('animal');
  var food = document.getElementById('food');
  var movies = document.getElementById('movies');
  var easy = document.getElementById('easy');
  var medium = document.getElementById('medium');
  var hard = document.getElementById('hard');
  var category = '';
  var difficulty = '';

  if(animal.checked) {
    category = 'animal';
  } else if(food.checked){
    category = "food";
  } else if(movies.checked){
    category = "movies";
  }

  if(easy.checked) {
    difficulty = 'easy';
  } else if(medium.checked){
    difficulty = "medium";
  } else if(hard.checked){
    difficulty = "hard";
  }

  overlay.style.display = "none";

});
//
// if (easy1 == "cat")
//   {alert(confirm("Yes!!! You got the right answer!!! Click "));
//     if (confirm == )}
// else if (easy1 == "dog")
//   {alert("Try Again");}
// else if (easy1 == "lizard")
//   {alert("Try Again");}
