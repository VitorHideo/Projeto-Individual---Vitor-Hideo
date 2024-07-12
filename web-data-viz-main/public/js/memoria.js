// Seleciona todos os elementos com a classe "memory-card"
const cards = document.querySelectorAll(".card-memoria");

// Variáveis para controlar o estado do jogo
let cardVirado = false; 
let travar = false; 
let primeiroCard, segundoCard; 

// Função para virarCard a carta
function virarCard() {
  if (travar) return; 
  if (this === primeiroCard) return; 

  this.classList.add("flip"); // Adiciona a classe "flip" à carta clicada, virando-a

  if (!cardVirado) {
 
    cardVirado = true; // Define que uma carta foi virada
    primeiroCard = this; // Armazena a primeira carta virada

    return;
  }

  segundoCard = this; // Armazena a segunda carta virada
  verificar(); // Verifica se as duas cartas são iguais
}

// Função para verificar se as cartas combinam
function verificar() {
  let correto = primeiroCard.dataset.framework === segundoCard.dataset.framework; // Compara os data-framework das duas cartas

  correto ? desabilitarCard() : voltarCard(); // Se as cartas combinam, desabilita-as; caso contrário, desvira as cartas
}

// Função para desabilitar as cartas quando elas combinam
function desabilitarCard() {
  primeiroCard.removeEventListener("click", virarCard); 
  segundoCard.removeEventListener("click", virarCard); 

  resetarJogo(); // Reseta o tabuleiro para permitir novas jogadas
}

// Função para desvirarCard as cartas quando não combinam
function voltarCard() {
  travar = true; // Bloqueia o tabuleiro para evitar outras ações

  setTimeout(() => {
    primeiroCard.classList.remove("flip"); 
    segundoCard.classList.remove("flip"); 

    resetarJogo(); // Reseta o tabuleiro para permitir novas jogadas
  }, 1500); 
}

// Função para resetar o estado do tabuleiro
function resetarJogo() {
  [cardVirado, travar] = [false, false]; 
  [primeiroCard, segundoCard] = [null, null]; 
}

// Função para embaralhar as cartas quando o jogo começa, gerando um número aleatorio
(function embaralhar() {
  cards.forEach((card) => {
    let aleatorio = Math.floor(Math.random() * 12); 
    card.style.order = aleatorio; 
  });
})();

// Adiciona o evento de clique a cada carta
cards.forEach((card) => card.addEventListener("click", virarCard));
