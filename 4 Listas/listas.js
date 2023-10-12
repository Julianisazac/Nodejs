
// const lista1 = ['1234', '5678', '9012'];
// const lista2 = ['3456', '7890', '2345'];
// const lista3 = ['6789', '0123', '4567'];
// const lista4 = ['8901', '3456', '7890'];

// buscarDocumentoEnLista= async(documento, lista, mensaje) =>{
//   if (lista.includes(documento)) {
//     console.log(mensaje);
//   }
// }

//  buscarDocumentos= async() => {
//   const documentoBuscado = prompt("Ingrese su documento: ");
//   Promise.all([
//     buscarDocumentoEnLista(documentoBuscado, lista1, 'Documento encontrado en la Lista 1'),
//     buscarDocumentoEnLista(documentoBuscado, lista2, 'Documento encontrado en la Lista 2'),
//     buscarDocumentoEnLista(documentoBuscado, lista3, 'Documento encontrado en Lista 3'),
//     buscarDocumentoEnLista(documentoBuscado, lista4, 'Documento encontrado en la Lista 4'),
//   ]);
// }
// buscarDocumentos();

const lista1 = ['1234', '5678', '9012'];
const lista2 = ['3456', '7890', '2345'];
const lista3 = ['6789', '0123', '4567'];
const lista4 = ['8901', '3456', '7890'];

const buscarDocumentoEnLista1 = async (documento) => {
  if (lista1.includes(documento)) {
    console.log('Documento encontrado en la Lista 1');
  }
}

const buscarDocumentoEnLista2 = async (documento) => {
  if (lista2.includes(documento)) {
    console.log('Documento encontrado en la Lista 2');
  }
}

const buscarDocumentoEnLista3 = async (documento) => {
  if (lista3.includes(documento)) {
    console.log('Documento encontrado en la Lista 3');
  }
}

const buscarDocumentoEnLista4 = async (documento) => {
  if (lista4.includes(documento)) {
    console.log('Documento encontrado en la Lista 4');
  }
}

const buscarDocumentos = async () => {
  const documentoBuscado = prompt('Ingrese su documento: ');
  await buscarDocumentoEnLista1(documentoBuscado);
  await buscarDocumentoEnLista2(documentoBuscado);
  await buscarDocumentoEnLista3(documentoBuscado);
  await buscarDocumentoEnLista4(documentoBuscado);
};

buscarDocumentos();
