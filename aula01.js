/*
- Explore as diferenças entre as palavras-chave var e let PASSO 1
- Compare escopos da var e deixe palavras-chave PASSO 2
- Declare uma variável somente leitura com a palavra-chave const PASSO 3
- Transformar um array declarado com const PASSO 4
- Impedir mutação de objeto  PASSO 5 */

/* PASSO 1
Um dos maiores problemas com a declaração de variáveis ​​com a varpalavra-chave é que você pode sobrescrever
as declarações de variáveis ​​sem erros.

Em um aplicativo pequeno, você pode não ter esse tipo de problema, mas quando seu código ficar maior,
você pode sobrescrever acidentalmente uma variável que não pretendia sobrescrever. Como esse comportamento
não gera um erro, a pesquisa e a correção de bugs se tornam mais difíceis.
Uma nova palavra-chave chamada letfoi introduzida no ES6 para resolver este problema potencial com a
var palavra - chave. Se você substituísse varpor letnas declarações de variáveis ​​do código acima, o
resultado seria um erro.

Atualize o código para que ele use apenas a let palavra - chave.*/

let catName;
let quote;
function catTalk() {
  "use strict";

  catName = "Oliver";
  quote = catName + " says Meow!";

}
catTalk();


/* PASSO 2

Quando você declara uma variável com a var palavra-chave, ela é declarada globalmente ou localmente se
declarada dentro de uma função.

A let palavra-chave se comporta de maneira semelhante, mas com alguns recursos extras.
Quando você declara uma variável com a letpalavra - chave dentro de um bloco, instrução ou expressão,
seu escopo é limitado a esse bloco, instrução ou expressão.*/

//Por exemplo:

var numArray = [];
for (var i = 0; i < 3; i++) {
  numArray.push(i);
}
console.log(numArray);
// returns [0, 1, 2]
console.log(i);
// returns 3

//Com a var palavra - chave, ié declarado globalmente. Portanto, quando i++ é executado, ele 
//atualiza a variável global. Este código é semelhante ao seguinte:

var numArray = [];
var i;
for (i = 0; i < 3; i++) {
  numArray.push(i);
}
console.log(numArray);
// returns [0, 1, 2]
console.log(i);
// returns 3

/*Esse comportamento causará problemas se você criar uma função e armazená-la para uso posterior dentro de um 
loop for que usa a i variável. Isso ocorre porque a função armazenada sempre fará referência ao valor da i
variável global atualizada*/

var printNumTwo;
for (var i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function() {
      return i;
    };
  }
}
console.log(printNumTwo());
// returns 3

/*Como você pode ver, printNumTwo() imprime 3 e não 2. Isso ocorre porque o valor atribuído a i
foi atualizado e printNumTwo()retorna o global ie não o valor que i tinha quando a função foi criada no 
loop for. A let palavra-chave não segue este comportamento:*/

let printNumTwo;

for (let i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function() {
      return i;
    };
  }
}
console.log(printNumTwo());
// returns 2
console.log(i);
// returns "i is not defined"

/*
i não está definido porque não foi declarado no escopo global. Ele só é declarado na instrução for 
loop. printNumTwo() retornou o valor correto porque três i variáveis diferentes com valores exclusivos 
(0, 1 e 2) foram criadas pela let palavra - chave dentro da instrução de loop.*/


/*
Este exercício foi elaborado para ilustrar a diferença entre como vare as let palavras - chave atribuem 
escopo à variável declarada. Ao programar uma função semelhante à usada neste exercício,
geralmente é melhor usar nomes de variáveis ​​diferentes para evitar confusão.*/

function checkScope() {
    "use strict";
    let i = 'function scope';
    if (true) {
      let i = 'block scope';
      console.log('Block scope i is: ', i);
    }
    console.log('Function scope i is: ', i);
    return i;
  }

/* PASSO 3

A palavra let- chave não é a única maneira nova de declarar variáveis. No ES6, você também pode declarar
variáveis ​​usando a const palavra - chave.

consttem todos os recursos incríveis que letpossui, com o bônus adicional de que as variáveis ​​declaradas usando
const são somente leitura. Eles são um valor constante, o que significa que uma vez atribuída a uma variável 
const, ela não pode ser reatribuída.

const FAV_PET = "Cats";
FAV_PET = "Dogs"; // returns error 

Como você pode ver, tentar reatribuir uma variável declarada com constgerará um erro. Você deve sempre nomear
variáveis ​​que não deseja reatribuir usando a const palavra - chave. Isso ajuda quando você acidentalmente tenta
reatribuir uma variável que deve permanecer constante. Uma prática comum ao nomear constantes é usar todas as
letras maiúsculas, com palavras separadas por um sublinhado.*/

function printManyTimes(str) {
  
    const SENTENCE = str + " is cool!";
    for (let i = 0; i < str.length; i+=2) {
      console.log(SENTENCE);
    }
  
  }
  printManyTimes("freeCodeCamp");


/* PASSO 4

A constdeclaração tem muitos casos de uso em JavaScript moderno.

Alguns desenvolvedores preferem atribuir todas as suas variáveis ​​usando constpor padrão, a menos que saibam que
precisarão reatribuir o valor. Só nesse caso, eles usam let.

No entanto, é importante entender que os objetos (incluindo arrays e funções) atribuídos a uma variável usando
constainda são mutáveis. Usar a constdeclaração apenas evita a reatribuição do identificador da variável.*/

const s = [5, 7, 2];
function editInPlace() {
  
  s[0] = 2;
  s[1] = 5;
  s[2] = 7;

}

editInPlace();


/* PASSO 5
Como visto no desafio anterior, a constdeclaração por si só não protege realmente seus dados de mutação.
Para garantir que seus dados não mudem, o JavaScript fornece uma função Object.freeze para evitar a mutação de dados.

Depois que o objeto é congelado, você não pode mais adicionar, atualizar ou excluir propriedades dele.
Qualquer tentativa de mudar o objeto será rejeitada sem erro.
*/


function freezeObj() {
    const MATH_CONSTANTS = {
        PI: 3.14
    };
    
    Object.freeze(MATH_CONSTANTS);
    
    try {
        MATH_CONSTANTS.PI = 99;
    } catch(ex) {
        console.log(ex);
    }
    return MATH_CONSTANTS.PI;
    }
    const PI = freezeObj();

// O VALOR ATRIBUIDO A PI NÃO VAI MUDAR  POIS OBJETO FOI CONGELADO.