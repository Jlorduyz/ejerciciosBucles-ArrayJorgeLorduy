//NUMERO 1

/* let numeroIngresado = parseInt(prompt("ingrese el numero"));

for (let i = 1; i < 11; i++) {
  console.log(numeroIngresado * i);
}

//NUMERO 2

let entrada = 1;
let numerosIngresados = [];
while (entrada !== 0) {
  let ingreso = parseInt(prompt("ingrese un numero: "));
  numerosIngresados.push(ingreso);
  entrada = ingreso;
  console.log(numerosIngresados);
  alert(numerosIngresados);
} 

//NUMERO 3

alert("Adivine el numero del 1 al 100, echale ganas");
let numeroIncognita = 34;
let intentos = 0;
let numeroIngresado = 0;
while (numeroIncognita != numeroIngresado) {
  intentos++;
  let numeroIngresado = prompt("Ingrese el numero");
  if (numeroIncognita == numeroIngresado) {
    alert("Felicidades, adivinaste el numero en " + intentos + " intentos");
    break;
  } else if (numeroIncognita < numeroIngresado) {
    alert("El numero ingresado en mayor");
  } else {
    alert("El numero ingresado es menor");
  }
} 

//NUMERO 4

let ingresado = parseInt(prompt("Ingrese un numero"));
let factores = [];
for (let i = 1; i <= ingresado; i++) {
  if (ingresado % i === 0) {
    factores.push(i);
  }
}

if (factores.length > 2) {
  alert("No es numero primo");
} else {
  alert("si es numero primo");
} 

//NUMERO 5 Procedo a reciclar xDDDDD

let ingresado = parseInt(prompt("Ingrese un numero"));
let factores = [];
for (let i = 1; i <= ingresado; i++) {
  if (ingresado % i === 0) {
    factores.push(i);
  }
}
console.log(factores);

//NUMERO 6
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let numero of array) {
  console.log(numero);
} 

//NUMERO 7

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let numero of array) {
  console.log(numero * 2);
} 

//NUMERO 8
let familia = [
  (miembroA = {
    nombre: "jorge",
    apellido: "lorduy",
    edad: "22",
    altura: "1.89",
  }),
  (miembroB = {
    nombre: "ester",
    apellido: "ayala",
    edad: "56",
    altura: "1.62",
  }),
  (miembroC = {
    nombre: "maria",
    apellido: "suarez",
    edad: "11",
    altura: "1.40",
  }),
  (miembroD = {
    nombre: "anthony",
    apellido: "marquez",
    edad: "20",
    altura: "1.74",
  }),
  (miembroE = {
    nombre: "estefany",
    apellido: "olmeda",
    edad: "34",
    altura: "1.78",
  }),
];

for (const integrante of familia) {
  let datos = Object.values(integrante);
  console.log(
    "Hola mi nombre es " +
      datos[0] +
      " " +
      datos[1] +
      " tengo " +
      datos[2] +
      " años de edad y mido " +
      datos[3]
  );
} 

//NUMERO 9

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (const numeros of array) {
  if (numeros % 2 !== 0) {
    console.log(numeros);
  }
} 

//NUMERO 10

let sumaPar = 0;
let sumaImpar = 0;
let ingresados;
while (ingresados != 0) {
  ingresados = parseInt(prompt("ingrese un numero"));
  if (ingresados % 2 == 0) {
    sumaPar = sumaPar + ingresados;
    console.log("Suma Pares: " + sumaPar);
  } else {
    sumaImpar = sumaImpar + ingresados;
    console.log("Suma impares: " + sumaImpar);
  }
} 

//NUMERO 11

let numeros = [7, 3, 9, 1, 6, 10, 8, 2, 4, 5];
let numeroMayor = numeros[0]; 

for (let i = 1; i < numeros.length; i++) {
  if (numeros[i] > numeroMayor) {
    numeroMayor = numeros[i];
  }
}

console.log("El número mayor es: " + numeroMayor); 

//NUMERO 12

let numeros = [7, 3, 9, 1, 6, 10, 8, 2, 4, 5];
let numeroMenor = numeros[0]; 

for (let i = 1; i < numeros.length; i++) {
  if (numeros[i] < numeroMenor) {
    numeroMenor = numeros[i];
  }
} 

console.log("El número mayor es: " + numeroMenor); 

//NUMERO 13

let jugadorUno = prompt("Ingrese nombre del jugador #1");
let jugadorDos = prompt("Ingrese nombre del jugador #2");

while (0 == 0) {
  let playerUno = prompt(jugadorUno + " piedra, papel o tijera ?");
  let playerDos = prompt(jugadorDos + " piedra, papel o tijera ?");
  if (
    (playerUno == "piedra" && playerDos == "tijera") ||
    (playerUno == "papel" && playerDos == "piedra") ||
    (playerUno == "tijera" && playerDos == "papel")
  ) {
    console.log("Ganador: " + jugadorUno);
    break;
  } else if (playerUno == playerDos) {
  } else {
    console.log("Ganador: " + jugadorDos);
    break;
  }
} 

//NUMERO 14

let cantidad = 5;

for (let i = 1; i <= cantidad; i++) {
  let pisos = "";
  for (let e = 1; e <= i; e++) {
    pisos += "*";
  }
  console.log(pisos);
} 

//NUMERO 15

let cantidad = 1;
for (let i = 5; i >= cantidad; i--) {
  let pisos = "";
  for (let e = 1; e <= i; e++) {
    pisos += "*";
  }
  console.log(pisos);
} */
//NUMERO 16

let array = [8, 9, 3, 10, 5, 2, 7, 1, 6, 4];
