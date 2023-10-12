const buscarCliente = (dato)=> {
    const documentos = [1010, 1011, 1020, 1030, 1957, 5550, 1234];
    const nombres = ['Julian', 'Sofia', 'Julieta', 'Gloria', 'Alvaro', 'Ana', 'Daniela'];
    let encontrado = false;
    let nombreEncontrado = '';
    for (let i = 0; i < documentos.length; i++) {
        if (dato == documentos[i]) {
            encontrado = true;
            nombreEncontrado  = nombres[i];
        }
    }
    return new Promise((resolve, reject)=>{
        if (encontrado) {
            resolve(nombreEncontrado);
        } else{
            reject('Dato no encontrado');
        }
    })
}
document.querySelector('#btnBuscar')
.addEventListener('click', ()=> buscarCliente(document.getElementById('dato').value)
.then(nombres => console.log(nombres))
.catch(error => console.log(error))
);