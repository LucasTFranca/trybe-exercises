function test(event) {
  event.preventDefault();
}

function init() {
  const btnSend = document.getElementById('send');
  const btnClear = document.getElementById('clear');
  
  btnSend.addEventListener('click', test);
  btnClear.addEventListener('click', test);
}

window.onload = () => {
  init();
};
