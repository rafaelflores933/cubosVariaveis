function somaAngulosPoligono(n) {
    s = 180 * (n - 2)
    a = s / n
    return `Soma: ${s}, Angulo: ${a}`
}
console.log(somaAngulosPoligono(6))