# API Webhook

Este é um servidor Node.js que recebe dados JSON via webhook e os encaminha para outra URL via POST.

## Autores

- [@medeirosnvk](https://www.github.com/medeirosnvk)

## Pré-requisitos

Antes de começar, certifique-se de ter instalado em sua máquina:

- Node.js
- npm (gerenciador de pacotes do Node.js)

## Instalação

Clone este repositório em sua máquina local:

```bash
git clone https://github.com/medeirosnvk/api-webhook.git
cd api-webhook
npm install
```

## Configuração

Crie um arquivo .env na raiz do projeto e defina a porta que o servidor irá usar, juntamente com sua url e caminho onde sua API ira salvar os arquivos JSON:

```bash
PORT = 3000
HOST_NAME = sua_url.com.br
PATH = /exemplo/exemplo.php
```

## Uso/Exemplos

Inicie o servidor:

```javascript
yarn dev
```
