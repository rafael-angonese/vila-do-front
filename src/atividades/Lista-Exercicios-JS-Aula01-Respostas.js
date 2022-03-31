// Exercícios de Recapitulação de JS - Respostas

// ------------------------ Arrow Function ---------------------------------

//Transforme as funções declarativas abaixo em Arrow Functions
// const upperName = function (name) {
//   return name.toUpperCase();
// };
// function myFunction(p1, p2) {
//   return p1 * p2;
// }
// function toCelsius(fahrenheit) {
//   return (5 / 9) * (fahrenheit - 32);
// }

//Arrow Function
const upperName = (name) => {
  return name.toUpperCase();
};

const myFunction = (p1, p2) => {
  return p1 * p2;
};

const toCelsius = (fahrenheit) => {
  return (5 / 9) * (fahrenheit - 32);
};

// -------------------------Destructuring - Desestruturação--------------------------------

//Tendo a função abaixo, usando destructuring, reescreva-a de modo que fique em apenas 2 linhas de código
// function handleMouseMove(event) {
//   const clientX = event.clientX;
//   const clientY = event.clientY;
//   console.log(clientX, clientY);
// }

//tem que ficar em apenas 2 linhas de código
function handleMouseMove({ clientX, clientY }) {
  console.log(clientX, clientY);
}

//A partir do objeto abaixo, instancie apenas uma variável que receba ​first utilizando destructuring
const obj = { first: "Jane", last: "Doe" };

const { first } = obj;

//A partir do objeto abaixo, instancie uma variavel que receba ​name​ e outra para colors
const company = {
  name: "ACME Corp",
  address: "Nowhere st",
  products: {
    shirts: {
      colors: ["red", "green", "blue"],
    },
    socks: {
      colors: ["cyan", "magenta", "yellow"],
    },
  },
};

//variavel que receba name e outra para colors
const {
  name,
  products: {
    shirts: { colors },
  },
} = company;

// --------------------------Rest & Spread-------------------------------

//Utilizando um operador clone o objeto c​lothes
const clothes = {
  pants: { colors: ["black", "blue"] },
  shirts: { colors: ["white", "red"] },
  socks: { colors: ["beige", "gray"] },
};

//clone o objeto clothes
const otherClothes = { ...clothes };

//Novamente utilizando um operador, clone o objeto c​ lothes​ acima e adicione a este clone um objeto ​shoes​ com propriedade​ colors: ['yellow', 'purple'] ​de modo que fique igual aos objetos p​ ants, shirts ​e​ socks

//clone o objeto clothes acima e add um objeto shoes com propriedade colors: ['yellow', 'purple']
const moreClothes = {
  ...clothes,
  shoes: { colors: ["yellow", "purple"] },
};

// -------------------------Arrays e seus métodos--------------------------------

//Arrays e seus métodos
//A partir da variável abaixo e utilizando um método de array, retorne a raiz quadrada de todos os valores do array original em um novo array
var numbers = [4, 9, 16, 25];
//A partir da variável abaixo e utilizando um método de array, multiplique todos os valores do array por 10. Utilize arrow function.
var numbers = [65, 44, 12, 4];

//Retorne a raiz quadrada de todos os valores do array original
var x = numbers.map(Math.sqrt);
//multiplique todos os valores do array por 10
var newarray = numbers.map((num) => num * 10);

//A partir da variável abaixo retorne um array com valores de ​age​ (idade) maiores ou iguais a 18 com arrow function e filter
var ages = [32, 33, 16, 40];
//retorne um array com valores de age (idade) maiores ou iguais a 18 com arrow function
ages.filter((age) => age >= 18);

//A partir do objeto abaixo, retorne somente os nomes dos objetos do tipo cachorro (​type: dog)​ com filter
const data = [
  {
    name: "Butters",
    age: 3,
    type: "dog",
  },
  {
    name: "Lizzy",
    age: 6,
    type: "dog",
  },

  {
    name: "Red",
    age: 1,
    type: "cat",
  },
  {
    name: "Joey",
    age: 3,
    type: "dog",
  },
];

//retorne somente os cachorros com filter
let dogs = data.filter((animal) => {
  return animal.type === "dog";
});

//Por fim, ainda utilizando o array acima, retorne a soma da idade de todos os cachorros (​type: dog)​

//ainda utilizando o array acima, retorne a soma da idade de todos os cachorros
var calcAge = dogs.reduce((sum, animal) => {
  return sum + animal.age;
}, 0);

// ------------------------Parte 2 - Hora do Jogo!---------------------------------

//Passe a expressão abaixo para Arrow Function e então use destructuring para pegar ​colors
// var getShirtsColorsAmount = function (company) {
//   colors = company.products.shirts.colors;
//   return colors.length;
// };

//Passe para Arrow Function e desestruture para pegar colors
const getShirtsColorsAmount = ({
  products: {
    shirts: {
      colors: { length },
    },
  },
}) => length;

//A partir do objeto abaixo, desestruture e utilize ​spread operator​ para instaciar uma variável que tenha apenas os dados de roupas que não são calças, ou seja, somente ​shirts e​ ​ socks
const clothes = {
  pants: { colors: ["black", "blue"] },
  shirts: { colors: ["white", "red"] },
  socks: { colors: ["beige", "gray"] },
};
//desestruture com spread operator apenas os dados de roupas que não são calças
const { pants, ...rest } = clothes;

//Utilizando os dois arrays abaixo, desestruture cada array com spread para clonar todos itens menos o primeiro
const arr = [1, 2, 3];
const arr2 = [4, 5, 6];

//desestruture o array com spread para clonar todos itens menos o primeiro
const [a, ...rest] = arr;

//A partir do objeto abaixo, retorne um array onde cada item é o nome completo de cada pessoa no array. Utilize arrow function.
var persons = [
  { firstname: "Malcom", lastname: "Reynolds" },
  { firstname: "Kaylee", lastname: "Frye" },
  { firstname: "Jayne", lastname: "Cobb" },
];

//retorne o nome completo de cada pessoa no array utilizando arrow function
const nomeCompleto = persons.map(
  (item) => item.firstname + " " + item.lastname
);
