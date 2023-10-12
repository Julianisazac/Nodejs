// proceso1 = async () => {
//     let suma1 = 0;
//     return new Promise((resolve, reject) => setTimeout(() => {
//         for (let i = 0; i < 5000; i++) {
//             suma1 += i;
//         }
//         resolve('Proceso1: La suma es ' + suma1);
//     }, 5000)
//     )
// }

// proceso2 = async () => {
//     let suma1 = 0;
//     return new Promise((resolve, reject) => setTimeout(() => {
//         for (let i = 0; i < 20000; i++) {
//             suma1 += i;
//         }
//         resolve('Proceso2: La suma es ' + suma1);
//     }, 8000)
//     )
// }

// proceso3 = async () => {
//     let suma1 = 0;
//     return new Promise((resolve, reject) => setTimeout(() => {
//         for (let i = 0; i < 1000; i++) {
//             suma1 += i;
//         }
//         resolve('Proceso3: La suma es ' + suma1);
//     }, 3000)
//     )
// }

// document.querySelector('#btnBuscar')
//     .addEventListener('click', () => {
//     proceso1().then(mensaje => console.log(mensaje))
//     proceso2().then(mensaje => console.log(mensaje))
//     proceso3().then(mensaje => console.log(mensaje))
// })

//Convertir el anterior codigo a funciones sincronicas, sin promesas y sin el async
//dadas 4 listas de documentos implementar una funcion async por cada lista para buscar
//un documento. Sí el documento está devolver encontrado, imprimir el mensaje.

function proceso1() {
    let suma1 = 0;
    for (let i = 0; i < 5000; i++) {
        suma1 += i;
    }
    return('Proceso1: La suma es ' + suma1);
}

function proceso2() {
    let suma1 = 0;
    for (let i = 0; i < 20000; i++) {
        suma1 += i;
    }
    return('Proceso2: La suma es ' + suma1) ;
}

function proceso3() {
    let suma1 = 0;
    for (let i = 0; i < 1000; i++) {
        suma1 += i;
    }
    return ('Proceso3: La suma es ' + suma1);
}

document.querySelector('#btnBuscar')
    .addEventListener('click', () => {
        console.log(proceso1());
        console.log(proceso2());
        console.log(proceso3());
    });
