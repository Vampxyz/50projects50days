const prev = document.getElementById("prev")
const next = document.getElementById("next")
const progress = document.getElementById("progress")
const circles = document.querySelectorAll(".circle")

// Quantidade de numeros ativos
let currentActive = 1

// Tamanaho da barra de progresso
// 107px
let progressWidth = 0

next.onclick = () => {
    // Adiciona 107 ao tamanho da barra de progresso
    progressWidth += 107

    // Se o tamanho da barra de progresso for maior que o tamanha do container
    if (progressWidth > 350) {
        progressWidth = 350
    }

    // Adiciona mais um numero ativo
    currentActive++

    // O tamanho da barra de progresso vai ser igual a igual ao numero atual do progressWidth + 107px
    progress.style.width = `${progressWidth}px`

    // Se a quantidade de numeros ativos for maior que a quantidade de numeros da tela
    if (currentActive > circles.length) {
        // A quantidade MAXIMA de numeros ativos vai ser a quantidade de numeros da tela
        currentActive = circles.length
    }
    update()
}
prev.onclick = () => {
    // Subtrai 107 do tamanho da barra de progresso
    progressWidth -= 107

    // Diminui um numero ativo
    currentActive--
    // O tamanho da barra de progresso vai ser igual ao numero atual do progressWidth - 107px
    progress.style.width = `${progressWidth}px`

    // Se a quantidade de numeros ativos for menor que a quantidade de numeros da tela
    if (currentActive < 1) {
        // A quantidade MINIMA de numeros ativos vai ser 1
        currentActive = 1
    }
    update()
}

function update() {
    // Para cada circulo e indice
    circles.forEach((circle, i) => {
        // Vai adicionar a class active pra todos os circulos que o indice e menor que a quantidade de numeros ativos
        if (i < currentActive) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })

    // Se a quantidade de circulos ativos for igual a 1
    if (currentActive === 1) {
        // O meu prev vai ser disabled
        prev.disabled = true

    // Se a quantidade de circulos ativos for exatamente igual ao numero total de circulos(se for igual a 4)
    } else if (currentActive === circles.length) {
        // O meu next vai ser disabled
        next.disabled = true
    
    // Se a quantidade de circulos ativos nao for 1 e nem 4
    } else {
        // Ativa os dois botoes
        prev.disabled = false
        next.disabled = false
    }
}