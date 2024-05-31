// Declaração de variáveis
var questionElement = document.getElementById('question');
var answerBox = document.getElementById('answers-box');
var quizzContainer = document.getElementById('quizz-container');
var scoreContainer = document.getElementById('score-container');
var restartBtn = document.getElementById('restart');
var points = 0;
var actualQuestion = 0;

// Perguntas
var questions = [
    {
        question: 'Quando o Corinthians foi fundado?',
        answers: [
            { answer: '1910', correct: true },
            { answer: '1911', correct: false },
            { answer: '1908', correct: false },
            { answer: '1915', correct: false },
        ],
    },
    {
        question: 'Em qual ano o Corinthians conquistou o seu primeiro campeonato Paulista?',
        answers: [
            { answer: '1912', correct: false },
            { answer: '1914', correct: true },
            { answer: '1918', correct: false },
            { answer: '1915', correct: false },
        ],
    },
    {
        question: 'Qual desses jogadores tem mais gols pelo Corinthians?',
        answers: [
            { answer: 'Sócrates', correct: false },
            { answer: 'Luizinho', correct: true },
            { answer: 'Rivellino', correct: false },
            { answer: 'Casagrande', correct: false },
        ],
    },
    {
        question: 'Em que dia foi fundado o Corinthians??',
        answers: [
            { answer: 'Dia 1º outubro', correct: false },
            { answer: 'Dia 30º de outubro', correct: false },
            { answer: 'Dia 1º de setembro', correct: true },
            { answer: 'Dia 30º de setembro', correct: false },
        ],
    },
    {
        question: 'Quem fez o gol decisivo na final do campeonato paulista em 2019 contra o São Paulo?',
        answers: [
            { answer: 'Clayson', correct: false },
            { answer: 'Danilo Avelar', correct: false },
            { answer: 'Fagner', correct: false },
            { answer: 'Vagner Love', correct: true },
        ],
    },
    {
        question: 'Qual é a capacidade de publico da Neo Quimica Arena?',
        answers: [
            { answer: '46.300', correct: false },
            { answer: '49.205', correct: true },
            { answer: '44.810', correct: false },
            { answer: '48.400', correct: false },
        ],
    },
    {
        question: 'Como o atacante Paolo Guerreiro fez o gol na final do Mundial em 2012?',
        answers: [
            { answer: 'Cabeça', correct: true },
            { answer: 'Chute normal', correct: false },
            { answer: 'Pênalti', correct: false },
            { answer: 'Cobertura', correct: false },
        ],
    },
    {
        question: 'No primeiro jogo da final da Libertadores de 2012 que ocorreu na La Bombonera, que jogador do Corinthians tentou defender a bola com a mão?',
        answers: [
            { answer: 'Fábio Santos', correct: false },
            { answer: 'Ralf', correct: false },
            { answer: 'Alessandro', correct: false },
            { answer: 'Chicão', correct: true },
        ],
    },
    {
        question: 'Quantos pênaltis o goleiro Cassio defendeu pelo Corinthians?',
        answers: [
            { answer: '30', correct: false },
            { answer: '27', correct: false },
            { answer: '32', correct: true },
            { answer: '22', correct: false },
        ],
    },
    {
        question: 'Contra qual time o Corinthians ganhou o campeonato Paulista de 1977?',
        answers: [
            { answer: 'Palmeiras', correct: false },
            { answer: 'Portuguesa', correct: false },
            { answer: 'Ponte Preta', correct: true },
            { answer: 'São Paulo', correct: false },
        ],
    },

];

// Função para inicializar o quiz
function init() {
    points = 0;
    actualQuestion = 0;
    scoreContainer.style.display = 'none';
    quizzContainer.style.display = 'block';
    createQuestion();
}

// Função para criar uma pergunta
function createQuestion() {
    var currentQuestion = questions[actualQuestion];
    questionElement.textContent = currentQuestion.question;
    answerBox.innerHTML = '';

    currentQuestion.answers.forEach(answer => {
        var answerButton = document.createElement('button');
        answerButton.textContent = answer.answer;
        answerButton.className = 'answer';
        answerButton.onclick = function () {
            checkAnswer(this);
        };
        answerButton.setAttribute('data-correct', answer.correct);
        answerBox.appendChild(answerButton);
    });
}

// Função para verificar a resposta do usuário
function checkAnswer(button) {
    var correct = button.getAttribute('data-correct') === 'true';
    var buttons = answerBox.getElementsByTagName('button');

    for (var i = 0; i < buttons.length; i++) {
        if (buttons[i].getAttribute('data-correct') === 'true') {
            buttons[i].classList.add('correct');
        } else {
            buttons[i].classList.add('wrong');
        }
    }

    if (correct) {
        points++;
    }

    actualQuestion++;
    setTimeout(function () {
        if (actualQuestion >= questions.length) {
            showScore();
        } else {
            createQuestion();
        }
    }, 1000);
}

// Função para exibir a pontuação final
function showScore() {
    quizzContainer.style.display = 'none';
    scoreContainer.style.display = 'block';
    document.getElementById('display-score').textContent = 'Você acertou ' + points + ' de ' + questions.length + ' perguntas';
    document.getElementById('correct-answers').textContent = points;
    document.getElementById('questions-qty').textContent = questions.length;
}

// Event listener para reiniciar o quiz
restartBtn.onclick = function () {
    init();
};

// Inicialização do quiz
init();