// function saludar(nombre) {
//     alert("Hola " + nombre);
//   }
  
//   function procesarEntradaUsuario(callback) {
//     var nombre = prompt("Por favor ingresa tu nombre.");
//     callback(nombre);
//   }
  
//   procesarEntradaUsuario(saludar);

  //Implementar un código donde emplee callback donde reciba un número y si el número es mayor a 10
  //calcular e imprimir la suma de los números del 1 al 100
function sumar(callback) {
    let suma = 0;
    for (let i = 1; i <= 100; i++) {
      suma += i;
    }
    callback(suma);
  }
  function procesarNumero(numero, callback) {
    if (numero > 10) {
      sumar(function (resultado) {
       console.log("El número es mayor que 10.");
       console.log("La suma de los números del 1 al 100 es:", resultado);
      });
    } else {
     console.log("El número no es mayor que 10.");
    }
  }
  const miNumero = prompt("Ingresa un número: "); 
  procesarNumero(miNumero, function () {});
  
  //FUNCIONES FLECHA

//   const saludar = (nombre) => {
//     alert("Hola " + nombre);
//   };
  
//   const procesarEntradaUsuario = (callback) => {
//     const nombre = prompt("Por favor, ingresa tu nombre.");
//     callback(nombre);
//   };
  
//   procesarEntradaUsuario(saludar);
  
//   const sumar = (callback) => {
//     let suma = 0;
//     for (let i = 1; i <= 100; i++) {
//       suma += i;
//     }
//     callback(suma);
//   };
  
//   const procesarNumero = (numero, callback) => {
//     if (numero > 10) {
//       sumar((resultado) => {
//         console.log("El número es mayor que 10.");
//         console.log("La suma de los números del 1 al 100 es:", resultado);
//       });
//     } else {
//       console.log("El número no es mayor que 10.");
//     }
//   };
  
//   const miNumero = prompt("Ingresa un número: ");
//   procesarNumero(miNumero, () => {});
  