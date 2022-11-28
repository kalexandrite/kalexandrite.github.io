var htmlElem = document.querySelector('html');

var columnForm = document.getElementById('column');

if(!localStorage.getItem('column')) {
  populateStorage();
} else {
  setStyles();
}

function populateStorage() {
  localStorage.setItem('column', document.getElementById('column').value);
  setStyles();
}

function setStyles() {
  var currentColor = localStorage.getItem('column');


  document.getElementById('column').value = currentColor;


  htmlElem.style.backgroundColor = '#' + currentColor;
}

columnForm.onchange = populateStorage;
