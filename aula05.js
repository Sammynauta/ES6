/*
- Use getters e setters para controlar o acesso a um objeto PASSO 1
- Crie um script de módulo PASSO 2
- Use a exportação para compartilhar um bloco de código PASSO 3
- Reutilizar código JavaScript usando importação PASSO 4
- Use * para importar tudo de um arquivo PASSO 5 */

/* PASSO1
Você pode obter valores de um objeto e definir o valor de uma propriedade dentro de um objeto.

Eles são classicamente chamados de getters e setters .

As funções getter destinam-se a simplesmente retornar (obter) o valor da variável privada de um
objeto para o usuário, sem que o usuário acesse diretamente a variável privada.

As funções setter destinam-se a modificar (definir) o valor da variável privada de um objeto com
base no valor passado para a função setter. Essa alteração pode envolver cálculos ou até mesmo sobrescrever
completamente o valor anterior. */

class Thermostat {
    constructor(fahrenheit) {
      this.fahrenheit = fahrenheit;
    }
    
    get temperature() {
      return (5 / 9) * (this.fahrenheit - 32);
    }
    
    set temperature(celsius) {
      this.fahrenheit = (celsius * 9.0) / 5 + 32;
    }
  }
  
  const thermos = new Thermostat(76); // Setting in Fahrenheit scale
  let temp = thermos.temperature; // 24.44 in Celsius
  thermos.temperature = 26;
  temp = thermos.temperature; // 26 in Celsius

/* PASSO 2
O JavaScript começou com uma pequena função a desempenhar em uma web, de outra forma, principalmente HTML.
Hoje, ele é enorme e alguns sites são construídos quase inteiramente com JavaScript. Para tornar o JavaScript
mais modular, limpo e sustentável; ES6 introduziu uma maneira de compartilhar códigos facilmente entre arquivos
JavaScript. Isso envolve a exportação de partes de um arquivo para uso em um ou mais outros arquivos e a importação
das partes de que você precisa, onde precisar. Para tirar proveito dessa funcionalidade, você precisa criar um
script em seu documento HTML com um typede module.  */

<html>
  <body>
    <script type="module" src="index.js"></script> <!--exemplo-->
  </body>
</html>

/* PASSO 3
Imagine um arquivo chamado math_functions.js que contém várias funções relacionadas a operações matemáticas.
Um deles é armazenado em uma variável add,, que pega em dois números e retorna sua soma. Você deseja usar esta
função em vários arquivos JavaScript diferentes. Para compartilhá-lo com esses outros arquivos, você precisa
primeiro export. */

const uppercaseString = (string) => {
    return string.toUpperCase();
  }
  
  const lowercaseString = (string) => {
    return string.toLowerCase()
  }
  
  export { uppercaseString, lowercaseString };

/* PASSO 4
importpermite que você escolha quais partes de um arquivo ou módulo carregar. Na lição anterior,
os exemplos foram exportados adddo math_functions.js arquivo.

Adicione a importinstrução apropriada que permitirá que o arquivo atual use as funções
uppercaseStringe lowercaseString exportadas na lição anterior. Essas funções estão em um arquivo chamado
string_functions.js, que está no mesmo diretório do arquivo atual. */

import { uppercaseString, lowercaseString } from './string_functions.js';

uppercaseString("hello");
lowercaseString("WORLD!");

/* PASSO 5
Suponha que você tenha um arquivo e deseja importar todo o seu conteúdo para o arquivo atual. Isso pode ser feito com a
import * assintaxe. Aqui está um exemplo em que o conteúdo de um arquivo denominado math_functions.jsé importado para um
arquivo no mesmo diretório:

import * as myMathModule from "./math_functions.js";  */

import * as stringFunctions from "./string_functions.js";

stringFunctions.uppercaseString("hello");
stringFunctions.lowercaseString("WORLD!");
