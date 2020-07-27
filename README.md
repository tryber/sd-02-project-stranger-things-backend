# Boas vindas ao repositório backend do projeto de Deploy - Stranger Things!

Aqui você vai encontrar os locais para colocar suas repostas relativas aos requisitos de backend.

**Lembre-se**: coloque as respostas apenas dos requisitos que contém o seguinte direcionamento:

  - Adicione os comandos utilizados, de maneira sequencial, ao README do backend.

**Nota**: Este direcionamento está presente no [repositório](https://github.com/tryber/sd-02-project-stranger-things) em que os requisitos do projeto são destrinchados.

## Requisitos

### 6 - Deploy Heroku

Para realizar o deploy do meu backend, fiz o seguinte procedimento:

heroku create --remote hawkins --app andrey-ts-hawkins
heroku config:set UPSIDE_DOWN=false --app andrey-ts-hawkins
git push hawkins andrey-stranger-things:master

heroku create --remote upside-down --app andrey-ts-upside-down
heroku config:set UPSIDE_DOWN=true --app andrey-ts-upside-down
git push upside-down andrey-stranger-things:master

### 7 - Monitoramento

Para conseguir realizar o monitoramento da minha API, fiz o seguinte procedimento:

heroku config:set \
PM2_PUBLIC_KEY=w408wpmedn79gi9 \
PM2_SECRET_KEY=[private_key] \
PM2_MACHINE_NAME=upside-down \
-a andrey-ts-upside-down

heroku config:set \
PM2_PUBLIC_KEY=w408wpmedn79gi9 \
PM2_SECRET_KEY=[private_key] \
PM2_MACHINE_NAME=hawkins \
-a andrey-ts-hawkins
