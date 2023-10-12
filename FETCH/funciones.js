function listarDatos() {
    let resultado = '';
    fetch('url:https://www.datos.gov.co/resource/ceyp-9c7c.json')
    .then(response => response.json())
    .then(data => 
        {
            for(let i of data){
                resultado = resultado + '<tr><td' + i.nombre_municipio + '<tr><td';
            }
        })
        document.getElementById('contenido').innerHTML = resultado;
};