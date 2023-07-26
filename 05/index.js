
function distanciaEntrePontos(x1, x2, y1, y2) {
    x = x2 - x1
    y = y2 - y1
    xy = (x ** 2) + (y ** 2)
    distancia = Math.sqrt(xy)
    return distancia
}
console.log(distanciaEntrePontos(1, 1, 1, 4))