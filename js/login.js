const input = document.querySelector(".loginInput")
const botao = document.querySelector(".loginBotao")
const form = document.querySelector(".loginForm")
const audio = document.querySelector(".audio")

const validacaoInput = ({ target }) => {
    if(target.value.length > 2) {
        botao.removeAttribute("disabled")
        return
    }
        
    botao.setAttribute("disabled", "")
}

const handleSubmit = (event) => {
    event.preventDefault()

    localStorage.setItem('Jogador', input.value)
    window.location = "pages/jogo.html"
}

function audioLuffy() {
    audio.play()
}

input.addEventListener("input", validacaoInput)
form.addEventListener("submit", handleSubmit)
audio.addEventListener("click", audioLuffy)