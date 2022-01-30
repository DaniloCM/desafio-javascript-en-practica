// Declaración de los elementos de los input
let valor1 = document.getElementById("valor1");
let valor2 = document.getElementById("valor2");

// Declaración de los elementos de los botones de operaciones
let btnSumar = document.getElementById("btn-sumar");
let btnRestar = document.getElementById("btn-restar");

// Declaración del elemento del resultado
let resultado = document.querySelector(".resultado");

// Declaración de variables usadas en los eventos
let dato1, dato2, suma, resta;

// Suma los datos de entradas cuando hay un click en el botón "Sumar"
btnSumar.addEventListener("click", () => {

    dato1 = parseInt(valor1.value);
    dato2 = parseInt(valor2.value);

    suma = (dato1 + dato2);

    resultado.innerHTML = `${suma}`;
});

// Suma los datos de entradas cuando hay un click en el botón "Restar". Cuando el resultado de la resta es menor e igual a cero (0), el resultado mostrado en pantalla sera igual a cero (0).
btnRestar.addEventListener("click", () => {

    dato1 = parseInt(valor1.value);
    dato2 = parseInt(valor2.value);

    resta = (dato1 - dato2);

    if (resta < 0) {

        resta = 0;
        resultado.innerHTML = `${resta}`;

    } else {

        resultado.innerHTML = `${resta}`;

    }
});