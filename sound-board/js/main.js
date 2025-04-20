// Buttons
const applause = document.getElementById('applause');
const boo = document.getElementById('boo');
const gasp = document.getElementById('gasp');
const tada = document.getElementById('tada');
const victory = document.getElementById('victory');
const wrong = document.getElementById('wrong');

// Sounds
const applauseSound = document.getElementById('applauseSound');
const booSound = document.getElementById('booSound');
const gaspSound = document.getElementById('gaspSound');
const tadaSound = document.getElementById('tadaSound');
const victorySound = document.getElementById('victorySound');
const wrongSound = document.getElementById('wrongSound');

const sounds = [applauseSound, booSound, gaspSound, tadaSound, victorySound, wrongSound];

// Pega o indice do botao clicado e passa o som correspondente a const de sons acima
[applause, boo, gasp, tada, victory, wrong].forEach((button, i) => {
    button.onclick = () => {
        sounds[i].play();
        sounds[i].currentTime = 0;
    }
})