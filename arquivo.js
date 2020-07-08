const $titulo = window.document.querySelector(".titulo");
  
$titulo.addEventListener("mouseover", mouseover);

function mouseover() {
  console.log("mouse em cima");
  $titulo.classList.toggle("titulo:hover");
}

$titulo.addEventListener("click", handleClick);

function handleClick() {
  console.log("clicou");
  $titulo.classList.toggle("-active");
}





/*
window = seleciona a janela do browser 
document = seleciona o html
querySelector = faz uma busca por um seletor de classe
( ) = indica q vai executar o comando




*/