
Esta é uma simples aplicação, utilizando alguns dos últimos recursos do ReactJS, que realiza a consulta de usuários e seus respectivos repositórios no GitHub (https://developer.github.com/v3/).

### `Hooks e Context`
Foram utilizados para controlar a atualização do componente (useEffect, useState), alteração de inputs (useRef) e contexto (useContext).

### `Consultas Offline`
O registro do service worker foi ativado, para que aplicação possa ser executada offline. Os dados dos últimos usuários visualizados estão sendo armezenados no localStorage.

## Execução local

### `yarn install`
 
Instalação de todas as dependências do projeto, configuradas no arquivo package.json

### `yarn test`

Execução de testes unitários dos componentes.  

### `yarn start`

  Execução da aplicação, rodando na porta padrão (http://localhost:3000)
  
## Deploy
Para o deploy da aplicação, foi utilizado o [GitHub Pages](https://pages.github.com/) e uma versão publicada pode ser acessada em http://leonardocavalcanti.github.io/github-search-user.

Para realizar um novo deploy, basta executar o comando `yarn run deploy`.
