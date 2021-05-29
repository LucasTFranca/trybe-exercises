function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

// Escreva seu código abaixo.

// eslint-disable-next-line max-len
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
const days = document.querySelector('#days');
const input = document.getElementById('task-input');
const listColor = ['red', 'blue', 'yellow', 'brown', 'orange', 'white'];
let count = 0;
let index = 0;
let divColor = '';

// eslint-disable-next-line complexity
function createDaysOfTheMonth() {
  // eslint-disable-next-line guard-for-in
  for (const key in dezDaysList) {
    const element = document.createElement('li');
    element.className = 'day';
    element.innerText = dezDaysList[key];
    days.appendChild(element);

    if (dezDaysList[key] === 24 || dezDaysList[key] === 25 || dezDaysList[key] === 31) {
      element.className += ' holiday'; 
    }
    // eslint-disable-next-line max-len
    if (dezDaysList[key] === 4 || dezDaysList[key] === 11 || dezDaysList[key] === 18 || dezDaysList[key] === 25) {
      element.className += ' friday';
    } 
  }
}

createDaysOfTheMonth();

function createButton(string, id) {
  const btn = document.createElement('button');
  btn.id = id;
  btn.innerText = string;
  document.querySelector('.buttons-container').appendChild(btn);
}

createButton('Holidays', 'btn-holiday');
createButton('Friday', 'btn-friday');

function changeColorIf(holidays) {
  for (const day of holidays) {
    day.style.backgroundColor = 'rgb(238,238,238)';
    count = 0;
  }
}

function changeColorElse(holidays) {
  for (const day of holidays) {
    day.style.backgroundColor = 'yellow';
    count += 1;
  }
}

function changeColorHolidays() {
  const holidays = document.getElementsByClassName('holiday');
  // eslint-disable-next-line guard-for-in
  if (count === 3) {
    changeColorIf(holidays);
  } else {
    changeColorElse(holidays);
  }
}

function changeFriday() {
  const fridayOrder = [4, 11, 18, 25];
  const fridays = document.getElementsByClassName('friday');
  index = 0;
  for (const key of fridays) {
    if (key.innerText === 'FRIDAY') {
      key.innerText = fridayOrder[index];
    } else {
      key.innerText = 'FRIDAY';
    }
    index += 1;
  }
}

function zoomOut(event) {
  const element = event.target;
  element.style.fontSize = '25px';
}

function zoomIn(event) {
  const element = event.target;
  element.style.fontSize = '20px';
}

function colorChange(event) {
  const element = event.target;
  if (element.style.color === divColor) {
    element.style.color = 'rgb(119,119,119)';
  } else {
    element.style.color = divColor;
  }
}

function createZoomEvent() {
  const daysWeek = document.getElementsByClassName('day');
  for (const day of daysWeek) {
    day.addEventListener('mouseenter', zoomOut);
    day.addEventListener('mouseleave', zoomIn);
    day.addEventListener('click', colorChange);
  }
}

createZoomEvent();

function classSelector(event) {
  const element = event.target;
  if (element.className === 'task selected') {
    element.classList.remove('selected');
  } else {
    element.classList.add('selected');
    divColor = element.style.backgroundColor;
  }
}

function createComponentTask(string, color) {
  const divMyTasks = document.querySelector('.my-tasks');
  const div = document.createElement('div');
  const span = document.createElement('span');
  span.innerText = string;
  div.style.backgroundColor = color;
  div.className = 'task';
  divMyTasks.appendChild(span);
  divMyTasks.appendChild(div);
  div.addEventListener('click', classSelector);
}

function createTask() {
  const randomNumber = Math.floor(Math.random() * 6);
  if (input.value.length > 0) {
    createComponentTask(input.value, listColor[randomNumber]);
    input.value = '';
  } else {
    alert('Coloque um nome ha sua tarefa');
  }
}

function enterValue(event) {
  if (event.keyCode === 13) {
    createTask();
  }
}

const buttonAdd = document.getElementById('btn-add');
const buttonHoliday = document.getElementById('btn-holiday');
const buttonFriday = document.getElementById('btn-friday');

input.addEventListener('keyup', enterValue);
buttonAdd.addEventListener('click', createTask);
buttonHoliday.addEventListener('click', changeColorHolidays);
buttonFriday.addEventListener('click', changeFriday);