/* eslint-disable no-undef */
/* eslint-disable no-new */

new JustValidate('.js-form', {
  rules: {
    name: {
      required: true,
      minLength: 3,
      maxLength: 40,
    },
    email: {
      required: true,
      email: true,
      maxLength: 50,
    },
    cpf: {
      required: true,
      maxLength: 11,
    },
    address: {
      required: true,
      maxLength: 200,
    },
    city: {
      required: true,
      maxLength: 28,
    },
    state: {
      required: true,
    },
    radio: {
      required: true,
    },
    text: {
      required: true,
      maxLength: 1000,
    },
    position: {
      required: true,
      maxLength: 40,
    },
    description: {
      required: true,
      maxLength: 500,
    },
    date: {
      required: true,
    },
  },
  messages: {
    name: {
      required: 'O campo de nome é obrigatório.',
      maxLength: 'O limite é de 40 caracteres.',
    },
    email: {
      required: 'O campo de email é obrigatório.',
      email: 'O email digitado não é válido.',
      maxLength: 'O limite é de 50 caracteres.',
    },
    cpf: {
      required: 'O campo de CPF é obrigatório.',
      maxLength: 'O limite é de 11 caracteres.',
    },
    address: {
      required: 'O campo endereço é obrigatório.',
      maxLength: 'O limite é de 200 caracteres.',
    },
    city: {
      required: 'O campo cidade é obrigatório.',
      maxLength: 'O limite é de 28 caracteres.',
    },
    state: {
      required: 'O campo estado é obrigatório.',
    },
    radio: {
      required: 'A escolha de um item é obrigatória.',
    },
    text: {
      required: 'Este campo é obrigatório.',
      maxLength: 'O limite é de 1000 caracteres.',
    },
    position: {
      required: 'Este campo é obrigatório.',
      maxLength: 'O limite é de 40 caracteres.',
    },
    description: {
      required: 'Este campo é obrigatório.',
      maxLength: 'O limite é de 500 caracteres.',
    },
    date: {
      required: 'Este campo é obrigatório.',
    },
  },
  submitHandler(form, values) {
    console.log(form, values);
  } });

function init() {
  const btnSend = document.getElementById('send');
  const btnClear = document.getElementById('clear');
  
  btnSend.addEventListener('click', (event) => {
    event.preventDefault();
  });
  btnClear.addEventListener('click', (event) => {
    event.preventDefault();

    window.location.reload();
  });
}

window.onload = () => {
  init();
};
