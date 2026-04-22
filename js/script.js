//Ativar links do header
const links = document.querySelectorAll(".header-menu a");
function ativarLink(link) {
  const url = location.href;
  const href = link.href;
  if (url.includes(href)) {
    link.classList.add("ativo");
  }
}
links.forEach(ativarLink);

//Ativar Itens do orçamento
const parametros = new URLSearchParams(location.search);
function ativarProdutos(parametro) {
  const elemento = document.getElementById(parametro);
  if (elemento) {
    elemento.checked = true;
  }
}
parametros.forEach(ativarProdutos);

// Perguntas frequentes
const perguntas = document.querySelectorAll(".perguntas button");
function ativarPergunta(event) {
  const pergunta = event.currentTarget;
  const controle = pergunta.getAttribute("aria-controls");
  const resposta = document.getElementById(controle);
  const ativa = resposta.classList.contains("ativa"); // Se contém =true, senao =false
  resposta.classList.toggle("ativa");
  pergunta.setAttribute("aria-expanded", ativa);
}
function eventosPergunta(pergunta) {
  pergunta.addEventListener("click", ativarPergunta);
}
perguntas.forEach(eventosPergunta);

// Galeria de imagens das bicicletas
const galeria = document.querySelectorAll(".bicicleta-imagens img");
const galeriaContainer = document.querySelector(".bicicleta-imagens");

function ativarImagem(element) {
  const img = element.currentTarget;
  //window.matchMedia("(min-width: 1000px)"); Como é window. não precisa colocar
  const media = matchMedia("(min-width: 1000px)").matches;
  if (media) {
    galeriaContainer.prepend(img);
  }
}

function eventoImagem(img) {
  img.addEventListener("click", ativarImagem);
}

galeria.forEach(eventoImagem);

//Plugin, somente se existir na pagina, carregar
if (window.SimpleAnime) {
  new SimpleAnime();
}
