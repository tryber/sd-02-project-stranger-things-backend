# Boas vindas ao repositório backend do projeto de Deploy - Stranger Things!

Aqui você vai encontrar os locais para colocar suas repostas relativas aos requisitos de backend.

**Lembre-se**: coloque as respostas apenas dos requisitos que contém o seguinte direcionamento:

- Adicione os comandos utilizados, de maneira sequencial, ao README do backend.

**Nota**: Este direcionamento está presente no [repositório](https://github.com/tryber/sd-02-project-stranger-things) em que os requisitos do projeto são destrinchados.

## Requisitos

### 6 - Deploy Heroku

git status: On branch bolivar-stranger-things-backend;

- Login no Heroku

  - heroku login;

- Remotes:

  - heroku create --remote hawkins stranger-things-bolivar;
  - heroku create --remote upside-down stranger-things-bolivar-down;
  - git remote -v;

- Variáveis de Ambiente:

  - heroku config:set
    upsideDown="false"
    PM2_PUBLIC_KEY=PUBLIC_KEY
    PM2_SECRET_KEY=SECRET_KEY
    PM2_MACHINE_NAME=andersonbolivar-15aa
    --app stranger-things-bolivar;
  - heroku config:set
    upsideDown="true"
    PM2_PUBLIC_KEY=PUBLIC_KEY
    PM2_SECRET_KEY=SECRET_KEY
    PM2_MACHINE_NAME=andersonbolivar-15aa
    --app stranger-things-bolivar-down;

- Deploy:

  - git add;
  - git commit -m "BOLIVAR"
  - git push hawkins bolivar-stranger-things-backend:master;
  - git push upside-down bolivar-stranger-things-backend:master;

### 7 - Monitoramento

- Logs:

  - heroku logs --tail --app stranger-things-bolivar;
  - heroku logs --tail --app stranger-things-bolivar-down;
  - heroku apps:info stranger-things-bolivar;
  - heroku apps:info stranger-things-bolivar-down
