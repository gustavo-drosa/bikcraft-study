import { CONFIG } from "../config/config.js";

const formulario = document.querySelector("form");

function enviarFormular(event) {
  event.preventDefault(); //previne que o botão redirecione o user ao action do form
  const botao = document.querySelector("form button");
  botao.disabled = true;
  botao.innerText = "Enviando...";
}

formulario.addEventListener("submit", enviarFormular);

(function () {
  emailjs.init(CONFIG.EMAIL_API_KEY);
})();

window.onload = function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const templateParams = {
      name: document.getElementById("nome").value,
      mail: document.getElementById("email").value,
      phone: document.getElementById("telefone").value,
      message: document.getElementById("mensagem").value,
    };

    emailjs
      .send(
        CONFIG.EMAIL_CONTACT_SERVICE,
        CONFIG.EMAIL_TEMPLATE_CONTACT,
        templateParams,
      )
      .then(
        function (response) {
          // alert("Email sent successfully!");
          console.log("SUCCESS!", response.status, response.text);
          formulario.innerHTML =
            "<p class='font-2-l' style='grid-column: 1/-1; padding: 1rem; border-radius: 4px; background: #f7f7f7;'><span style='color: #317A00'>Mensagem enviada, em breve entraremos em contato. Geralmente respondemos em 24h.</span></p>";
        },
        function (error) {
          // alert("Failed to send email. Check console for details.");
          console.error("FAILED...", error);
          formulario.innerHTML =
            "<p class='font-2-l' style='grid-column: 1/-1; padding: 1rem; border-radius: 4px; background: #f7f7f7;'><span style='color: #E00000;'>Erro</span> no envio, você pode enviar diretamente no nosso email em: contato@bikcraft.net</p>";
        },
      );
  });
};
