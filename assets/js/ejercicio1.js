let limpiarErrores = () => {

    let errores = document.querySelectorAll('.errorNombre , .errorAsunto , .errorMensaje');

    for (let i = 0; i < errores.length; i++) {
        errores[i].innerHTML = '';

    }
};

let formulario = document.getElementsByTagName("form")[0];

let txtNombre = document.getElementById('nombre');
let txtAsunto = document.getElementById('asunto');
let txtMensaje = document.getElementById('mensaje');

let errorNombre = document.querySelector('.errorNombre');
let errorAsunto = document.querySelector('.errorAsunto');
let errorMensaje = document.querySelector('.errorMensaje');


formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();
    

    limpiarErrores();

    let expRegLetras = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/;

    let nombre = txtNombre.value;
    let asunto = txtAsunto.value;
    let mensaje = txtMensaje.value;

    console.log(nombre, asunto, mensaje);

    let validacionNombre = !expRegLetras.test(nombre);
    let validacionAsunto = !expRegLetras.test(asunto);
    let validacionMensaje = !expRegLetras.test(mensaje);

    console.log(validacionNombre, validacionAsunto, validacionMensaje);
    
    if (nombre == '') {
        errorNombre.innerHTML = 'Debe escribir Nombre';
    } else if (validacionNombre) {
        errorNombre.innerHTML = 'Debe escribir Solo Letras';
    }

    if (asunto == '') {
        errorAsunto.innerHTML = 'Debe escribir Asunto';
    } else if (validacionAsunto) {
        errorAsunto.innerHTML = 'Debe escribir Solo Letras';
    }

    if (mensaje == '') {
        errorMensaje.innerHTML = 'Debe escribir Mensaje';
    } else if (validacionMensaje) {
        errorMensaje.innerHTML = 'Debe escribir Solo Letras';
    }
});