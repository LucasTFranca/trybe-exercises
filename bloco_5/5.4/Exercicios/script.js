/* eslint-disable max-len */
function createButton(text) {
  const button = document.createElement('button');
  button.id = text;
  button.innerText = text;
  button.style.display = 'inline-block';
  button.style.marginLeft = '2px';
  button.style.marginLeft = '2px';
  document.querySelector('#lastDiv').appendChild(button);
}

createButton('DarkTheme');
createButton('FontLarge');
createButton('SpaceLarge');
createButton('ChangeFont');

function changerDarkTheme() {
  const bodyStyle = document.body.style;
  if (bodyStyle.backgroundColor === 'rgb(28, 28, 28)' && bodyStyle.color === 'rgb(190, 192, 192)') {
    bodyStyle.backgroundColor = 'rgb(255, 255, 255)';
    bodyStyle.color = 'rgb(0, 0, 0)';
    localStorage.darkTheme = false;
  } else {
    bodyStyle.backgroundColor = 'rgb(28, 28, 28)';
    bodyStyle.color = 'rgb(190, 192, 192)';
    localStorage.darkTheme = true;
  }
}

function changerFontSize() {
  const allParagraph = document.getElementsByClassName('paragraph');
  for (let key = 0; key < allParagraph.length; key += 1) {
    allParagraph[key].style.fontSize = '17px';
  }
}

function changerSpaceLarge() {
  const allParagraph = document.getElementsByClassName('paragraph');
  for (let key = 0; key < allParagraph.length; key += 1) {
    allParagraph[key].paddingLeft = '5px';
    allParagraph[key].paddingRight = '5px';
  }
}

function changerChangeFont() {
  const allParagraph = document.getElementsByClassName('paragraph');
  for (let key = 0; key < allParagraph.length; key += 1) {
    allParagraph[key].style.fontFamily = 'Gill Sans, Gill Sans MT, Calibri, Trebuchet MS, sans-serif';
  }
}

document.getElementById('DarkTheme').addEventListener('click', changerDarkTheme);
document.getElementById('FontLarge').addEventListener('click', changerFontSize);
document.getElementById('SpaceLarge').addEventListener('click', changerSpaceLarge);
document.getElementById('ChangeFont').addEventListener('click', changerChangeFont);

window.onload = () => {
  if (localStorage.darkTheme === 'true') {
    changerDarkTheme();
  }
};