function taxaJuros(m, c, n) {
    i = (c ** 3 / m / n) - 1//(m / c / 1 ** n) - 1
    return i
}
console.log(taxaJuros(90000, 60000, 24))