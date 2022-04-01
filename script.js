// Ao preencher o formulário e clicar no botão, será validado que:
// Caso o email seja "tryber@teste.com" e a senha seja "123456" será emitido um alerta contendo o texto "Olá, Tryber!"
// Em todos os outro casos deverá ser emitido um alerta contendo o texto "Email ou senha inválidos."

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

const btnSubmit = document.querySelector('#submit-btn');
const inputCheckbox = document.querySelector('#agreement');

function habilitaBotao() {
  btnSubmit.disabled = !inputCheckbox.checked;
}

inputCheckbox.addEventListener('change', habilitaBotao);

// // Faça com que, ao clicar no botão Enviar, o conteúdo dentro da tag <form> seja substituído pelas informações preenchidas pela pessoa usuária
// Observações técnicas:
// Todos os campos do formulário devem ser substituídos pelas informações da pessoa usuária.
// Deve haver um campo com o formato "Nome: Alguem Aqui"
// Deve haver um campo com o formato "Email: email@mail.com"
// Deve haver um campo com o formato "Casa: Casa Escolhida"
// Deve haver um campo com o formato "Família: Família Escolhida"
// Deve haver um campo com o formato "Matérias: Matérias, Marcadas, Aqui"
// Deve haver um campo com o formato "Avaliação: NotaAqui"
// Deve haver um campo com o formato "Observações: Observações aqui"

// btnSubmit.addEventListener('click', )
