# Boas vindas ao repositório backend do projeto de Deploy - Stranger Things!

Aqui você vai encontrar os locais para colocar suas repostas relativas aos requisitos de backend.

**Lembre-se**: coloque as respostas apenas dos requisitos que contém o seguinte direcionamento:

  - Adicione os comandos utilizados, de maneira sequencial, ao README do backend.

**Nota**: Este direcionamento está presente no [repositório](https://github.com/tryber/sd-02-project-stranger-things) em que os requisitos do projeto são destrinchados.

## Requisitos

### 6 - Deploy Heroku

Para realizar o deploy do meu backend, fiz o seguinte procedimento:

`Adicione aqui os comandos utilizados, de maneira sequencial.`

```
heroku login
heroku create --remote hawkins stranger-things
heroku create --remote upside-down stranger-things-up-down
heroku config:set upsideDown="false" --app stranger-things
heroku config:set upsideDown="true" --app stranger-things-up-down
git add .
git commit -m "Requisito 6"
git push stranger-things pedro-tofani:master
git push stranger-things-up-down pedro-tofani:master
```

### 7 - Monitoramento

Para conseguir realizar o monitoramento da minha API, fiz o seguinte procedimento:

`Adicione aqui os comandos utilizados, de maneira sequencial.`
