function calcularIMC(peso, altura) {
    return peso / (altura * altura);
}
function clasificarIMC(imc) {
    if (imc < 18.5) {
        return "Bajo peso";
    }
    else if (imc >= 18.5 && imc < 24.9) {
        return "Peso normal";
    }
    else if (imc >= 25 && imc < 29.9) {
        return "Sobrepeso";
    }
    else {
        return "Obesidad";
    }
}
var peso = 70; // Peso en kilogramos
var altura = 1.75; // Altura en metros
var imc = calcularIMC(peso, altura);
console.log("Tu IMC es: ".concat(imc.toFixed(2)));
console.log("Clasificaci\u00F3n: ".concat(clasificarIMC(imc)));
