var questions = {
  animal: {
    easy: [
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
        options: [
          'Chicken',
          'Parrot',
          'Duck'
        ],
        answer: 'Parrot'
      }
    ],
    medium: [
      {
        text: "What color are a zebra's stripes?",
        options: [
          'White',
          'Black',
          'Both'
        ],
        answer: 'White'
      },
      {
        text: 'How many times may a salamander regrow its tail?',
        options: [
          '1',
          '10',
          'Infinite'
        ],
        answer: 'Infinite'
      },
      {
        text: 'A dove is the universal symbol for what?',
        options: [
          'Music and Dance',
          'Love and Peace',
          'Laughter and Trust'
        ],
        answer: 'Love and Peace'
      }

    ],
    hard: [
      {
        text: "What color is a giraffe's tounge?",
        options: [
          'Red',
          'Black',
          'Blue'
        ],
        answer: 'Blue'
      },
      {
        text: 'Which bird has the largest wingspan?',
        options: [
          'Albatross',
          'Flamingo',
          'Ostrich'
        ],
        answer: 'Albatross'
      },
      {
        text: 'What are female elephants called?',
        options: [
          'Female Elephant',
          'Cow',
          'Heifer'
        ],
        answer: 'Cow'
      },
    ]
  },
  food:{
    {
      text: 'Which of these is the most popular tooping on pizza?',
      options: [
        'Apple Slices',
        'Pepperoni',
        'Noodles'
      ],
      answer: 'Pepperoni'
    },
  },
  movies:{

  }
};
var questionNumber = 1;

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
// question.animals
// question[category]
function startGame(category, difficulty) {

  var label = document.querySelector('.question-label');
  var text = document.querySelector('.question-text');
  var answers = document.querySelectorAll('.answer')

  //console.log(category, difficulty);
  var index = Math.floor(Math.random() * questions[category][difficulty].length);
  // choose random question object
  var question = questions[category][difficulty][index];
  console.log(question);
  //console.log(label);
  //console.log(answer);

  // place question on the page
  label.textContent = questionNumber;
  text.textContent = question.text;

  for(var i = 0; i < question.options.length; i++) {
    answers[i].textContent = question.options[i]; // 'Cat' // 'Dog' // 'Lizard'
  }

  questionNumber++;
}
