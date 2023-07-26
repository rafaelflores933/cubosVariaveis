function calculoPeriAreCirculo(r) {
    c = 2 * Math.PI * r
    a = Math.PI * (r ** 2)
    return `comprimento: ${c.toFixed(1)}, área: ${a.toFixed(2)}`
}
console.log(calculoPeriAreCirculo(1))