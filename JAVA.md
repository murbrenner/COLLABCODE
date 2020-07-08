# JAVASCRIPT
```
HTML
-CONTEUDO
-SEMANTICA
-ESTRUTURA

CSS
-VISUAL
-ANIMAÇÃO

JAVASCRIPT
-COMPORTAMENTO - PÁGINA
-INTERAÇÃO - DO USUÁRIO COM A PAGE

JAVASCRIPT - CRIE UM ARQUIVO JS

USAR LÓGICA:
-TER A JANELA (BROWSER)
-TER O HTML NA MÃO
-PEGAR O ITEM
-PEGAR O CLIQUE DO ITEM
-NO MOMENTO DO CLIQUE, EXECUTAR UMA AÇÃO

FAZER O HTML RECONHECER O JAVA
-DENTRO DO HEAD OU DO BODY COLOCA-SE:
<script src="js/arquivo.js"></script>
RECOMENDA-SE COLOCAR NO FINAL DO BODY, A ULTIMA COISA A SER CARREGADA, PRA ELE PODER TER REFERÊNCIA

CRIAR VARIÁVEL NO JAVA:
-PODE COLOCAR $ OU NÃO
const $nomedavariavel = window.document.qu...

COMANDO ALERT: MOSTRA UMA MSG NA TELA ANTES DE CARREGAR A PÁGINA

WINDOW = JANELA/PÁGINA TODA
DOCUMENT = HTML
QUERYSELECTOR = SELETOR DE BUSCA
CONSOLE.LOG = EXIBIR UMA MENSAGEM NA TELA DO CONSOLE DO BROWSER

window.document.querySelector(".-modclass");

ADICIONAR UM OUVINTE DE EVENTO
window.document.querySelector(".-modclass");

$variavel.addEventListener("click", console.log("texto"));

ACIMA O COMANDO É EXECUTADO NA MESMA HORA Q FOI LIDO, PARA SER EXECUTADO SOB DEMANDA É ASSIM:

window.document.querySelector(".-modclass");

$variavel.addEventListener("click", handleClick);

function handleClick() {
  console.log("texto")
}

VARIÁVEL LET - PODE SER ALTERADA
let $variavel = 10;

SOMAR NUMA VARIÁVEL - RESPEITA A ORDEM DE ESCRITA
$variavel.textContent = variavel++;
ou
$variavel.textContent = ++variavel;

JUNTANDO TEXTO E CÓDIGO
-DENTRO DE CRASES
-DENTRO DO CIFRÃO E DE CHAVES SE COLOCA O CONTEÚDO JAVA

$variável.textContent = `Carrinho (${++variavel})`;

TAG CLASSLIST - SABE LIDAR COM A LISTA DE CLASSES
$variavel.classList.add('active');

TAG IF - CONDIÇÃO
if($variavel.classList.conatins("-active")) {
  $variavel.classList.remove("-active");
} else{
  $variavel.classList.add("-active");
}

TAG TOGGLE - FAZ AS CONDICOES DO IF EM UMA LINHA
-VERIFICA SE EXISTE E ADICIONA OU REMOVE A CLASSE
$heart.classList.toggle("classe");



```
# OBSERVAÇÕES

```

- CARREGAR O JAVA DENTRO DO BODY, NO FINAL DELE, PQ ELE É BLOCANTE, BLOQUEIA O CARREGAMENTO DA PÁGINA

- API DO BROWSER - O MEIO DO CAMINHO

- O COMANDO PODE SER SEM WINDOW
... = document.querySelector("")


```


