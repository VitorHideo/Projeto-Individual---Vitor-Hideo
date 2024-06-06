// quiz2.js

// Declaração de variáveis
var questionElement = document.getElementById('question2');
var answerBox = document.getElementById('answers-box2');
var quizContainer = document.getElementById('quiz-container2');
var scoreContainer = document.getElementById('score-container2');
var restartBtn = document.getElementById('restart2');
var points = 0;
var actualQuestion = 0;

// questions
var questions2 = [
    {
        question: '1- Qual é a seleção com mais copas do mundo?',
        answers: [
            { answer: 'Brasil', correct: true },
            { answer: 'Alemanha', correct: false },
            { answer: 'Itália', correct: false },
            { answer: 'França', correct: false },
        ],
    },
    {
        question: '2 - Qual foi o último brasileira a ganhar o prêmio bola de ouro?',
        answers: [
            { answer: 'Ronaldo Fenômeno', correct: false},
            { answer: 'Ronaldinho Gaúcho', correct: false },
            { answer: 'Kaká', correct: true},
            { answer: 'Neymar', correct: false },
        ],
    },
    {
        question: '3- Qual foi a primeira seleção campeã da copa do mundo?',
        answers: [
            { answer: 'França', correct: false},
            { answer: 'Alemanha', correct: false },
            { answer: 'Argentina', correct: false },
            { answer: 'Uruguai', correct: true },
        ],
    },
    {
        question: '4- Qual é o nome da primeira divisão da liga inglesa?',
        answers: [
            { answer: 'The English League', correct: false},
            { answer: 'Inglesão', correct: false },
            { answer: 'Premier League', correct: true},
            { answer: 'Ligue One', correct: false},
        ],
    },
    {
        question: '5- Qual foi o país sede da copa do mundo de 2002?',
        answers: [
            { answer: 'França', correct: false},
            { answer: 'Uruguai', correct: false },
            { answer: 'Rússia', correct: false },
            { answer: 'Japão/Coréia do Sul', correct: true },
    
        ],
    },
    {
        question: '6- Quem é o maior artilheiro do Brasileirão?',
        answers: [
            { answer: 'Roberto Dinamite', correct: true},
            { answer: 'Romário', correct: false },
            { answer: 'Vampeta', correct: false },
            { answer: 'Ronaldo Fenômeno', correct: false},
        ],
    },
    {
        question: '7- Qual foi o primeiro time a ganhar o Mundial de Clubes FIFA?',
        answers: [
            { answer: 'Roma', correct: false},
            { answer: 'Corinthians', correct: true},
            { answer: 'Inter de Milão', correct: false },
            { answer: 'Real Madrid', correct: false },
        ],
    },
    {
        question: '8- Qual destes times não tem o título da champions league?',
        answers: [
            { answer: 'Nottigham Forest', correct: false},
            { answer: 'Roma', correct: true },
            { answer: 'Steaua Bucareste', correct: false },
            { answer: 'Borussia Dortmund', correct: false },
        ],
    },
    {
        question: '9- Qual destes times é conhecido popularmente como Papão?',
        answers: [
            { answer: 'Internacional', correct: false},
            { answer: 'Remo', correct: false },
            { answer: 'Paysandu', correct: true },
            { answer: 'Corinthians', correct: false },
        ],
    },
    {
        question: '10- Quem foi o autor do gol do título do Chelsea no Mundial de Clubes de 2021?',
        answers: [
            { answer: 'Kai Havertz', correct: true},
            { answer: 'Lukaku', correct: false },
            { answer: 'Paolo Guerrero', correct: false},
            { answer: 'Frank Lampard', correct: false },
        ],
    },
];

// Função para inicializar o quiz
function init() {
    points = 0;
    actualQuestion = 0;
    scoreContainer.style.display = 'none';
    quizContainer.style.display = 'block';
    createQuestion();
}

// Função para criar uma questão
function createQuestion() {
    var currentQuestion = questions2[actualQuestion];
    questionElement.textContent = currentQuestion.question;
    answerBox.innerHTML = '';

    currentQuestion.answers.forEach(answer => {
        var answerButton = document.createElement('button');
        answerButton.textContent = answer.answer;
        answerButton.className = 'answer2';
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
            buttons[i].classList.add('correct2');
        } else {
            buttons[i].classList.add('wrong2');
        }
    }

    if (correct) {
        points++;
    }

    actualQuestion++;
    setTimeout(function () {
        if (actualQuestion >= questions2.length) {
            showScore();
        } else {
            createQuestion();
        }
    }, 500);
}

// Função para exibir a pontuação final
function showScore() {
    quizContainer.style.display = 'none';
    scoreContainer.style.display = 'block';
    document.getElementById('correct-answers2').textContent = points;
    document.getElementById('questions-qty2').textContent = questions2.length;
}

// Event listener para reiniciar o quiz
restartBtn.onclick = function () {
    init();
};

// Inicialização do quiz
init();