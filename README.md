# Boas vindas ao repositório backend do projeto de Deploy - Stranger Things!

Aqui você vai encontrar os locais para colocar suas repostas relativas aos requisitos de backend.

**Lembre-se**: coloque as respostas apenas dos requisitos que contém o seguinte direcionamento:

  - Adicione os comandos utilizados, de maneira sequencial, ao README do backend.

**Nota**: Este direcionamento está presente no [repositório](https://github.com/tryber/sd-02-project-stranger-things) em que os requisitos do projeto são destrinchados.

## Requisitos

### 6 - Deploy Heroku

Para realizar o deploy do meu backend, fiz o seguinte procedimento:

`Adicione aqui os comandos utilizados, de maneira sequencial.`
Como são dois deploys de backend, vamos repetir alguns comandos duas vezes.

Subindo backend sem upside-down (hawkins)
heroku create --remote hawkins --app johnatas-st-hawkins
heroku config:set UPSIDE_DOWN=false --app johnatas-st-hawkins
git add .
git commit -m "Add API Hawkins"
git push hawkins johnatas-henrique-stranger-things-backend:master

Subindo backend com upside-down (upside-down)
heroku create --remote upside-down --app johnatas-st-upside-down
heroku config:set UPSIDE_DOWN=true --app johnatas-st-upside-down
git add .
git commit -m "Add API upside-down"
git push upside-down johnatas-henrique-stranger-things-backend:master

### 7 - Monitoramento

Para conseguir realizar o monitoramento da minha API, fiz o seguinte procedimento:

`Adicione aqui os comandos utilizados, de maneira sequencial.`
