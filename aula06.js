/*
- Criar um substituto de exportação com padrão de exportação PASSO 1
- Importar uma exportação padrão PASSO 2
- Crie uma promessa de JavaScript PASSO 3
- Cumpra uma promessa com determinação e rejeição PASSO 4
- Lidar com uma promessa cumprida com então PASSO 5
- Lidar com uma promessa rejeitada com captura PASSO 6 */

/* PASSO 1
Na export lição, você aprendeu sobre a sintaxe conhecida como exportação nomeada . Isso permitiu que você disponibilizasse
várias funções e variáveis ​​para uso em outros arquivos.
Há outra export sintaxe que você precisa conhecer, conhecida como padrão de exportação . Normalmente, você usará essa sintaxe se
apenas um valor estiver sendo exportado de um arquivo. Ele também é usado para criar um valor de fallback para um arquivo ou módulo.

Como export default é usado para declarar um valor de fallback para um módulo ou arquivo, você só pode ter um valor como
exportação padrão em cada módulo ou arquivo. Além disso, você não pode usar export default com var, let ou const. */

export default function subtract(x, y) {
    return x - y;
  }

/* PASSO 2
No último desafio, você aprendeu sobre export defaulte seus usos. Para importar uma exportação padrão, você precisa usar uma import
sintaxe diferente . No exemplo a seguir, addé a exportação padrão do math_functions.js arquivo.

import add from "./math_functions.js";
A sintaxe difere em um lugar-chave. O valor importado,, addnão está entre chaves ( {}). add aqui está simplesmente um nome de
variável para qualquer que seja a exportação padrão do math_functions.js arquivo. Você pode usar qualquer nome aqui ao
importar um padrão. */

import subtract from "./math_functions.js";

subtract(7,4);

/* PASSO 3
Uma promessa em JavaScript é exatamente o que parece - você a usa para fazer uma promessa de fazer algo, geralmente de forma
assíncrona. Quando a tarefa é concluída, você cumpre sua promessa ou deixa de fazê-lo. Promise é uma função construtora, portanto,
você precisa usar a new palavra-chave para criar uma. Ele recebe uma função, como argumento, com dois parâmetros - resolve e reject.
Esses são métodos usados ​​para determinar o resultado da promessa.  */

const makeServerRequest = new Promise((resolve, reject) => {

});

/* PASSO 4
A promessa tem três estados: pending, fulfilled, e rejected. A promessa que você criou no último desafio está para sempre presa no
pending estado porque você não adicionou uma maneira de cumprir a promessa. Os parâmetros resolvee reject dados ao argumento da
promessa são usados ​​para fazer isso. resolve é usado quando você deseja que sua promessa seja bem-sucedida e reject quando você deseja
que ela falhe. Esses são métodos que aceitam um argumento, conforme visto a seguir. */

const makeServerRequest = new Promise((resolve, reject) => {
    // responseFromServer represents a response from a server
    let responseFromServer;
      
    if(responseFromServer) {
      resolve ("We got the data");
    } else {  
      reject ("Data not received");
    }
  });

/* PASSO 5
As promessas são mais úteis quando você tem um processo que leva uma quantidade desconhecida de tempo em seu código
(ou seja, algo assíncrono), geralmente uma solicitação do servidor. Quando você faz uma solicitação ao servidor, leva algum tempo
e, depois que ela é concluída, você geralmente deseja fazer algo com a resposta do servidor. Isso pode ser alcançado usando o
then método. O then método é executado imediatamente após o cumprimento de sua promessa resolve. */

const makeServerRequest = new Promise((resolve, reject) => {
    // responseFromServer is set to true to represent a successful response from a server
    let responseFromServer = true;
      
    if(responseFromServer) {
      resolve("We got the data");
    } else {  
      reject("Data not received");
    }
  });
  
  makeServerRequest.then(result => {
    console.log(result);
  });

/* PASSO 6
catch é o método usado quando sua promessa foi rejeitada. Ele é executado imediatamente após o
reject método de uma promessa ser chamado.

Adicione o catc hmétodo à sua promessa. Use errorcomo parâmetro de sua função de retorno de chamada e registre error no console. */

const makeServerRequest = new Promise((resolve, reject) => {
    // responseFromServer is set to false to represent an unsuccessful response from a server
    let responseFromServer = false;
      
    if(responseFromServer) {
      resolve("We got the data");
    } else {  
      reject("Data not received");
    }
  });
  makeServerRequest.then(result => {
    console.log(result);
  });
  
  makeServerRequest.catch(error => {
    console.log(error);
  });