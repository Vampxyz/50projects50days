const joke = document.getElementById("jokes");
const jokeBtn = document.getElementById("jokeBtn");

const generateJoke = async () => {
  // Exige a resposta em JSON
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  // Pega uma piada completa da API com muitas informações em JSON
  const res = await fetch(
    "https://official-joke-api.appspot.com/jokes/random/",
    config
);
/*
    res = {
        ok: true,
        status: 200,
        headers: {  ...  },
        body: ReadableStream, // <-- aqui tá o conteúdo da piada
        json: function() {método pra ler o body em JSON }
    }
*/


   // Pega o body da piada e transforma em um objeto
  const data = await res.json();
/* 
    data = {
        id: 123,
        type: "general",
        setup: "Why did the chicken cross the road?",
        punchline: "To get to the other side!"
    }
*/

  joke.innerHTML = data.setup + "<br />" + data.punchline;
};

generateJoke();

jokeBtn.addEventListener("click", generateJoke);
