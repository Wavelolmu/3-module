window.onload = function calcDelay() {
  for (var i = 1; i < 10; i++) {
    let root = document.documentElement;
    var delay = Number(Math.random().toString().slice(1, 4))  * 1000 + 'ms';
    var propertyName = '--star-delay' + i;
    root.style.setProperty(`${propertyName}`, delay);
    console.log(`${propertyName}` + ' ' + delay);
  }
}

function futureTelling() {
  for (var i = 1; i < 6; i++) {
    var tarotCard = document.querySelector('#starter-tarot-card' + i);
    tarotCard.style.transform = 'none';
  }
  document.querySelector('#starter-tarot-boyfriend').style.transform = 'none';
  document.querySelector('#starter-tarot-button').style.opacity = '0';
  function hideButton() {
    document.querySelector('#starter-tarot-button').style.display = 'none'
  }
  setTimeout(hideButton, 400);
}
