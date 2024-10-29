function calcularIMC(peso: number, altura: number): number {
    return peso / (altura * altura);
}

function clasificarIMC(imc: number): string {
    if (imc < 18.5) {
        return "Bajo peso";
    } else if (imc >= 18.5 && imc < 24.9) {
        return "Peso normal";
    } else if (imc >= 25 && imc < 29.9) {
        return "Sobrepeso";
    } else {
        return "Obesidad";
    }
}

const peso = 70; // Peso en kilogramos
const altura = 1.75; // Altura en metros

const imc = calcularIMC(peso, altura);
console.log(`Tu IMC es: ${imc.toFixed(2)}`);
console.log(`Clasificación: ${clasificarIMC(imc)}`);
