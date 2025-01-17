<h1>apibackend criado por Valdir Torres</h1>
Raiz do projeto ==> /apigestaocontatos

<p>Modelo de dados:


Mongo (nosql)


Tabela Contato

ID: int

Nome: String

Canal: String

Valor: String

Obs: String</p>
<br/>
<h2>host da api: http://localhost:8000</h2>

<h3>Uso da apigestaocontatos:</h3>
<hr>
<h5>/apigestaocontatos/contatos        POST	Adicionar um contato</h5>

Ex: http://localhost:8000/apigestaocontatos/contatos

Obs.: Caso o use o Postman, pona na aba "Body" o seguinte json:
{
        "nome": "Angelina Jolie",
        "canal": "outro canal",
        "valor": "500",
        "obs": "Estrelou o filme Tomb Raider"
}

marque a opção "raw" e "JSON(application/json)", depois clique no botão "Send".

Resultado esperado:
{
    "message": "Contato adicionado!"
}

<hr>

<h5>/apigestaocontatos/contatos	            GET	    Listar todos os contatos do banco</h5>

Ex: http://localhost:8000/apigestaocontatos/contatos<br/> 
ou<br>
http://localhost:8000/apigestaocontatos/contatos?page=1&size=2<br>
Obs: Caso nem page nem size sejam fornecidos, os valores padrões são page=1 e size=10
Resultado esperado:
\[
    {
        "_id": "5b40fc32943abb2fc4c54aec",
        "nome": "Angelina Jolie",
        "canal": "novo canal",
        "valor": "1000",
        "obs": "Estrelou o filme Tomb Raider",
        "__v": 0
    },
    {
        "_id": "5b40fe43eb60b810c0eee901",
        "nome": "Ralph Macchio",
        "canal": "outro canal",
        "valor": "500",
        "obs": "Estrelou o filme Karate Kid",
        "__v": 0
    }
\]
<hr>
<h5>/apigestaocontatos/contatos/:nome	        GET	    Buscar por nome de contato</h5>
Ex: http://localhost:8000/apigestaocontatos/contatos/busca=Ang
Veja que basta por "Ang" que vai listar todos os nomes que tenham Ang em seu conteúdo<br>
Resultado esperado:<br>
\[
    {
        "_id": "5b40fc32943abb2fc4c54aec",
        "nome": "Angelina Jolie",
        "canal": "novo canal",
        "valor": "1000",
        "obs": "Estrelou o filme Tomb Raider",
        "__v": 0
    }
\]
<hr>
<h5>/apigestaocontatos/contatos/buscarporid/:contato_id	    GET	    Buscar por Id </h5>
<br>
Ex: http://localhost:8000/apigestaocontatos/contatos/5b40fc32943abb2fc4c54aec
Resultado esperado:
{
    "_id": "5b40fc32943abb2fc4c54aec",
    "nome": "Angelina Jolie",
    "canal": "novo canal",
    "valor": "1000",
    "obs": "Estrelou o filme Tomb Raider",
    "__v": 0
}
<hr>
<h5>/apigestaocontatos/contatos/:contato_id	    DELETE	Remover contato por Id</h5>
<br>
Ex: http://localhost:8000/apigestaocontatos/contatos/5b413c4b9f15483e54f68311
Resultado esperado:
{
    "message": "Contato excluído!"
}
<hr>
<h5>/apigestaocontatos/contatos/:contato_id	    PUT	    Atualizar contato por Id</h5>
<br>
Ex: http://localhost:8000/apigestaocontatos/contatos/5b0b60fb72e2982848f56784
Obs.: Caso o use o Postman, pona na aba "Body" o seguinte json:
{
        "nome": "Robert Downey Jr",
        "canal": "canal homem de ferro",
        "valor": "2500",
        "obs": "Estrelou o filme Homem de Ferro"
}
marque a opção "raw" e "JSON(application/json)", depois clique no botão "Send".
Resultado esperado:
{
    "message": "Contato atualizado!"
}
<hr>
<h4>Para executar a aplicação npm run dev: </h4>
Exemplo:
cd C:\apigestaocontatos
C:\apigestaocontatos> npm run dev 
obs.: Pode usar o comando node server.js também 
<hr>
Iniciar o mongo:
mongod --dbpath {PROJECT_PATH}\data
Ex: mongod --dbpath C:\projeto\data
Obs: O projeto funciona bem com uma base zerada também
<hr>
Abrir a página da apigestaocontatos:
http://localhost:8000/apigestaocontatos
<hr>
Testes:
Antes de tudo, caso não tenha os pacotes mocha, chai, should e supertest instalados, aplique na raiz do projeto:
npm install mocha -g --save-dev
npm install chai --save-dev
npm install should --save-dev
npm install supertest --save-dev
Na raiz do projeto (/apigestaocontatos por exemplo), digite mocha, pois vai testar tudo que está contido
no arquivo contato.spec.js dentro do diretório test.
Exemplo:
cd C:\apigestaocontatos
C:\apigestaocontatos> mocha
<hr>
Resultados esperados:<br> 
  Teste apigestaocontatos POST /contatos       <br>                                  
  √ 1 - Teste adicionar um contato com /apigestaocontatos/contatos (57ms)    <br>                                                                              
Teste apigestaocontatos GET                   <br>                                  
  √ 2 - Teste listar contatos                 <br>                                  
  √ 3 - Buscar contato por nome. Ex: Buscar contato Camila Pitanga (2007ms)    <br> 
  √ 4 - Buscar contato por id. Ex: Buscar pelo id do contato Camila Pitanga  <br>                                                                                 
Teste apigestaocontatos DELETE /contatos                                      <br>  
  √ 5 - Deletar contato por id. Ex: Deletar pelo id do contato Camila Pitanga  <br> 
<hr>
