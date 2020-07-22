# Boas vindas ao repositório backend do projeto de Deploy - Stranger Things!

Aqui você vai encontrar os locais para colocar suas repostas relativas aos requisitos de backend.

**Lembre-se**: coloque as respostas apenas dos requisitos que contém o seguinte direcionamento:

  - Adicione os comandos utilizados, de maneira sequencial, ao README do backend.

**Nota**: Este direcionamento está presente no [repositório](https://github.com/tryber/sd-02-project-stranger-things) em que os requisitos do projeto são destrinchados.

## Requisitos

### 6 - Deploy Heroku

Para realizar o deploy do meu backend, fiz o seguinte procedimento:

`Adicione aqui os comandos utilizados, de maneira sequencial.`
heroku create --remote hawkins miguelito-hawkins
heroku create --remote upside-down miguelito-upside-down
heroku config:set UPSIDE_DOWN_MODE="FALSE" --app miguelito-hawkins
heroku config:set UPSIDE_DOWN_MODE="TRUE" --app miguelito-upside-down
git push hawkins miguel-stranger-things:master
git push upside-down miguel-stranger-things:master

### 7 - Monitoramento

Para conseguir realizar o monitoramento da minha API, fiz o seguinte procedimento:

`Adicione aqui os comandos utilizados, de maneira sequencial.`
heroku config:set \
PM2_PUBLIC_KEY=wp8v0k1u35lboa6 \
PM2_SECRET_KEY="CHAVE_PRIVADA_AQUI" \
PM2_MACHINE_NAME=heroku-hawkins \
--app miguelito-hawkins
heroku config:set \
PM2_PUBLIC_KEY=wp8v0k1u35lboa6 \
PM2_SECRET_KEY="CHAVE_PRIVADA_AQUI" \
PM2_MACHINE_NAME=heroku-upside-down \
--app miguelito-upside-down


