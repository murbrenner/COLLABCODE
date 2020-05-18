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
HREF: ATRIBUTO DE LINK DA ÂNCORA
USAR PARA LINKS, ALGO CLICÁVEL

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

```

- RESET CSS : INSERIR NO HEAD COMO LINK REL="" COMO PRIMEIRO ARQUIVO CSS A SER LIDO

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