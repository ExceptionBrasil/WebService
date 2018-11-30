# WebService.js
Pequeno WebService em JavaScript e Ajax, com um callback.

## Objetivo 
Esse pequeno WebService tem por objetivo facilitar a execução assincrona, de requests ao servidor.
através de uma requisição POST,GET,PUT.

## Dependências
* Jquery
* JavaScript
* HTML

É meio óbvio, mas é bom mencionar, sabe como é...

### Exemplo de utilização na forma que está.
Carregue em seu HTML o script do WebService, de preferência ao final do <body>. 
O Jquery deve ser carregado primeiro, para que tudo funcione corretamente.

Exemplo:

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title></title>  
        <script src="~/Scripts/jquery-3.3.1.min.js"></script>   
    </head>

    <body>
        <main></main>
        <script src="~/Scripts/WebService.js"></script>   
    </body>

</html>

``` 

Faça a chamada do WebService em seu script personalizado, conforme o exemplo abaixo:

```javascript

//Crie um objeto qualquer, por exemplo esse abaixo:
var objetoQualquer = {
        id:1,
        descricao:"Uma descrição qualquer",
        valor: 1000
    };

//Indique a Url de Destino 
var urlDestino ="127.0.0.1:8080/RequestQualQuerCoisa/";


//Informe a função de CallBack
var callBack = function(response){

    console.log(response.menssage);

    if(response.success){
        console.log("Processamento no Servidor OK");
    }else{
        console.log("Processamento no Servidor Não OK");
    }
}   
    //Método de envio
    var methodType="post"
    
    //Tipo de objeto enviado
    var dataType="json"

    //Chama o webservice passando o callback 
    //Faça a chamada do WebService 
    WebService.Init(obj, urlDestino, callBack,methodType,dataType);
```

Variáveis que são tratadas de forma automáticas, alem do callback.
* success - Passou a ser opcional, quando existir imprime no console.log um aviso de Success! e executa o callback
* menssage - Opcional. Quando informado, replica a mensagem no console.log, alêm de ser utilizável no callback.

