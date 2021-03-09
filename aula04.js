/*
- Use Atribuição de Destruição para Passar um Objeto como Parâmetros de Função PASSO 1
- Crie strings usando literais de modelo PASSO 2
- Escrever declarações literais concisas de objetos usando atalhos de propriedades de objetos PASSO 3
- Escreva funções declarativas concisas com ES6 PASSO 4
- Use a sintaxe de classe para definir uma função de construtor PASSO 5 */

/* PASSO 1
Em alguns casos, você pode desestruturar o objeto em um argumento de função.

Considere o código abaixo:

const profileUpdate = (profileData) => {
  const { name, age, nationality, location } = profileData;

} */

const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
  };
  
  const half =({max, min}) => (max + min) / 2.0; 

/* PASSO 2
Um novo recurso do ES6 é o literal de modelo . Este é um tipo especial de string que facilita a criação de
strings complexas.

Literais de modelo permitem criar strings de várias linhas e usar recursos de interpolação de strings para
criar strings.

Muitas coisas aconteceram lá. Em primeiro lugar, o exemplo usa crases ( `), não aspas ( 'ou "), para envolver
a string. Em segundo lugar, observe que a string é multilinha, tanto no código quanto na saída. Isso
economiza a inserção \n dentro de strings. A ${variable} sintaxe usada acima é um espaço reservado.
Basicamente, você não precisará mais usar concatenação com o + operador. Para adicionar variáveis ​​a strings,
você apenas elimina a variável em uma string de modelo e envolve-a com ${e }. Da mesma forma, você pode incluir
outras expressões em seu literal de string, por exemplo ${a + b}. Esta nova maneira de criar strings oferece mais
flexibilidade para criar strings robustas.

Use a sintaxe literal do modelo com crases para criar uma matriz de listrings de elemento de lista ( ).
O texto de cada elemento da lista deve ser um dos elementos do array da failurepropriedade no result objeto e
ter um classatributo com o valor text-warning. A makeListfunção deve retornar a matriz de strings do item da lista.*/

const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
  };
  function makeList(arr) {
    'use strict'
    // Only change code below this line
    const failureItems = arr.map(item => `<li class="text-warning">${item}</li>`);
    // Only change code above this line
  
    return failureItems;
  }
  
  const failuresList = makeList(result.failure);

/* PASSO 3
ES6 adiciona um bom suporte para definir facilmente literais de objeto.

getMousePositioné uma função simples que retorna um objeto contendo duas propriedades. ES6 fornece o açúcar
sintático para eliminar a redundância de ter que escrever x: x. Você pode simplesmente escrever xuma vez e
ele será convertido para x: x(ou algo equivalente) nos bastidores. Aqui está a mesma função acima reescrita
para usar esta nova sintaxe:

const getMousePosition = (x, y) => ({ x, y });

Use objeto propriedade estenográfica com literais de objeto para criar e retornar um objeto com name,
age e gender propriedades. */

const createPerson = (name, age, gender) => {
    return ({name, age, gender})
  };

/* PASSO 4
Ao definir funções dentro de objetos no ES5, temos que usar a palavra-chave da functionseguinte forma:

const person = {
  name: "Taylor",
  sayHello: function() {
    return `Hello! My name is ${this.name}.`;
  }
};
Com o ES6, você pode remover a functionpalavra - chave e dois pontos ao definir funções em objetos.
Aqui está um exemplo dessa sintaxe:

const person = {
  name: "Taylor",
  sayHello() {
    return `Hello! My name is ${this.name}.`;
  }
};  */

const bicycle = {
    gear: 2,
    setGear (newGear) {
      this.gear = newGear;
    }
  };
  // Only change code above this line
  bicycle.setGear(3);
  console.log(bicycle.gear);

/* PASSO 5
ES6 fornece uma nova sintaxe para criar objetos, usando a palavra-chave class .

Deve-se notar que a classs intaxe é apenas sintaxe, e não uma implementação completa baseada em classe de um
paradigma orientado a objetos, ao contrário de linguagens como Java, Python, Ruby, etc.

Deve-se notar que a class palavra - chave declara uma nova função, à qual um construtor é adicionado. Este construtor
é invocado quando newé chamado para criar um novo objeto.

Nota: UpperCamelCase deve ser usado por convenção para nomes de classe ES6, como SpaceShuttleusado acima.

O constructormétodo é um método especial para criar e inicializar um objeto criado com uma classe. Você
aprenderá mais sobre isso na seção Programação Orientada a Objetos da Certificação de Algoritmos e Estruturas
de Dados JavaScript.

Use a class palavra - chave e escreva um constructor para criar a Vegetable classe.

A Vegetableclasse permite que você crie um objeto vegetal com uma propriedade name
que é passada para o constructor. */

// Only change code below this line
class Vegetable {
    constructor (name) {
      this.name = name;
    }
  }
  // Only change code above this line
  
  const carrot = new Vegetable('carrot');
  console.log(carrot.name); // Should display 'carrot'