let cambiarColorCaja = (boton) => {

    let colorBoton = boton.style.backgroundColor;
    let caja = document.getElementById("caja");

    boton.addEventListener("click", () => {
        caja.style.backgroundColor = colorBoton;
    });

};

let btn1 = document.getElementById("btn-1");
let btn2 = document.getElementById("btn-2");
let btn3 = document.getElementById("btn-3");
let btn4 = document.getElementById("btn-4");
let btn5 = document.getElementById("btn-5");
let btn6 = document.getElementById("btn-6");

cambiarColorCaja(btn1);

cambiarColorCaja(btn2);

cambiarColorCaja(btn3);

cambiarColorCaja(btn4);

cambiarColorCaja(btn5);

cambiarColorCaja(btn6);