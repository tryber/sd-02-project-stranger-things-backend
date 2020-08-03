# Boas vindas ao repositório backend do projeto de Deploy - Stranger Things!

Aqui você vai encontrar os locais para colocar suas repostas relativas aos requisitos de backend.

**Lembre-se**: coloque as respostas apenas dos requisitos que contém o seguinte direcionamento:

  - Adicione os comandos utilizados, de maneira sequencial, ao README do backend.

**Nota**: Este direcionamento está presente no [repositório](https://github.com/tryber/sd-02-project-stranger-things) em que os requisitos do projeto são destrinchados.

## Requisitos

### 6 - Deploy Heroku

Para realizar o deploy do meu backend, fiz o seguinte procedimento:

```
heroku login
heroku create --remote hawkings lauro-stranger-things
heroku create --remote upside-down lauro-stranger-things-reverse
git remote -v
heroku config:set upsideDown=false --app lauro-stranger-things
heroku config:set upsideDown=true --app lauro-stranger-things-reverse
git add .
git commit -m "Ready for deploy"
git push hawkings lauro-stranger-things:master
git push upside-down lauro-stranger-things:master
```

### 7 - Monitoramento

Para conseguir realizar o monitoramento da minha API, fiz o seguinte procedimento:

```
heroku config:set PM2_PUBLIC_KEY=CHAVE_PUBLICA PM2_SECRET_KEY=CHAVE_PRIVADA PM2_MACHINE_NAME=LAURO_PC --app lauro-stranger-things

heroku config:set PM2_PUBLIC_KEY=CHAVE_PUBLICA PM2_SECRET_KEY=CHAVE_PRIVADA PM2_MACHINE_NAME=LAURO_PC_UD --app lauro-stranger-things-reverse
```
