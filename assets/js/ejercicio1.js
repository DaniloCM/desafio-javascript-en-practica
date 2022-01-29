// Limpia los mensajes de errores y exito que estan en pantalla
let limpiarMensajes = () => {

    let mensajes = document.querySelectorAll('.errorNombre , .errorAsunto , .errorMensaje, .resultado');

    for (let i = 0; i < mensajes.length; i++) {

        mensajes[i].innerHTML = '';

    }
};


// Declara el elemento del la etiqueta form 
let formulario = document.querySelector("form");

// Declara los elementos inputs
let txtNombre = document.getElementById('nombre');
let txtAsunto = document.getElementById('asunto');
let txtMensaje = document.getElementById('mensaje');

// Declara los elementos de los mensajes de error
let errorNombre = document.querySelector('.errorNombre');
let errorAsunto = document.querySelector('.errorAsunto');
let errorMensaje = document.querySelector('.errorMensaje');

// Declara el elemento del mensaje de exito
let mensajeExito = document.querySelector('.resultado');

// Declara las variables ocupadas en el evento "submit"
let expRegLetras, nombre, asunto, mensaje, validacion;


// Se activa cuando hay un evento "submit" y comienza a validar los mensajes dentro de los inputs
formulario.addEventListener('submit', (evento) => {

    // Detiene el comportamiento po defecto del evento
    evento.preventDefault();

    // Limpia los mensajes de errores  y exito
    limpiarMensajes();

    // Expresión regular para solo letras
    expRegLetras = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/;

    // Valores dentro de los inputs
    nombre = txtNombre.value;
    asunto = txtAsunto.value;
    mensaje = txtMensaje.value;

    // variable que comprueba si no hay ni un solo error de validación, true: no hay errores, false: hay por lo menos un error en la validacion de los inputs
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