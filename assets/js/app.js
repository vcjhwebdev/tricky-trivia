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
        text: "What color is a giraffe's tongue?",
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
    easy:[
      {
      text: 'Which of these is the most popular topping on pizza?',
      options: [
        'Apple Slices',
        'Pepperoni',
        'Noodles'
      ],
      answer: 'Pepperoni'
    },
      {
    text: 'What food is used as the base for guacamole?',
    options: [
      'Avocado',
      'Cherries',
      'Broccoli'
    ],
    answer: 'Avocado'
  },
      {
  text: 'What do herbivores eat?',
  options: [
    'Only Meat',
    'Only Vegetables',
    'Both Vegetables and Meat'
  ],
  answer: 'Only Vegetables'
}
  ],
    medium:[
      {
      text: 'What is sushi traditionally wrapped with?',
      options: [
        'Seaweed',
        'Cabbage',
        'Spinach'
      ],
      answer: 'Seaweed'
    },
      {
    text: 'What ingredient causes bread to rise?',
    options: [
      'Flour',
      'Butter',
      'Yeast'
    ],
    answer: 'Yeast'
  },
      {
      text: 'Foods rich in starch are know by what name?(Hint: Pasta and Bread)',
      options: [
        'Herbs',
        'Carbohydrates',
        'Calories'
      ],
      answer: 'Carbohydrates'
    },
],
    hard:[
      {
      text: 'When was the blue M&M introduced?',
      options: [
        '1985',
        '1995',
        '1999'
      ],
      answer: '1995'
    },
      {
    text: 'Which fast food restaurant was literally founded in a broom closet?',
    options: [
      "Papa John's",
      'Taco Bell',
      "Wendy's"
    ],
    answer: "Papa John's"
  },
      {
      text: "'Beefsteak' is a variety of what?",
      options: [
        'Turkey',
        'Cow Meat',
        'Tomato'
      ],
      answer: 'Tomato'
    }
    ]
  },
  movies:{
    easy:[
      {
      text: 'Who is the main mermaid in <em>"The Little Mermaid"</em>?',
      options: [
        'Aria',
        'Ariel',
        'Merida'
      ],
      answer: 'Ariel'
    },
      {
      text: 'In <em>Cinderella</em>, what did the fairy godmother turn into a carriage?',
      options: [
        'Pumpkin',
        'Watermelon',
        'Cantaloupe'
      ],
      answer: 'Pumpkin'
    },
      {
    text: "What did Maleficent turn in to in Disney's animated film, <em>Sleeping Beauty</em>?",
    options: [
      'Lizard',
      'Dragon',
      'Lion'
    ],
    answer: 'Dragon'
  }
  ],
    medium:[
      {
      text: "Who is one of the good fairies in Disney's animated film, <em>Sleeping Beauty</em>?",
      options: [
        'Fiora',
        'Fleur',
        'Flora'
      ],
      answer: 'Flora'
    },
      {
      text: "What is the prince's name in <em>Snow White and the Seven Dwarves</em>?",
      options: [
        'Prince Charming',
        'Prince Florian',
        'Prince Philip'
      ],
      answer: 'Prince Florian'
    },
      {
    text: 'What movie are the characters Phoebus and Eseralda from?',
    options: [
      'The Hunchback of Noter Dame',
      'The Black Cauldron',
      'Alice in Wonderland'
    ],
    answer: 'The Hunchback of Noter Dame'
  }
  ],
    hard:[
      {
      text: 'What is the only Disney sond to win a Grammy Award for Song of the Year?',
      options: [
        'A Whole New World',
        'Under the Sea',
        "I Can't Wait to be King"
      ],
      answer: 'A Whole New World'
    },
      {
      text: 'Which Disney movie was the first to have a soundtrack album?',
      options: [
        'The Little Mermaid',
        'Pocahontas',
        'Snow White and the Seven Dwarves'
      ],
      answer: 'Snow White and the Seven Dwarves'
    },
      {
    text: "What is the name of the only female chef at Gusteau's restaurant in the film <em>Ratatouille</em>?",
    options: [
      'Camille',
      'Colette',
      'Carly'
    ],
    answer: 'Colette'
  }
    ]

  }
};
var questionNumber = 1;

var overlay = document.getElementById('overlay');
var settingsForm = document.getElementById('settings');
var game = document.getElementById('game');

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
  var answers = document.querySelectorAll('.answer');

  //console.log(category, difficulty);
  var index = Math.floor(Math.random() * questions[category][difficulty].length);
  // choose random question object
  var question = questions[category][difficulty][index];
  // console.log(question);
  //console.log(label);
  //console.log(answer);

  // place question on the page
  label.textContent = questionNumber;
  text.innerHTML = question.text;

  for(var i = 0; i < question.options.length; i++) {
    answers[i].textContent = question.options[i]; // 'Cat' // 'Dog' // 'Lizard'
    // if(question.options[i] == question.answer) {
    //   answers[i].addEventListener('click', function() {
    //     console.log('right!');
    //     // add to score
    //
    //     // choose new question
    //     startGame(category, difficulty);
    //   });
    // } else {
    //   answers[i].addEventListener('click', function() {
    //     // add to score
    //
    //     // choose new question
    //     console.log('wrong!');
    //     startGame(category, difficulty);
    //   });
    // }
  } // end startGame()

  game.addEventListener('click', function(e){
    if(e.target.tagName == 'BUTTON') {
      // check if right/wrong answer

      // change score

      // tell user if they were right/wrong

      // choose new question

    }
  });

  questionNumber++;
}
