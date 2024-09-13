const ejecutarComparacionConRetraso = () => {
    const numeros = [20, 30, 25];  // Puedes cambiar estos números o generar otros
    const [num1, num2, num3] = numeros;
    const resultado = compararNumeros(num1, num2, num3);
    document.getElementById('resultado').innerHTML = `${resultado.mensaje} <br> ${resultado.iguales}`;
};

// después de 3 segundos
setTimeout(ejecutarComparacionConRetraso, 3000);