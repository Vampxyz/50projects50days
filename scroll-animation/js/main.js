const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', showBoxes);
showBoxes()

function showBoxes() {
    
    boxes.forEach(box => {
        // Pega a posicao do topo da caixa atual em relacao ao topo da pagina
        const boxTop = box.getBoundingClientRect().top

        // Define o ponto de ativacao(Em quantos porcentos da tela isso vai acontecer)
        const activation = window.innerHeight * 0.8
        
        // Se o topo da caixa atual for menor que o ponto de ativacao(Se o topo da caixa passar os 80% da tela)
        if (boxTop < activation) {
            box.classList.add('active');
        } else {
            box.classList.remove('active');
        }
    });
}