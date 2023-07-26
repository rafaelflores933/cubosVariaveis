function covid(Po, x, t) {
    p = Po * x
    return `Isso significa que, após ${t} dias, o total de pessoas infectadas será de ${p}, uma vez que inicialmente existiam ${Po} pessoas infectadas.`
}
console.log(covid(1000, 4, 7))