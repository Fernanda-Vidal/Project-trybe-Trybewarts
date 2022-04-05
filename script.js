const buttonForm = document.querySelector('#button-form');
const inputEmail = document.querySelector('#email');
const inputSenha = document.querySelector('#senha');
const contador = document.querySelector('#counter');
const textarea = document.querySelector('#textarea');
const btnSubmit = document.querySelector('#submit-btn');
const inputCheckbox = document.querySelector('#agreement');

// Valida o botão: Se email= tryber@teste.com e senha= 123456, emite alert com o texto: "Olá, Tryber!".
// Senão, emite alert com o texto: "Email ou senha inválidos."
buttonForm.addEventListener('click', () => {
  if (inputEmail.value === 'tryber@teste.com' && inputSenha.value === '123456') {
    alert('Olá, Tryber!');
  }
  alert('Email ou senha inválidos.');
});

// Conta os caracteres adicionados pelo o usuário no textArea.
function contadorDeCaracter() {
  contador.innerText = 500 - textarea.value.length;
}
textarea.addEventListener('keyup', contadorDeCaracter);

// Só habilita o botão se o checkbox estiver for igual a checked.
function habilitaBotao() {
  btnSubmit.disabled = !inputCheckbox.checked;
}
inputCheckbox.addEventListener('change', habilitaBotao);



let radioFamily = document.getElementsByTagName('input[name="family"]');
function verificaChecked () {
  for (let i = 0; i < radioFamily.length; i += 1) {
    if (radioFamily[i] === 'checked') {
      let checkedFamily = radioFamily[i].value;
      console.log(checkedFamily);
    }
  }
}
verificaChecked();
