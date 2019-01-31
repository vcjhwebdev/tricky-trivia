var startGame = document.querySelector('.start-game');
var overlay = document.querySelector('#overlay');
var categories = document.querySelector('#catigories');
var levels1 = document.querySelector('#levels1');
var aeasy = document.querySelector('.aeasy');

startGame.addEventListener('click', function(e) {
  // e.target <-- thing you clicked
  // e.target.value <-- value attribute
  // e.target.textContent <-- text of thing
  // alert(e.target.value + " clicked");
  overlay.style.display = "none";
  catigories.style.display = "none";
  levels1.style.display = "none";
});
