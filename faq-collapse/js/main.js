// Pega todo os faqs
const faqs = document.querySelectorAll('.faq');

// Pega todos os botoes
const actions = document.querySelectorAll('.action');

// Pega o botao clicado e adiciona uma acao
actions.forEach((action) => {
    // Pega o faq do botao clicado
    const currentFaq = action.closest(".faq")

    // Pega o icone atual do botao
    const currentIcon = action.children[0];

    // Adiciona ao faq a acao de:
    action.addEventListener("click", () => {
        
        if (currentFaq.classList.contains("active")) { // Se o faq estiver ativo e o botao for clicado
            // Remove a class active
            currentFaq.classList.remove("active")

            // Volta a altura original
            currentFaq.style.height = "80px"

            // Remove o icone de x
            currentIcon.classList.remove("fi-rr-cross")

        } else { // Se o faq estiver fechado e o botao for clicado
            // Adiciona a class active
            currentFaq.classList.add("active")

            // Define a altura do faq
            currentFaq.style.height = "140px"
            
            // Adiciona o icone de x
            currentIcon.classList.add("fi-rr-cross")
        }
    })
})