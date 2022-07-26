function trocaPorta(element) {
    const portaAtual = element.querySelector('img').src
    const imagemAtual = portaAtual.split('/').pop()
    if (imagemAtual === 'lockerclosed.jpg') {
        return './imagens/lockeropen.jpg'
    }
    return './imagens/lockerclosed.jpg'
}

document.addEventListener('DOMContentLoaded', function () {
    let armarios = document.querySelectorAll('.locker')
    for (let numero = 0; numero < armarios.length; numero++) {
        armarios[numero].addEventListener('click', function () {
            const novaImagem = trocaPorta(this)
            this.querySelector('img').src = novaImagem
        })
    }
})
