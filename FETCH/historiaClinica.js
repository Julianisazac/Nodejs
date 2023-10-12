function validarFormulario(event) {
    event.preventDefault(); 
    let nombre = document.getElementById('nombre').value;
    let edad = document.getElementById('edad').value;
    let sexo = document.getElementById('sexo').value;
    let fechaNacimiento = document.getElementById('fechaNacimiento').value;
    let residencia = document.getElementById('residencia').value;
    let informante = document.getElementById('informante').value;
    let parentesco = document.getElementById('parentesco').value;

    let comienzoEnfermedad = document.getElementById('comienzoEnfermedad').value;
    let tratamiento = document.getElementById('tratamiento').value;
    let evolucion = document.getElementById('evolucion').value;

    let errores = [];

    if (nombre === '') {
       message.innerText =('El campo Nombre es obligatorio.');
       message.style.color = "red";
    }

    if (edad === '' || isNaN(edad)) {
        message.innerText=('El campo Edad debe ser un número válido.');
        message.style.color = "red";
    }

    if (sexo === '') {
        message.innerText=('Seleccione una opción en el campo Sexo.');
        message.style.color = "red";
    }

    if (fechaNacimiento === '') {
        message.innerText=('El campo Fecha de Nacimiento es obligatorio.');
        message.style.color = "red";
    }
    if (errores.length > 0) {
        alert('Por favor, corrija los siguientes errores:\n\n' + errores.join('\n'));
    } else {
        alert('Formulario validado con éxito. Puede enviarlo.');
        document.getElementById('historiaClinicaForm').submit();
    }
}

document.getElementById('historiaClinicaForm').addEventListener('submit', validarFormulario);
