function calculaIMC(peso, altura) {
    imc = peso / (altura ** 2)
    return imc
}
console.log(calculaIMC(76, 1.79).toFixed(1))