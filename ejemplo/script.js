const compararNumeros = () => 
    new Promise((resolve) => resolve([+prompt("Número 1:"), +prompt("Número 2:"), +prompt("Número 3:")]));

const obtenerMenor = (n1, n2, n3) => Math.min(n1, n2, n3);

const verificarIguales = (n1, n2, n3) =>
    n1 === n2 ? `Número 1 y 2 son iguales: ${n1}` :
    n1 === n3 ? `Número 1 y 3 son iguales: ${n1}` :
    n2 === n3 ? `Número 2 y 3 son iguales: ${n2}` :
    "No hay números iguales";

compararNumeros()
    .then(([n1, n2, n3]) => {
        document.getElementById("resultado").innerText = `El menor número es: ${obtenerMenor(n1, n2, n3)}. ${verificarIguales(n1, n2, n3)}.`;
    })
    .catch(err => document.getElementById("resultado").innerText = err);
