# Teste para Engenheiro de Software Backend

A proposta deste teste é criar uma integração integrações com a API da marvel. 

## Como fazer seu teste
   - Para realizar o teste faça um Fork do repositório e trabalhe no branch com seu nome-sobrenome. Quando terminar faça um PullRequest deste branch. 
 
## Prazo para entrega
  Você terá 3 dias.

## Detalhes API Marvel
  - Acessar o site da API Marvel [Site da API](https://developer.marvel.com/documentation/getting_started)
  - Criar uma conta para obter as credencias para acessar a api Marvel
  - Uma vez gerada sua chave você usará as credencias para implementar os endpoints a seguir.     
  - Detalhe no README.md as informações necessárias para que podamos avaliar seu teste.

## Especificação do projeto

  - Fazer setup de uma API restfull na linguagem da sua escolha. 
  - Implemente sua API seguindo as melhores práticas de arquitetura e design patterns.
  - Utilize as libs que ache necessário na implementação do seu app.
  - 

## Primeiro exercício  

  - Fazer setup do projeto da API rest.
  - Criar um endpoint para recuperar da api Marvel o personagem (characters) "Avengers" e todas suas publicações (comics).
 
## Segundo exercício

   - Inserir cada item (nó) do endpoint acima e inserir em uma fila (Avengers) sincrona usando RabbitMQ.
    
## Terceiro exercício

   - Criar um serviço para escutar a fila Avengers e processar os seus itens. 
   - Persistir estas informações em collections (nosql) ou tabelas (relacional).  
      * Dados importantes personagem (id, name, description, modified, thumbnail).  
      * Dados importantes comics (available, items[resourceURI, name])
   - Criar o MER das entidades
  
## Quarto exercício

   - Criar um endpoint que recupera do banco de dados o resourceURI de uma publicações (comic) de Avengers a partir do código = 77059 localizado na resourceURI. 
   - Fazer um request para a url recuperada do banco. Deve retornar os detalhes da comigc = 77059.
   
## Quinto exercício

  - Criar um docker-compose para a app, database, filas e outros.
   
## Sexto exercício

  - Configurar um arquivo serverless.yml para fazer o deploy dos endpoints em um cloud (aws, azure ou google cloud) usando [serverless framework](https://www.serverless.com/framework/docs/).
 





