window.onload = function calcDelay() {
  for (var i = 1; i < 10; i++) {
    let root = document.documentElement;
    var delay = Number(Math.random().toString().slice(1, 4))  * 1000 + 'ms';
    var propertyName = '--star-delay' + i;
    root.style.setProperty(`${propertyName}`, delay);
    console.log(`${propertyName}` + ' ' + delay);
  }
}

function hideButton() {
  document.querySelector('#starter-tarot-button').style.display = 'none'
}
function activateHover() {
  document.querySelector('#hover-disactivator').style.display = 'none'
}
function moveStars() {
  document.querySelector('#starter-star4').style.opacity = '0';
  function displayNone() {
    document.querySelector('#starter-star4').style.display = 'none';
  }
  setTimeout(displayNone, 400);
  document.querySelector('#starter-star5').style.right = '1122px';
  document.querySelector('#starter-star5').style.top = '197.6vh';
  document.querySelector('#starter-star6').style.right = '690px';
  document.querySelector('#starter-star6').style.top = '252vh';
  document.querySelector('#starter-star6').style.height = '65px';
  document.querySelector('#starter-star7').style.left = '510px';
  document.querySelector('#starter-star7').style.top = '192vh';
  document.querySelector('#starter-star8').style.top = '174vh';
  document.querySelector('#starter-star8').style.height = '50px';
  document.querySelector('#starter-star9').style.opacity = '1';
}

function futureTelling() {
  for (var i = 1; i < 6; i++) {
    var tarotCard = document.querySelector('#starter-tarot-card' + i);
    tarotCard.style.transform = 'none';
  }
  document.querySelector('#starter-tarot-boyfriend').style.transform = 'none';
  document.querySelector('#starter-tarot-button').style.opacity = '0';
  document.querySelector('#starter-tarot-moon').style.opacity = '0';
  document.querySelector('#starter-tarot-dihotomia').style.opacity = '0';
  setTimeout(hideButton, 400);
  setTimeout(activateHover, 500);
  moveStars();
}
