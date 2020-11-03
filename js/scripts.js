var mainForm = document.querySelector('.main-form');
var mainCheckbox = mainForm.querySelector('.main-checkbox');
var mainList = document.querySelector('.main-list');
var toDoList = [];

mainForm.addEventListener('submit', function(evt) {
  evt.preventDefault();

  var mainInput = mainForm.querySelector('.main-input').value;

  if (mainCheckbox.checked) {
    toDoList.unshift(mainInput);

  } else {
    toDoList.push(mainInput);
  }

  console.log(toDoList);
})