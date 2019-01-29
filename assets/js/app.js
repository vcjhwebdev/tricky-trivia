var startGame = document.querySelector('.start-game');

startGame.addEventListener('click', function(e) {
  // e.target <-- thing you clicked
  // e.target.value <-- value attribute
  // e.target.textContent <-- text of thing
  alert(e.target.value + " clicked");
});
