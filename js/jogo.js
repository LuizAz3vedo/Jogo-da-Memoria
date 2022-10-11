const grid = document.querySelector(".grid")
const jogador = document.querySelector(".jogador")
const tempo = document.querySelector(".tempo")
const reiniciar = document.querySelector(".reiniciar")

let ss = 00
let mm = 00

const imagensPersonagens = [
    "carta1",
    "carta2",
    "carta3",
    "carta4",
    "carta5",
    "carta6",
    "carta7",
    "carta8",
    "carta9",
    "carta10",
]

const criarElemento = (tag, nomeClass) => {
    const elemento = document.createElement(tag)
    elemento.className = nomeClass
    return elemento
}

let primeiraCarta = ""
let segundaCarta = ""

const finalJogo = () =>{
    const desabilitarCarta = document.querySelectorAll(".desabilitarCarta")

    if (desabilitarCarta.length === 20){
        clearInterval(this.loop)
        alert(`Parabéns, ${jogador.innerHTML} você achou o One Piece mais rapido que o luffy com o tempo de ${tempo.innerHTML}s!`)
    }
}


const verificarCartas = () =>{
    const primeiroPersonagem = primeiraCarta.getAttribute("dataPersonagens")
    const segundoPersonagem = segundaCarta.getAttribute("dataPersonagens")

    if (primeiroPersonagem === segundoPersonagem){

        primeiraCarta.firstChild.classList.add("desabilitarCarta")
        segundaCarta.firstChild.classList.add("desabilitarCarta")

        primeiraCarta = ""
        segundaCarta = ""

        finalJogo()

    }else {
        setTimeout(() => {
            primeiraCarta.classList.remove("cartaRevelada")
            segundaCarta.classList.remove("cartaRevelada")

            primeiraCarta = ""
            segundaCarta = ""

        }, 500)
    }
}

const cartaRevelada = ({target}) =>{
    if (target.parentNode.className.includes("cartaRevelada")){
        return
    }
    
    if (primeiraCarta === ""){
        target.parentNode.classList.add("cartaRevelada")
        primeiraCarta= target.parentNode
    } else if(segundaCarta === ""){
        target.parentNode.classList.add("cartaRevelada")
        segundaCarta = target.parentNode

        verificarCartas()
    }
    
}

const criarCarta = (personagen) => {
    const carta = criarElemento("div", "carta")
    const frontal = criarElemento("div", "face frontal")
    const posterior = criarElemento("div", "face posterior")

    frontal.style.backgroundImage = `url("../imagens/${personagen}.png")`

    carta.appendChild(frontal)
    carta.appendChild(posterior)

    carta.addEventListener("click", cartaRevelada)
    carta.setAttribute("dataPersonagens", personagen)

    return carta

}

const carregarJogo = () =>{
    const duplicarImagensPersonagens = [...imagensPersonagens, ...imagensPersonagens]

    const cartasAleatorias = duplicarImagensPersonagens.sort( () => Math.random() - 0.5)

    cartasAleatorias.forEach((personagens) => {
        const carta = criarCarta(personagens)
        grid.appendChild(carta)
    })
}

const contadorTempo = () => {
    ss++
    if (ss == 60){
        ss = 0
        mm++
    }
    let formato = (mm < 10 ? '0' + mm : mm) + ':' + (ss < 10 ? '0' + ss : ss)
    tempo.innerHTML = formato
}

function recomecar(){
    window.location.reload(false)

}

window.onload = () =>{
    jogador.innerHTML = localStorage.getItem("Jogador")
    this.loop = setInterval(() => {contadorTempo()}, 1000)
    carregarJogo()
    
}

reiniciar.addEventListener("reiniciar", recomecar)