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

var questions = [
  {
    text: 'What type of animal is a cheetah?',
    options: [
      'Cat',
      'Dog',
      'Lizard'
    ],
    answer: 'Cat'
  },
  {
    text: 'How many legs does a standard dog have?',
    options: [
      '2',
      '3',
      '4'
    ],
    answer: '4'
  },
  {
    text: "Which bird is known for imitating sounds of humans?",
    options:[
      'Chicken',
      'Parrot',
      'Duck'
    ],
    answer: 'Parrot'
  }
];

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

  // start the game
  startGame(category, difficulty);

});

function startGame(category, difficulty) {

  var label = document.querySelector('.question-label');
  var text = document.querySelector('.question-text');
  var answer = document.querySelectorall('.answer')

  // console.log(category, difficulty);

  // choose random question object
  var question = questions[Math.floor(Math.random() * questions.length)];
  // console.log(question);

  // place question on the page
}
