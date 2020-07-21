# Boas vindas ao repositório backend do projeto de Deploy - Stranger Things!

Aqui você vai encontrar os locais para colocar suas repostas relativas aos requisitos de backend.

**Lembre-se**: coloque as respostas apenas dos requisitos que contém o seguinte direcionamento:

  - Adicione os comandos utilizados, de maneira sequencial, ao README do backend.

**Nota**: Este direcionamento está presente no [repositório](https://github.com/tryber/sd-02-project-stranger-things) em que os requisitos do projeto são destrinchados.

## Requisitos

### 6 - Deploy Heroku

Para realizar o deploy do meu backend, fiz o seguinte procedimento:

`heroku create richard-st-hawkings`

`git remote rename heroku hawkings`

`heroku create richard-st-upsidedown`

`git remote rename heroku upsidedown`

`heroku config:set UPSIDE_DOWN=false -a richard-st-hawkings`

`heroku config:set UPSIDE_DOWN=true -a richard-st-upsidedown`

`git push hawkings richard/backend:master`

`git push upsidedown richard/backend:master`

### 7 - Monitoramento

Para conseguir realizar o monitoramento da minha API, fiz o seguinte procedimento:

`heroku config:set PM2_PUBLIC_KEY={Chave Pública} PM2_SECRET_KEY={Chave Secreta} PM2_SERVER_NAME=hawkings -a richard-st-hawkings`

`heroku config:set PM2_PUBLIC_KEY={Chave Pública} PM2_SECRET_KEY={Chave Secreta} PM2_SERVER_NAME=upsidedown -a richard-st-upsidedown`
