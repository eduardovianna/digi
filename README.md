# Descrição do Teste Técnico para Desenvolvedor

## Objetivo
Desenvolver uma aplicação simples que:
1. Consuma dados do arquivo JSON products.json.
2. Exiba informações sobre produtos.
3. Permita adicionar e remover produtos no carrinho de compras.
4. Visualizar o carrinho após terminar de incluir os itens no mesmo.

## Tecnologias
- Utilize qualquer tecnologia de sua escolha (React, Angular, Vue, Node.js, Python, Flutter, etc.).
- A aplicação deve ser responsiva e funcionar em diferentes dispositivos.

## Requisitos
- O projeto deve conter um arquivo `README.md` com instruções claras sobre como executar o projeto.
- Utilize Git para controle de versão, seguindo a estratégia de Gitflow.
- A interface deve ser intuitiva e de fácil navegação.
- É mandatório o uso do arquivo JSON disponibilizado neste repositório.

## Avaliação
- Qualidade do código.
- Cumprimento dos requisitos.
- Usabilidade da interface.
- Documentação no `README.md`.

## Instruções para Desenvolvimento

1. Crie o Repositório
   - Crie um repositório no seu perfil do Github;
     
2. Desenvolvimento
   - Crie uma nova branch para seu desenvolvimento, seguindo o Gitflow:
     ```
     git checkout -b feature/<nome-da-feature>
     ```
   - Desenvolva a solução conforme os objetivos e requisitos descritos.
   - Leve em consideração que é uma aplicação real e que poderia ter novos requisitos e funcionalidades.
   - Faça commits regulares com mensagens claras.

3. Testes e Validação
   - Realize testes para garantir que a aplicação funciona conforme o esperado.
   - Certifique-se de que todos os requisitos foram atendidos.

4. Documentação
   - Atualize o arquivo `README.md` com instruções detalhadas sobre como executar a aplicação.

5. Disponibilizar para Avaliação
   - Após concluir o desenvolvimento e a documentação, faça o push das alterações para seu repositório:
     ```
     git push origin feature/<nome-da-feature>
     ```
   - Crie um Pull Request da sua branch para a branch principal (`main` ou `master`) do repositório original.

## Prazo
- O prazo para a conclusão do teste é de 2 dias após o recebimento das instruções.

Lembre-se de manter um bom nível de organização e limpeza do código, além de seguir as boas práticas de desenvolvimento e documentação. Boa sorte!


# TESTE DIGI

## Teste Digi referente à leitura de dados via arquivo JSON e exibição de dados em aplicação Web via Web Api

O objetivo principal do teste é demonstrar a estrutura, organização e versatilidade na utilização de tecnologias, seguindo a mesma lógica e padrão, independente da tecnologia utilizada.

Este documento é referente ao teste elaborado pela Digi e reflete a estrutura de uma aplicação de loja, que recebe dados de produtos via arquivo JSON (consumidos por API Rest)
e adiciona os mesmos ao carrinho, cujo qual também tem a opção de excluir do carrinho.

Ambas as Apis seguem no mesmo formato e ambas documentadas com Swagger.

### Estão disponíveis com as seguintes tecnologias:
- V1 (TesteDigi) - Web Api desenvolvida em .NET 7
- V2 (teste-digi-v2) - Web Api desenvolvida em Laravel 10 (PHP)
- V3 (teste-digi-v3) - Web Api desenvolvida em Node/Express.
- Web (teste-digi-web) - Camada Web desenvolvida em Angular 16

## Clonagem e testes.

Para clonar é necessário realizar o pull request da branch master e salvar no local de preferência (recomanda-se o C:\Dev)

- Para executar a Web Api V1 é necessário possuir o Visual Studio 2019 ou posterior com suporte ao SDK do .NET 7.
- Para executar a V2, é necessário possuir instalado o PHP 8.x e o Composer na máquina local (para baixar as dependências, execute no terminal o comando "composer install")
- Para executar a Api V3, é necessário ter instalado o Node JS (versão preferencial 20.x)
- Para executar a camada Web de Angular, é necessário ter o Angular CLI (para executar os scripts no terminal) e o Node JS conforme requisito anterior.

Observação: para instalação dos pacotes do Node, é necessário realizar no terminal (na pasta de cada aplicação) o comando "npm install".

### Os projetos de Web API estão no padrão repository, em ambos estão com um método GetAll (para listagem de todos os produtos), através da simulação de consulta em banco
(através de uma classe de dados), passando por camada de serviço (originalmente, a camada de serviços seria uma intermediação para validações da regra de negócio) até chegar no controlador
(Controller) da requisição.

### A Camada Web segue no padrão de componentização, aonde os dados do carrinho de compras são armazenados na sessão do navegador (sessionStorage, porém poderia ser armazenado em cookie,
localStorage, memória ou mesmo no banco).

Recomenda-se a utilização do Visual Studio Code para testes (com exceção do projeto em .NET, os demais acompanham scripts de execução, sem necessidade de abrir um terminal e executar os comandos dos respectivos frameworks).

Qualquer dúvida, pode entrar em contato comigo!

Atenciosamente,
Renato Falzoni.
