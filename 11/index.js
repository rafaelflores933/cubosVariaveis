function volumeEsfera(d) {
    r = d / 2
    v = 4 * (r ** 3) / 3
    return `O volume de uma esfera de raio ${r} é ${v} PI`
}
console.log(volumeEsfera(6))