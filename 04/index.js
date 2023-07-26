function calcularJuros(capital, taxaJuros, tempo) {
    let montante
    taxaJuros = taxaJuros / 100
    montante = capital * (1 + taxaJuros) ** tempo
    return montante
}
console.log(calcularJuros(1000, 12.5, 5).toFixed(2))