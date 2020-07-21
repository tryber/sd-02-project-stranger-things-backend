# Boas vindas ao repositório backend do projeto de Deploy - Stranger Things!

Aqui você vai encontrar os locais para colocar suas repostas relativas aos requisitos de backend.

**Lembre-se**: coloque as respostas apenas dos requisitos que contém o seguinte direcionamento:

  - Adicione os comandos utilizados, de maneira sequencial, ao README do backend.

**Nota**: Este direcionamento está presente no [repositório](https://github.com/tryber/sd-02-project-stranger-things) em que os requisitos do projeto são destrinchados.

## Requisitos

### 6 - Deploy Heroku

Para realizar o deploy do meu backend, fiz o seguinte procedimento:

`Adicione aqui os comandos utilizados, de maneira sequencial.`

heroku create 
git remote rename heroku hawkins
heroku config:set upsideDown="false" --app floating-fortress-3665
heroku create 
git remote rename heroku upside-down
heroku config:set upsideDown="true" --app obscure-basin-84879
git add .
git commit -m 'api add'
git push upside-down douglas-he-stranger-things:master 
git push hawkins douglas-he-stranger-things:master

### 7 - Monitoramento

Para conseguir realizar o monitoramento da minha API, fiz o seguinte procedimento:

`Adicione aqui os comandos utilizados, de maneira sequencial.`

heroku config:set \
PM2_PUBLIC_KEY=CHAVE_PUBLICA \
PM2_SECRET_KEY=CHAVE_PRIVADA \
PM2_MACHINE_NAME=stranger1 \
--app floating-fortress-36656
heroku config:set \
PM2_PUBLIC_KEY=1w4slu353c5d4vy \
PM2_SECRET_KEY=kw7ispwaipe7m8s \
PM2_MACHINE_NAME=stranger2 \
--app obscure-basin-84879
