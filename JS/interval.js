const repetirComparacion = () => {
    const numeros = [Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)];
    const [num1, num2, num3] = numeros;
    const resultado = compararNumeros(num1, num2, num3);
    document.getElementById('resultado').innerHTML = `${resultado.mensaje} <br> ${resultado.iguales}`;
};
// función cada 5 segundos
setInterval(repetirComparacion, 5000);