# HTML

```
TODO TEXTO E IMAGEM. TUDO!
ESCREVER SEMANTICAMENTE (TAGS)
COMEÇAR POR SESSÃO
CTRL+SHIFT+X = PLUGINS
CTRL+SHIFT+E = EXPLORER
```

- SINTAXES:

```
CONFIG GERAL:
<>...</>

TAG DE TÍTULO = H1 (HEADING DE 1 A 6)
DEFINIÇÃO DE TÍTULOS

<h1>...</h1>

TAG DE ÂNCORA = A
<a></a>

HREF: ATRIBUTO DE LINK DA ÂNCORA
USAR PARA LINKS, ALGO CLICÁVEL E Q MUDA DE PÁGINA

<a href="link"></a>

TAG DE CONFIGURAÇÃO = META E HEAD
(ANTES DO H1)
CHARSET PARA DEFINIR A TABELA DE CONFIG = UTF-8
DENTRO DA TAG HEAD
TAG -META- NÃO FECHA POIS NÃO DEMARCA NENHUM CONTEÚDO

<head>
<meta charset="UTF-8">
</head>

TUDO Q É MOSTRADO PRO USUÁRIO FICA DENTRO DA TAG BODY

<body></body>

TUDO É ENGLOBADO PELA TAG HTML

<html>
 <head></head>
  <body></body>
</html>

TAG <!DOCTYPE> INFORMA A VERSÃO DO HTML PARA O BROWSER

<!DOCTYPE html>

TAG NAV = NAVEGAÇÃO (TAG DE ESTRUTURA)

<nav>
<a>
</nav>

TAG HEADER = TAG DE CABEÇALHO

<header></header>

TAG TITLE = TAG DE TÍTULO DA PÁGINA (ABA)
FICA DENTRO DO HEAD

<head>
<title></title>
</head>

TAG LINK = TAG DE CONFIGURAÇÃO (DENTRO DA HEAD)
REL É PRA REFERENCIAR Q O LINK É PARA ESTILO DE PÁGINA

<head>
 <link rel="stylesheet" ="header.css">
</head>

TAG P: PARÁGRAFO (loren = texto aleatorio grande)
<p>loren...</p>

ID = IDENTIFICADOR ÚNICO (DENTRO DE UMA TAG)
<a id="item"></a>

CLASS: TAG FLEXÍVEL - USAR VARIAS VEZES EM MULTIPLAS TAGS
<a class="nomedaclass"></a>
<dd class="nomedaclass"></dd>
<h1 class="nomedaclass"></h1>

BUTTON - TAG PRA BOTÃO MAS SEM MUDAR DE PÁGINA
<button></button>

DIV - NÃO SE REFERE A NADA, SERVE APENAS PARA DIVIDIR DE FORMA VISUAL A PÁGINA
<div></div>

'-NOMEDACLASS': O "-" SIGNIFICA VARIAÇÃO DA CLASS
class="nomedaclass -variacao"

LETRAS CAPITULARES NO HTML:
-COLOCA-SE NA PALAVRA DESEJADA
<strong></strong>

TAG FIGURE: INSERE APENAS A IMAGEM
-DENTRO DELA COLOCA A TAG IMG SRC
<figure><img src=""></figure>

BORDER RADIUS - ARREDONDA OS CANTOS
border-top-right-radius: 100px;
border-bootom-right-radius: 100px;

TAG INPUT: ENTRAR COM TECLADO (DADOS)
-DA PRA ESPECIFICAR O CAMPO USANDO A TAG TYPE (E-MAIL, TELEFONE, BUSCA)
TAG PLACEHOLDER = INDICA OQ ESTARÁ PREVIAMENTE ESCRITO NO CAMPO
<input type="email/search" placeholder="e-mail/busca">

META DA RESOLUÇÃO DA TELA DO CELULAR, RESPONSIVO
<meta name="viewport" content="width=device-width">

```

- OBSERVAÇÕES:

```
- RESET CSS : INSERIR NO HEAD COMO LINK REL="" COMO PRIMEIRO ARQUIVO CSS A SER LIDO

PEGAR FONTE NO GOOGLE FONTS: INSERIR NO <HEAD>
<link href="https://fonts.googleapis.com/css?family=Roboto:300,400,700" rel="stylesheet">

UMA CLASS NO HTML SE SEPARA SÓ POR ESPAÇOS:
<a class="class1 class2"></a>

CALL TO ACTION - BOTÃO PRINCIPAL A SER CLICADO

<DL><DT><DD> - DESCRIPTION LIST, TITLE E DEFINE DESCRIPTION
-ESCREVER TEXTO, DESCRIÇÃO DE PRODUTOS DA PÁGINA, ETC
-PARDÃO DISPLAY: BLOCK
<dl></dl>
<dt></dt>
<dd></dd>

UPDATE

```

- RESET.CSS

```
/* http://meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
```
