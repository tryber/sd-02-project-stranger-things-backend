# Boas vindas ao repositório backend do projeto de Deploy - Stranger Things!

Aqui você vai encontrar os locais para colocar suas repostas relativas aos requisitos de backend.

**Lembre-se**: coloque as respostas apenas dos requisitos que contém o seguinte direcionamento:

  - Adicione os comandos utilizados, de maneira sequencial, ao README do backend.

**Nota**: Este direcionamento está presente no [repositório](https://github.com/tryber/sd-02-project-stranger-things) em que os requisitos do projeto são destrinchados.

## Requisitos

### 6 - Deploy Heroku

Para realizar o deploy do meu backend, fiz o seguinte procedimento:

`Adicione aqui os comandos utilizados, de maneira sequencial.`

`heroku create --remote hawkins guicgs-st-backend`
`heroku config:set UPSIDE_DOWN=false --remote hawkins`
`git push hawkins guicgs-stranger-things-backend:master`

`heroku create --remote upside-down guicgs-st-backend-upside`
`heroku config:set UPSIDE_DOWN=true --remote upside-down`
`git push upside-down guicgs-stranger-things-backend:master`

### 7 - Monitoramento

Para conseguir realizar o monitoramento da minha API, fiz o seguinte procedimento:

`Adicione aqui os comandos utilizados, de maneira sequencial.`

`heroku config:set PM2_PUBLIC_KEY=xxxxxxxxxx --remote hawkins`
`heroku config:set PM2_SECRET_KEY=xxxxxxxxxx --remote hawkins`
`heroku config:set PM2_MACHINE_NAME=hawkins_api --remote hawkins` 

`heroku config:set PM2_PUBLIC_KEY=xxxxxxxxxx --remote upside-down`
`heroku config:set PM2_SECRET_KEY=xxxxxxxxxx --remote upside-down`
`heroku config:set PM2_MACHINE_NAME=upside_down_api --remote upside-down`