const body = document.querySelector('body');
const div = document.createElement('div');
div.className = 'main-content';

body.appendChild(document.createElement('h1')).title = 'SeiLa';
body.appendChild(div);
div.appendChild(document.createElement('div')).className = 'center-content';

div.firstChild.appendChild(document.createElement('p')).innerText = 'Agua';

div.appendChild(document.createElement('img')).src = 'https://picsum.photos/200';

// body.removeChild(div);

console.log(div.firstChild.previousSibling);