// let limpiarErrores = ()=>{

//     let errores = document.getElementsByClassName('msgError')

//     for (let i = 0; i < errores.length; i++) {
//         errores[i].innerHTML = '';
        
//     }
// }

let formulario = document.getElementsByTagName("form")[0];

let txtNombre = document.getElementById('nombre');
let txtAsunto = document.getElementById('asunto');
let txtMensaje = document.getElementById('mensaje');

let errorNombre = document.querySelector('.errorNombre');
let errorAsunto = document.querySelector('.errorAsunto');
let errorMensaje = document.querySelector('.errorMensaje');





formulario.addEventListener('submit', (evento)=>{
    evento.preventDefault();

    // limpiarErrores();
    let expRegLetras = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g;

    let nombre = txtNombre.value;
    let asunto = txtAsunto.value;
    let mensaje = txtMensaje.value;

    if (nombre == '') {
        errorNombre.innerHTML = 'Debe escribir Nombre';
 
    }else if(!(expRegLetras.test(nombre))){
        errorNombre.innerHTML = 'Debe escribir Solo Letras';

    }

    if (asunto == '') {
        errorAsunto.innerHTML = 'Debe escribir Asunto';
 
    }else if(expRegLetras.test(asunto) == false){
        errorAsunto.innerHTML = 'Debe escribir Solo Letras';

    }

    if (mensaje == '') {
        errorMensaje.innerHTML = 'Debe escribir Mensaje';
 
    }else if(expRegLetras.test(mensaje) == false){
        errorMensaje.innerHTML = 'Debe escribir Solo Letras';

    }

})