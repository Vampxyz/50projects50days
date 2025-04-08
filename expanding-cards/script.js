// pega todos os paineis(imagens)
const panels = document.querySelectorAll(".panel")

// para cada painel dentro dos paineis
panels.forEach(panel => {
    // o painel que foi clicado
    panel.addEventListener('click', () => {
        // chama a funcao de remover ativos antes de adicionar
        removeActives()

        // adiciona a class "active"
        panel.classList.add('active')
    })
})

function removeActives() {
    // remove a class "active" de todos os paineis
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}