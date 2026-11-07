// not used
const formulario = document.querySelector("form");

function formularioEnviado(resposta) {
  if (resposta.ok) {
    formulario.innerHTML =
      "<p class='font-2-l' style='grid-column: 1/-1; padding: 1rem; border-radius: 4px; background: #f7f7f7;'><span style='color: #317A00'>Mensagem enviada, em breve entraremos em contato. Geralmente respondemos em 24h.</span></p>";
  } else {
    formulario.innerHTML =
      "<p class='font-2-l' style='grid-column: 1/-1; padding: 1rem; border-radius: 4px; background: #f7f7f7;'><span style='color: #E00000;'>Erro</span> no envio, você pode enviar diretamente no nosso email em: contato@bikcraft.net</p>";
  }
}

function enviarFormular(event) {
  event.preventDefault(); //previne que o botão redirecione o user ao action do form
  const botao = document.querySelector("form button");
  botao.disabled = true;
  botao.innerText = "Enviando...";

  const data = new FormData(formulario); //função que permite puxar informações do formulario

  fetch("./enviar.php", {
    method: "POST",
    body: data,
  }).then(formularioEnviado);
}

formulario.addEventListener("submit", enviarFormular);
