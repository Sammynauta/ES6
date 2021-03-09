/*
- Use Atribuição de Destruição para Extrair Valores de Objetos PASSO 1
- Use Atribuição de Destruição para Atribuir Variáveis ​​de Objetos PASSO 2
- Use Atribuição de Destruição para Atribuir Variáveis ​​de Objetos Aninhados PASSO 3
- Use Atribuição de Destruição para Atribuir Variáveis ​​de Matrizes PASSO 4
- Use a atribuição de desestruturação com o parâmetro Rest para reatribuir os elementos do array PASSO 5 */

/*  PASSO 1
A designação de desestruturação é uma sintaxe especial introduzida no ES6, para designar ordenadamente
valores retirados diretamente de um objeto.

Considere o seguinte código ES5:

const user = { name: 'John Doe', age: 34 };

const name = user.name;
const age = user.age;

Aqui está uma instrução de atribuição equivalente usando a sintaxe de desestruturação ES6:

const { name, age } = user;

Você pode extrair quantos valores quiser do objeto. */

const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };
  
  const {today, tomorrow} = HIGH_TEMPERATURES;


/* PASSO 2
A desestruturação permite que você atribua um novo nome de variável ao extrair valores. Você pode fazer isso
colocando o novo nome após dois pontos ao atribuir o valor.

Substitua as duas atribuições por uma atribuição de desestruturação equivalente. Ele ainda deve atribuir as
variáveis highToday e highTomorrow os valores de today e tomorrow para o HIGH_TEMPERATURES objeto. */

const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };
 
  const {today: highToday, tomorrow: highTomorrow}= HIGH_TEMPERATURES;

/* PASSO 3
Você pode usar os mesmos princípios das duas lições anteriores para desestruturar valores de objetos aninhados.

Substitua as duas atribuições por uma atribuição de desestruturação equivalente.
Ele ainda deve atribuir as variáveis lowToday e highToday os valores de today.low e today.high para o
LOCAL_FORECAST objeto. */

const LOCAL_FORECAST = {
    yesterday: { low: 61, high: 75 },
    today: { low: 64, high: 77 },
    tomorrow: { low: 68, high: 80 }
  };
    
  const {today: {low: lowToday, high: highToday}} = LOCAL_FORECAST;

/* PASSO 4
O ES6 torna a desestruturação de arrays tão fácil quanto a desestruturação de objetos.

Uma diferença chave entre o operador spread e a desestruturação do array é que o operador spread desempacota
todo o conteúdo de um array em uma lista separada por vírgulas. Conseqüentemente, você não pode selecionar ou
escolher quais elementos deseja atribuir às variáveis.

A destruição de uma matriz nos permite fazer exatamente isso:

const [a, b] = [1, 2, 3, 4, 5, 6];
console.log(a, b);

Use a atribuição de desestruturação para trocar os valores de ae de b forma que a receba o valor armazenado em b 
e b receba o valor armazenado em a. */

let a = 8, b = 6;

[a, b] = [b, a];

/* PASSO 5
Em algumas situações que envolvem a desestruturação de array, podemos querer coletar o resto dos elementos em um 
array separado.

O resultado é semelhante a Array.prototype.slice(), conforme mostrado abaixo:

const [a, b, ...arr] = [1, 2, 3, 4, 5, 7];
console.log(a, b);
console.log(arr);

O console exibiria os valores 1, 2e [3, 4, 5, 7].

Variáveis ae bobtêm o primeiro e o segundo valores da matriz. Depois disso, devido à presença do parâmetro
rest, arrobtém o resto dos valores na forma de um array. O elemento rest só funciona corretamente como a última
variável da lista. Como em, você não pode usar o parâmetro rest para capturar um subarray que deixa de fora o
último elemento do array original.

Use a atribuição de desestruturação com o parâmetro rest para realizar um efeito de Array.prototype.slice()
forma que arrseja uma submatriz da matriz original source com os dois primeiros elementos omitidos. */

const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
 
  const [a, b, ...arr]= list;
  return arr;
}
const arr = removeFirstTwo(source);