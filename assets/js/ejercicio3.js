//input
let valor1 = document.getElementById("valor1");
let valor2 = document.getElementById("valor2");

//operaciones
let sumar = document.getElementById("btn-sumar");
let restar = document.getElementById("btn-restar");

sumar.addEventListener("click", () => {
    dato1 = parseInt(valor1.value);
    dato2 = parseInt(valor2.value);
    console.log(dato1, dato2);
    let suma = (dato1 + dato2);
    let resultado = document.getElementsByClassName("resultado")[0];
    console.log(resultado);
    resultado.innerHTML = `${suma}`;
});

restar.addEventListener("click", () => {
    dato1 = parseInt(valor1.value);
    dato2 = parseInt(valor2.value);
    console.log(dato1, dato2);
    let resta = (dato1 - dato2);
    if (resta < 0) {
        resta = 0;
        let resultado = document.getElementsByClassName("resultado")[0];
        console.log(resultado);
        resultado.innerHTML = `${resta}`;
    } else {
        let resultado = document.getElementsByClassName("resultado")[0];
        console.log(resultado);
        resultado.innerHTML = `${resta}`;
    }
});