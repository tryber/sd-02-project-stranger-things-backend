# Boas vindas ao repositório backend do projeto de Deploy - Stranger Things!

Aqui você vai encontrar os locais para colocar suas repostas relativas aos requisitos de backend.

**Lembre-se**: coloque as respostas apenas dos requisitos que contém o seguinte direcionamento:

  - Adicione os comandos utilizados, de maneira sequencial, ao README do backend.

**Nota**: Este direcionamento está presente no [repositório](https://github.com/tryber/sd-02-project-stranger-things) em que os requisitos do projeto são destrinchados.

## Requisitos

### 6 - Deploy Heroku

Para realizar o deploy do meu backend, fiz o seguinte procedimento:

`Adicione aqui os comandos utilizados, de maneira sequencial.`

sudo apt install snapd
sudo snap install heroku --classic
heroku login
heroku create --remote hawkins stranger-things-216987
heroku create --remote upside-down stranger-things-216988
<!-- O processo envolveu adicionar a condição "preinstall" nos scripts do package.json e mudar a variavel de ecosistema de cada branch para dizer se a Realidade Alternativa está ou não alterada. -->
git checkout -b backend-hawkins
git add .
git commit -m "deploying hawkins"
git push hawkins backend-hawkins:master
git checkout -b backend-upside-down
git add .
git commit -m "deploying upside-down"
git push upside-down upside-down:master

### 7 - Monitoramento

Para conseguir realizar o monitoramento da minha API, fiz o seguinte procedimento:

`Adicione aqui os comandos utilizados, de maneira sequencial.`
