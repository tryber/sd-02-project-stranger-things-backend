# Boas vindas ao repositório backend do projeto de Deploy - Stranger Things!

Aqui você vai encontrar os locais para colocar suas repostas relativas aos requisitos de backend.

**Lembre-se**: coloque as respostas apenas dos requisitos que contém o seguinte direcionamento:

  - Adicione os comandos utilizados, de maneira sequencial, ao README do backend.

**Nota**: Este direcionamento está presente no [repositório](https://github.com/tryber/sd-02-project-stranger-things) em que os requisitos do projeto são destrinchados.

## Requisitos

### 6 - Deploy Heroku

Para realizar o deploy do meu backend, fiz o seguinte procedimento:

comandos:

heroku create jct-hawkins-2801 --remote jct-hawkins-2801
heroku create jct-upside-down-2801 --remote jct-upside-down-2801
git add .
git commit -m "mensagem"
git push jct-hawkins-2801 julio-cezar-stranger-back:master
git push jct-upside-down-2801 julio-cezar-stranger-back:master
heroku config:set UPSIDE_DOWN="true" --app jct-hawkins-2801
heroku config:set UPSIDE_DOWN="false" --app jct-upside-down-2801

### 7 - Monitoramento

Para conseguir realizar o monitoramento da minha API, fiz o seguinte procedimento:

heroku config:set \
PM2_PUBLIC_KEY=PUBLIC KEY \
PM2_SECRET_KEY=SECRET KEY \
PM2_MACHINE_NAME=hawkins \
-a jct-hawkins-2801

heroku config:set \
PM2_PUBLIC_KEY=PUBLIC KEY \
PM2_SECRET_KEY=SECRET KEY \
PM2_MACHINE_NAME=upsideDown \
-a jct-upside-down-2801
