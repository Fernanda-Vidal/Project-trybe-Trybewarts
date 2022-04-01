const buttonForm = document.querySelector('#button-form');

buttonForm.addEventListener('click', () => {
  const inputEmail = document.querySelector('#email').value;
  const inputSenha = document.querySelector('#senha').value;

  if (inputEmail === 'tryber@teste.com' && inputSenha === '123456') {
    alert('Olá, Tryber!');
  }
  alert('Email ou senha inválidos.');
});

const contador = document.querySelector('#counter');
const textarea = document.querySelector('#textarea');

function contadorDeCaracter() {
  contador.innerText = 500 - textarea.value.length;
}
textarea.addEventListener('keyup', contadorDeCaracter);

