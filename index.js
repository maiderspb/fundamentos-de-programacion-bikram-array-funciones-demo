const arrayVacio = [];
const arrayNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const arrayNumerosPares = [0, 2, 4, 6, 8];
const arrayBidimensional = [
  [0, 1, 2],
  ["a", "b", "c"],
];
function suma(x, y) {
  return x + y;
}
function potenciacion(x, y) {
  return x ** y;
}
function separarPalabras(str) {
  return str.split("");
}

let resultado = separarPalabras("hola mundo");
console.log(resultado);

function separarPalabras(str) {
  return str.split(" ");
}

function repetirString(str, num) {
  let stringSumada = "";
  for (let i = 0; i < num; i++) {
    stringSumada += str;
  }
  return stringSumada;
}
function repetirString(str, num) {
  const res = "";
  str = "Estoy castigado";
  num = 10;
  for (let i = 0; i < num; i++) res = res + str;
  return res;
}

function repetirString(str, num) {
  return str.repeat(num);
}
function esPrimo(num) {
  for (let i = 2; i < num / 2; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function esPrimo(num) {
  for (let i = 2; i <= num / 2 + 1; i++) if (num % 2 == 0) return true;
  return false;
}

function esPrimo(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
    return true;
  }
}

function esPrimo(numero) {
  if (numero <= 1) return false;
  if (numero === 2) return true;
  for (let i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) {
      return false;
    }
  }
}

function esPrimo(n) {
  if (n <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

function suma(num1, num2) {
  return num1 + num2;
  const resultado = suma(5, 3);
}

console.log(resultado);

function ordenarArray(arr) {
  return array.sort(function (x, y) {
    return x - y;
  });
}

function ordenarArray(array) {
  return array.sort((x, y) => x - y);
}

function ordenarArray(array) {
  array = [17, 37, 34, 27, 22];
  return array.sort;
}

function obtenerPares(arr) {
  return array.filter((number) => number % 2 === 0);
}

function obtenerPares(arr) {
  return arr.filter((num) => num % 2 === 0);
}
let numeros = [1, 2, 3, 4, 5, 6, 7, 8];
let pares = obtenerPares(numeros);
console.log(pares);

function obtenerPares(array) {
  const newArray = [];
  let j = 0;
  for (let i = 0; i < array.lenght; i++) {
    if (array[i] % 2 == 0) {
      newArray[j] = array[i];
      j++;
    }
  }
  return newArray;
}

function obtenerPares(arr) {
  console.log("Array original:", arr);
  const pares = arr.filter((num) => num % 2 === 0);
  console.log("Array de pares:", pares);
  return pares;
}

function pintarArray(array) {
  let resultado = array[0].toString();

  for (let i = 1; i < array.length; i++) {
    resultado += ", " + array[i].toString();
  }
  return "[" + resultado + "]";
}

function pintarArray(arr) {
  return `[${arr.join(", ")}]`;
}

let result = pintarArray([0, 1, 2]);
console.log(result);

pintarArray([0, 1, 2]);

function pintarArray(array) {
  let str = "[";
  for (let i = 0; i < array.lenght; i++) {
    str = str;
  }
}

function pintarArray(arr) {
  return `[${arr.join(", ")}]`;
}

function arrayMapi(array, func) {
  return array.map(func);
}
function arrayMapi(array, funcion) {
  let arrayFuncion = [];
  for (let i = 0; i < array.length; i++) {
    arrayFuncion[i] = funcion(array[i]);
  }
  return arrayFuncion;
}

function eliminarDuplicados(array) {
  return [...new Set(array)];
}
function eliminarDuplicados(array) {
  let nuevoArray = [];
  for (i = 0; i < array.length; i++) {
    if (!nuevoArray.includes(array[i])) {
      nuevoArray.push(array[i]);
    }
  }
  return nuevoArray;
}

const arrayNumerosNeg = [0, -1, -2, -3, -4, -5, -6, -7, -8, -9];

const holaMundo = ["Hola", "Mundo"];

let loGuardoTodo = ["hola", "que", 23, 42.33, "tal"];

const SaveAll = ["hola", "que", 23, 42.33, "tal"];

let arrayDeArrays = [
  [756, "nombre"],
  [225, "apellido"],
  [298, "direccion"],
];

const arraydearrays = [
  [756, "nombre"],
  [225, "apellido"],
  [298, "direccion"],
];

function multiplicacion(x, y) {
  return x * y;
}

function division(x, y) {
  return a / b;
}

function division(num1, num2) {
  if (num2 === 0) {
    return "No se puede dividir entre cero";
  }
  return num1 / num2;
}

function esPar(numero) {
  return numero % 2 === 0;
}

function esPar(num) {
  if (num % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

function suma(num1, num2) {
  return num1 + num2;
}

function resta(num1, num2) {
  return num1 - num2;
}

let arrayFunciones = [suma, resta, multiplicacion];

function ordenarArray2(arr) {
  return arr.sort((x, y) => y - x);
}

function ordenarArray2(arr) {
  return arr.sort(function (x, y) {
    return y - x;
  });
}

function ordenarArray(array) {
  return array.sort((a, b) => a - b);
}

function obtenerImpares(arr) {
  return arr.filter((num) => num % 2 !== 0);
}

function obtenerImpares(array, limite) {
  return array.filter((num) => num % 2 !== 0 && num > limite);
}

function obtenerImpares(array) {
  const newArray = [];
  let j = 0;
  for (let i = 0; i < array.lenght; i++) {
    if (array[i] % 2 == 1) {
      newArray[j] = array[i];
      j++;
    }
  }
  return newArray;
}

function obtenerImpares(array) {
  const impares = array.filter((num) => num % 2 !== 0);
  console.log(impares);
  return impares;
}
const array = [1, 2, 3];
const resul = sumarArray(array);
console.log(resul);

function sumarArray(arr) {
  let sumaTotal = 0;
  for (let i = 0; i < arr.length; i++) {
    sumaTotal += arr[i];
  }
  return sumaTotal;
}

function multiplicarArray(arr) {
  return arr.reduce((acc, num) => acc * num, 1);
}
const ar = [2, 3, 4];
const res = multiplicarArray(array);
console.log(resultado);

function multiplicarArray(arr) {
  let multiTotal = 1;
  for (let i = 0; i < arr.length; i++) {
    multiTotal *= arr[i];
  }
  return multiTotal;
}
