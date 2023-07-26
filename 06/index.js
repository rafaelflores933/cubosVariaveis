function velocidadeMedia(distPercorrida, tempo) {
    velocidade = distPercorrida / tempo
    return velocidade * 3.6
}
console.log(`${velocidadeMedia(500, 10)}km/h`)