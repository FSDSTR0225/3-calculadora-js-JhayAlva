const Bnumeros = document.querySelector('.numeros');
const Boperacion = document.querySelector('.operaciones');
const arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const operaciones = ['+', '-', '*', '/','%'];

const primerOperador = document.getElementById('primer-numero');
const segundoOperador = document.getElementById('segundo-numero');
const operador = document.getElementById('operacion');

const resultado = document.querySelector('.resultado');
const limpiador = document.querySelector('.reset');

arrayNumeros.forEach(boton => {
    const botonNumeros = document.createElement('button');
    botonNumeros.textContent = boton;
    Bnumeros.appendChild(botonNumeros);

    botonNumeros.addEventListener('click', () => {
        if (operador.value === '') {
            primerOperador.value += boton;
        } else {
            segundoOperador.value += boton;
        }

        let resultadoOperacion = 0;

        resultado.addEventListener('click', () => {
            switch (operador.value) {
                case '+':
                    resultadoOperacion = add(parseInt(primerOperador.value),parseInt(segundoOperador.value));
                    pintarResultado(resultadoOperacion);
                    break;
                case '-':
                    resultadoOperacion = substract(parseInt(primerOperador.value),parseInt(segundoOperador.value));
                    pintarResultado(resultadoOperacion);
                    break;
                case '*':
                    resultadoOperacion = product(parseInt(primerOperador.value),parseInt(segundoOperador.value));
                    pintarResultado(resultadoOperacion);
                    break;
                case '%':
                    resultadoOperacion = porcentaje(parseInt(primerOperador.value),parseInt(segundoOperador.value));
                    console.log('****',resultadoOperacion);
                    pintarResultado(resultadoOperacion);
                    break;
                case '/':
                    resultadoOperacion = division(parseInt(primerOperador.value),parseInt(segundoOperador.value));
                    pintarResultado(resultadoOperacion);
                    break;
            }
        })

    })

})

operaciones.forEach(boton => {
    const botonOperaciones = document.createElement('button');
    botonOperaciones.textContent = boton;
    Boperacion.appendChild(botonOperaciones);

    botonOperaciones.addEventListener('click', () => {
        operador.value = boton;
    })
})

limpiador.addEventListener('click', () => {
    clear();
})

function add(a, b) {
    return a + b;
}

function substract(a, b) {
    return b - a;
}

function product(a, b) {
    return a * b;
}

function division(a, b){
    return a / b;
}

function porcentaje(a,b){
    let resultado = (a*b)/100;
    return resultado;
}


function clear() {
    primerOperador.value = '';
    segundoOperador.value = '';
    operador.value = '';
    return;
}

function pintarResultado(resultado) {
    segundoOperador.value = '';
    operador.value = '';
    return primerOperador.value = resultado;
}