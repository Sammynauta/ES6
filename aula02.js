/*
 - Use as funções de seta para escrever funções anônimas concisas PASSO 1
 - Escreva funções de seta com parâmetros PASSO 2
 - Definir parâmetros padrão para suas funções PASSO 3
 - Use o parâmetro de descanso com parâmetros de função PASSO 4
 - Use o operador de propagação para avaliar matrizes no local 5
 */

 /* PASSO 1

 Em JavaScript, geralmente não precisamos nomear nossas funções, especialmente ao passar uma função como um
 argumento para outra função. Em vez disso, criamos funções embutidas. Não precisamos nomear essas funções porque
 não as reutilizamos em nenhum outro lugar.
 
 ES6 nos fornece o açúcar sintático para não ter que escrever funções anônimas dessa maneira.
 Em vez disso, você pode usar a sintaxe da função de seta:

Quando não há corpo de função e apenas um valor de retorno, a sintaxe da função de seta permite que você omita
a palavra-chave return, bem como os colchetes ao redor do código. Isso ajuda a simplificar funções
menores em instruções de uma linha:
 */

 const magic = () => {
    return new Date();
};


/* PASSO 2

Assim como uma função regular, você pode passar argumentos para uma função de seta.
Se uma função de seta tiver um único parâmetro, os parênteses que envolvem o parâmetro podem ser omitidos.
É possível passar mais de um argumento para uma função de seta.

Reescreva a myConcatfunção que anexa o conteúdo de arr2a arr1para que use a sintaxe da função de seta. */

const myConcat = (arr1, arr2) => {
    return arr1.concat(arr2);
  };
  
  console.log(myConcat([1, 2], [3, 4, 5]));

  // returns [1, 2, 3, 4, 5]


/* PASSO 3

Para nos ajudar a criar funções mais flexíveis, o ES6 apresenta parâmetros padrão para funções.

Confira este código: */

const greeting = (name = "Anonymous") => "Hello " + name;

console.log(greeting("John")); // Hello John
console.log(greeting()); // Hello Anonymous

/*
O parâmetro padrão entra em ação quando o argumento não é especificado (é indefinido). Como você pode ver no
exemplo acima, o parâmetro namereceberá seu valor padrão "Anonymous" quando você não fornecer um valor para o
parâmetro. Você pode adicionar valores padrão para quantos parâmetros desejar.

Modifique a função incrementadicionando parâmetros padrão para que ela adicione 1
number se value não for especificado.
*/

const increment = (number, value = 1) => number + value;


/*  PASSO 4

Para nos ajudar a criar funções mais flexíveis, o ES6 introduz o parâmetro rest para os parâmetros de função.
Com o parâmetro rest, você pode criar funções que usam um número variável de argumentos. Esses argumentos são
armazenados em uma matriz que pode ser acessada posteriormente de dentro da função.

O parâmetro rest elimina a necessidade de verificar a argsmatriz e nos permite aplicar
map(), filter()e reduce()na matriz de parâmetros.

Modifique a função sumusando o parâmetro rest de forma que a função sumseja capaz de receber qualquer número
de argumentos e retornar sua soma.
*/

const sum = (...args) => {
    return args.reduce((x, y) => x + y, 0);
  }


/* PASSO 5

ES6 introduz o operador spread , que nos permite expandir arrays e outras expressões em lugares onde vários
parâmetros ou elementos são esperados.

...arr retorna uma matriz descompactada. Em outras palavras, ele espalha o array. No entanto, o operador de
propagação só funciona no local, como em um argumento para uma função ou em um literal de array. O código a
seguir não funcionará:

Copie todo o conteúdo de arr1 em outro array arr2 usando o operador spread. */

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1];  // mude esta linha.

console.log(arr2);