const textarea = document.getElementById("input");
const tagsContainer = document.getElementById("tags");

textarea.focus();

// A cada coisa digitada ou colada do textarea ele vai chamar a funcao de criar tags
textarea.addEventListener("input", (e) => {
  /*
    Pega o evento que foi disparado(digitou algo)
    com o .target ele pega qual elemento do html chamou essa funcao(textarea)
    e pega o valor do elemento que chamou a funcao(textarea.value)
*/
  createTags(e.target.value);
});

// A funcao recebe o e.target.value so que com o nome "input" === input = ["banana, arroz"]
function createTags(input) {
  const tags = input
    .split(",") // ["banana", " arroz"]
    .map((tag) => tag.trim()) // Tira qualquer espaço em branco que poderia ter ["banana", "arroz"]
    .filter((tag) => tag !== ""); // ["banana", "arroz", ""] seria deletado qualquer tag que fosse "vazia"
  // Resultado -> tags = ["banana", "arroz"]

  tagsContainer.innerHTML = ""; // Toda vez que a funcao createTags for chamada, vai esvaziar a div de tags do html

  // Para cada tag dentro do meu array tags
  tags.forEach((tag) => {
    // Cria um elemento span, pra cada tag do array
    const tagEl = document.createElement("span");
    // Adiciona a class "tag" pra cada span que foi criado
    tagEl.classList.add("tag");
    // Atribui o conteudo de texto do span atual sendo a tag atual
    tagEl.textContent = tag;

    // Adiciona ao container de tags como um elemento dentro do proprio
    tagsContainer.appendChild(tagEl);
  });
}

