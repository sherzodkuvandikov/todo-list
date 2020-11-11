var mainForm = document.querySelector('.main-form');
var mainCheckbox = mainForm.querySelector('.main-checkbox');
var mainList = document.querySelector('.main-list');
var toDoList = [];

mainForm.addEventListener('submit', function(evt) {
  evt.preventDefault();

  var mainInput = mainForm.querySelector('.main-input').value;


  if (toDoList.includes(mainInput)) {
    alert('Yozilgan bu allaqachon')
    return('This word exists !');
    mainInput.value = '';
  } else if (mainCheckbox.checked) {
    toDoList.unshift(mainInput);
    mainInput.value = '';
  } else {
    toDoList.push(mainInput);
  }

  mainList.innerHTML = '';
  mainInput.focus;

  for (var todo of toDoList) {
    var resultList = document.createElement('li');
    mainList.appendChild(resultList);
    resultList.classList.add('pt-2','pb-2','pl-2','pr-2', 'border');
    resultList.textContent = todo;
  }

  console.log(toDoList);
  mainInput.value = 'sdsd';
})