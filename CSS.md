# CSS

```
LINGUAGEM DE ESTILO
CUIDA DE TUDO Q É VISUAL
```

- SINTAXE: ESCREVENDO NO ARQUIVO .CSS

```
SELECIONAR UMA TAG INTEIRA:

header {
}
```

```
COR DE FUNDO:
background-color: #FFF;

COR DA FONTE:
color: #FFF;

ELIMINAR UMA PROPRIEDADE VISUAL PADRÃO DO HTML:
text-decoration: none;

TAMANHO DA FONTE:
font-size: 20px;

FAMÍLIA DA FONTE:
font-family: 'Roboto', sans-serif;

FLOAT: LEFT OU RIGHT
-MEXE COM O CONTEXTO DA PAGE (CRIA UM NOVO) / TRAZ PRA FRENTE
-NUNCA ESCONDE  O CONTEÚDO DO Q ESTÁ ATRÁS
-O TAMANHO DO ELEMENTO É O TAMANHO DO CONTEÚDO
-O ELEMENTO DEIXA DE HERDAR DO PAI, É IGNORADO
-O PAI PERDE TODAS AS REFERÊNCIAS SE TODOS OS ELEMENTOS ESTÃO COM FLOAT ATIVO
float: left;

OVERFLOW: ESCONDER UM ELEMENTO
-RECALCULA O CONTEXTO (DO PAI)
-FAZ O PAI CONSIDERAR O CONTEXTO DOS FILHOS
overflow: hidden;

OPACITY: DE 0 A 1 - 1 = COR CHEIA
opacity: 0.5;

MARGIN - RESPIRO EXTERNO (QUANDO UM ELEMENTO EMPURRA O OUTRO)
margin-left: 50px;

PADDING - RESPIRO INTERNO
padding-left: 60px;

PADDING/MARGIN PURO: SENTIDO HORÁRIO (USAR COMUNS SE FOREM DE MESMO VALOR APENAS)
4 valores
padding: top right bottom left;
3 valores
padding: top right/left bottom;
2 valores
padding: top/bottom right/left;
1 valor
padding: top/right/bottom/left;

CLEAR: LIMPA A PROPRIEDADE FLOAT DO ELEMENTO AO LADO, FAZENDO DESCER/CAIR PRA LINHA ABAIXO
clear: right;

# - CHAMA UMA ID DO CÓDIGO HTML
#nome_da_id {
}

CLASS = CHAMA UMA CLASSE DO CÓDIGO HTML
.nome_da_class {
}

DISPLAY INLINE
-DEIXA ELEMENTOS NA MESMA LINHA
-NÃO DEIXA DEFINIR WIDTH E HEIGHT
display: inline;

DISPLAY BLOCK
-NÃO DEIXA NA MESMA LINHA
-DEIXA DEFINIR WIDTH E HEIGHT
display: block;

DISPLAY INLINE BLOCK
-DEIXA ELEMENTOS NA MESMA LINHA
-DEIXA DEFINIR WIDTH E HEIGHT
display: inline-block;

TEXT ALIGN - ALINHA O TEXTO HORIZONTALMENTE
text-align: center;

LINE HEIGHT - ALINHA O TEXTO VERTICALMENTE COLOCANDO O TAMALHO DA LINHA DO TEXTO DA MESMA ALTURA DO BOTÃO
line-height: 60px;

POSITION - ABSOLUTE
-MOVE O ELEMENTO DE FORMA ABSOLUTA
-CRIA UM NOVO CONTEXTO (IGUAL O FLOAT)
-OQ DEFINE A ALTURA E LARGURA É O CONTEÚDO
-USAR COM PROPRIEDADES TOP,RIGHT BOTTOM E LEFT
-ESSAS PROPRIEDADES MOVEM O ELEMENTO EM RELAÇÃO À PÁGINA
position: absolute;
top: 20px;

TRANSFORM TRANSLATE X - MOVE EM RELAÇÃO AO EIXO DO ELEMENTO
transform: translateX(50%);
transform: translateY(50%);

BORDER - SETA O TIPO DE BORDA
border: 2px solid #fff; (TAMANHO, TIPO E COR)

VERTICAL ALIGN - É USADO APENAS COM DISPLAY INLINE-BLOCK
-SERVE PRA AJUSTAR DOIS ELEMENTOS COM ESSA PROPRIEDADE
-(O PADRÃO É 'BASELINE')
-TOP, MIDDLE, BOTTOM...
vertical-align: top;

BOX SIZING: INDICA O TAMANHO DA CAIXA DO BOTÃO:
-O PADRÃO É CONTENT-BOX
-INDICA-SE COLOCAR BORDER-BOX PRA CONTAR COM A BORDA DO BOTÃO Q FOR IMPOSTA
box-sizing: border-box;

.nomedaclasse.-variacao - O CSS VAI PROCURAR EXATAMENTE ESSA CLASSE E VARIAÇÃO PARA REALIZAR AS ALTERAÇÕES
.nomedaclasse.-variacao {
}

CHAMAR FILHO DIRETO NO CSS - COLOCA-SE UM SINAL DE MAIOR ENTRE AS CLASSES
.pai > .filho {
}

CASO NÃO SEJA FILHO -DIRETO-:
.pai .filho {
}

PRA SE CHAMAR EXIGINDO Q UM ELEMENTO TENHA DUAS CLASSES ESPECÍFICAS COLOCA-SE AS DUAS CLASSES JUNTAS NO CSS:
.classe1.classe2 {
}

LETRAS CAPITULARES:
text-transform: uppercase;

TAMANHO DA LINHA:
line-height: 100px;

```

- OBSERVAÇÕES:

```
PEGAR FONTE NO GOOGLE FONTS: INSERIR NO <HEAD>
<link href="https://fonts.googleapis.com/css?family=Roboto:300,400,700" rel="stylesheet">

CTRL+P + : + NÚMERO DA LINHA PRA IR DIRETO PRA LINHA DESEJADA

ESCREVO LOGO E QUERO Q RESPEITE O CONTEUDO DELE, APENAS (FILHOS SE SEPARAM ENTRE ELES E DO PAI):
float: left;
+ QUERO Q O PAI VEJA OS FILHOS :
float: left;
overflow: hidden;

SE EU DEIXO ASSIM PQ O PAI TINHA A COR DO FUNDO E QUERO Q TUDO SE DESENHE BASEADO NELE EU FAÇO ISSO ACIMA E AJUSTO COM MARGIN E PADDING.

CONFIGURAR UM BOTÃO - POSICIONAMENTO LARGURA, ALTURA...

-SETA O DISPLAY
-SETA ALTURA E LARGURA
-SETA TEXT-ALIGN (ALINHAMENTO HORIZONTAL)
-SETA LINE-HEIGHT (ALINHAMENTO VERTICAL)

CALL TO ACTION - BOTÃO PRINCIPAL A SER CLICADO

A IDEIA DA CLASSE É SER FLEXÍVEL, PODER SER USADA PRA VÁRIOS ELEMENTOS



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
