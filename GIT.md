# GIT - VERSIONAMENTO

- SERVE PRA SALVAR TRABALHOS DO DIA ANTERIOR

COMANDOS:

```
- cd /mnt/[UNIDADE]
- mkdir [NOME DA PASTA]
- ls [lista os arquivos]
- cd .. [VOLTA]
- code . [. = PASTA RECORRENTE]
```

```
ARQUIVOS .md
md = MARKDOWN
```

- REPOSITÓRIO: LOCAL ONDE FICA O CÓDIGO

COMANDOS:

```
git init [inicializar o rastreio/track pelo git, alterações, etc]

git status [lista o momento, oq foi alterado]

git add . [trackeia, guarda o estado do momento] [. = todos os arquivos]

git config --global user.email "[EMAIL]" [pra adicionar quem vc é pro git, quem está fazendo a alteração]
git config --global user.name "[NOME]" [inserir nome]

Dps disso o commit -m funciona:
git commit -m "[MENSAGEM]" [momento q se quer guardar do código. -m = anotações/mensagem]

git log = [saber mais informações, todos os registros de commit]
[apertar "q" pra sair]

Ctrl+Shift+K = limpa tudo no hyper.
```

- GITHUB - LOCAL FREE PRA GUARDAR O CÓDIGO

COMANDOS:

```
git remote add origin [inserir o link do repositório criado lá no github "https://[...].git"]

git push -u origin master
inserir usuário e senha do github
```
