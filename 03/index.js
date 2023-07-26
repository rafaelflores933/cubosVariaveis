function desconto(vlTotal, meuDinheiro) {
    let vlDesconto = vlTotal - meuDinheiro
    vlDesconto = vlDesconto * 100 / vlTotal
    return vlDesconto
}
console.log(desconto(110, 50).toFixed(1))