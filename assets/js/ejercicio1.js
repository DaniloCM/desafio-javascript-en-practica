let limpiarMensajes = () => {

    let mensajes = document.querySelectorAll('.errorNombre , .errorAsunto , .errorMensaje, .resultado');

    for (let i = 0; i < mensajes.length; i++) {

        mensajes[i].innerHTML = '';

    }
};

let formulario = document.querySelector("form");

let txtNombre = document.getElementById('nombre');
let txtAsunto = document.getElementById('asunto');
let txtMensaje = document.getElementById('mensaje');

let errorNombre = document.querySelector('.errorNombre');
let errorAsunto = document.querySelector('.errorAsunto');
let errorMensaje = document.querySelector('.errorMensaje');

let mensajeExito = document.querySelector('.resultado');

let expRegLetras, nombre, asunto, mensaje, validacion;


formulario.addEventListener('submit', (evento) => {

    evento.preventDefault();

    limpiarMensajes();

    expRegLetras = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/;

    nombre = txtNombre.value;
    asunto = txtAsunto.value;
    mensaje = txtMensaje.value;

    validacion = true;

    // Validación del input nombre que sea solo letras
    if (nombre == '') {

        errorNombre.innerHTML = 'El nombre es requerido';
        validacion = false;

    } else if (!expRegLetras.test(nombre)) {

        errorNombre.innerHTML = 'Debe escribir Solo Letras';
        validacion = false;

    }

    // Validación del input asunto que sea solo letras
    if (asunto == '') {

        errorAsunto.innerHTML = 'El asunto es requerido';
        validacion = false;

    } else if (!expRegLetras.test(asunto)) {

        errorAsunto.innerHTML = 'Debe escribir Solo Letras';
        validacion = false;

    }

    // Validación del input mensaje que sea solo letras
    if (mensaje == '') {

        errorMensaje.innerHTML = 'El mensaje es requerido';
        validacion = false;

    } else if (!expRegLetras.test(mensaje)) {

        errorMensaje.innerHTML = 'Debe escribir Solo Letras';
        validacion = false;

    }

    // Comprueba si la validacion fue correta, si es asi, muestra en pantalla un mensaje de exito
    if (validacion) mensajeExito.innerHTML = 'Mensaje enviado con exito !!!';

});